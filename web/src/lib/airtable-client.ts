export type FieldSet = Record<string, unknown>;

export type AirtableRecord<T extends FieldSet = FieldSet> = {
  id: string;
  fields: T;
};

type Sort = { field: string; direction: "asc" | "desc" };

type SelectOptions = {
  filterByFormula?: string;
  sort?: Sort[];
  maxRecords?: number;
  fields?: string[];
};

type ListResponse = {
  records: AirtableRecord[];
  offset?: string;
};

const AIRTABLE_API = "https://api.airtable.com/v0";

function getCredentials() {
  const apiKey = process.env.AIRTABLE_API_TOKEN;
  const baseId = process.env.AIRTABLE_BASE_ID;
  if (!apiKey || !baseId) {
    throw new Error("Airtable not configured");
  }
  return { apiKey, baseId };
}

async function airtableRequest<T>(url: URL, init?: RequestInit): Promise<T> {
  const { apiKey } = getCredentials();
  const response = await fetch(url, {
    ...init,
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
      ...init?.headers,
    },
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(`Airtable request failed (${response.status}): ${body}`);
  }

  return response.json() as Promise<T>;
}

function tableUrl(tableName: string): URL {
  const { baseId } = getCredentials();
  return new URL(
    `${AIRTABLE_API}/${baseId}/${encodeURIComponent(tableName)}`,
  );
}

function applySelectParams(url: URL, options: SelectOptions): void {
  if (options.filterByFormula) {
    url.searchParams.set("filterByFormula", options.filterByFormula);
  }
  if (options.maxRecords) {
    url.searchParams.set("maxRecords", String(options.maxRecords));
  }
  if (options.fields) {
    for (const field of options.fields) {
      url.searchParams.append("fields[]", field);
    }
  }
  if (options.sort) {
    options.sort.forEach((sort, index) => {
      url.searchParams.set(`sort[${index}][field]`, sort.field);
      url.searchParams.set(`sort[${index}][direction]`, sort.direction);
    });
  }
}

class AirtableTableQuery {
  constructor(
    private readonly tableName: string,
    private readonly options: SelectOptions,
  ) {}

  async all(): Promise<AirtableRecord[]> {
    const records: AirtableRecord[] = [];
    let offset: string | undefined;

    do {
      const url = tableUrl(this.tableName);
      applySelectParams(url, this.options);
      if (offset) {
        url.searchParams.set("offset", offset);
      }

      const page = await airtableRequest<ListResponse>(url);
      records.push(...page.records);
      offset = page.offset;
    } while (offset);

    return records;
  }
}

class AirtableTable {
  constructor(private readonly tableName: string) {}

  select(options: SelectOptions = {}): AirtableTableQuery {
    return new AirtableTableQuery(this.tableName, options);
  }

  async find(recordId: string): Promise<AirtableRecord> {
    const url = tableUrl(this.tableName);
    url.pathname += `/${recordId}`;
    return airtableRequest<AirtableRecord>(url);
  }

  async create(fields: FieldSet): Promise<AirtableRecord> {
    const url = tableUrl(this.tableName);
    return airtableRequest<AirtableRecord>(url, {
      method: "POST",
      body: JSON.stringify({ fields }),
    });
  }

  async update(recordId: string, fields: FieldSet): Promise<AirtableRecord> {
    const url = tableUrl(this.tableName);
    url.pathname += `/${recordId}`;
    return airtableRequest<AirtableRecord>(url, {
      method: "PATCH",
      body: JSON.stringify({ fields }),
    });
  }
}

export type AirtableBase = (tableName: string) => AirtableTable;

export function createAirtableBase(): AirtableBase {
  return (tableName: string) => new AirtableTable(tableName);
}

/**
 * Skrypt do automatyzacji Airtable (Automation → Run script).
 * Wklej do kroku „Run script” — wzorowany na projekcie IRLF.
 *
 * Konfiguracja: docs/airtable-automation.md
 */

const LOG = "[AM revalidate]";
const startedAt = Date.now();

function maskSecret(value) {
  if (!value || typeof value !== "string") return "(brak)";
  if (value.length <= 6) return "***";
  return `***${value.slice(-4)} (len=${value.length})`;
}

function log(step, detail) {
  const elapsed = Date.now() - startedAt;
  console.log(`${LOG} [+${elapsed}ms] ${step}${detail ? ": " + detail : ""}`);
}

log("START", new Date().toISOString());

const config = input.config();
const { revalidateSecret, siteUrl, tableName, recordId } = config;

log(
  "INPUT",
  JSON.stringify({
    siteUrl: siteUrl || "(domyślnie https://automationminds.net)",
    secret: maskSecret(revalidateSecret),
    tableName: tableName || "(nie podano)",
    recordId: recordId || "(nie podano)",
  }),
);

if (!revalidateSecret) {
  log("ERROR", "Brak input variable revalidateSecret");
  throw new Error("Brak input variable: revalidateSecret");
}

const base = (siteUrl || "https://automationminds.net").replace(/\/$/, "");
const params = new URLSearchParams({
  secret: revalidateSecret,
});

if (tableName) params.set("tableName", String(tableName));
if (recordId) params.set("recordId", String(recordId));

const url = `${base}/api/revalidate?${params.toString()}`;

log(
  "REQUEST",
  `GET ${base}/api/revalidate?secret=${maskSecret(revalidateSecret)}&tableName=${tableName || ""}&recordId=${recordId || ""}`,
);

let response;
let body;

try {
  response = await fetch(url, { method: "GET" });
  body = await response.text();
  log("RESPONSE", `HTTP ${response.status}, body length=${body.length}`);
} catch (err) {
  log("FETCH_FAILED", String(err));
  throw new Error(`fetch nie powiódł się: ${err}`);
}

log("BODY", body.length > 500 ? body.slice(0, 500) + "…" : body);

if (!response.ok) {
  log("ERROR", `HTTP ${response.status}`);
  throw new Error(`Revalidate HTTP ${response.status}: ${body}`);
}

let data;
try {
  data = JSON.parse(body);
  log("PARSE", "JSON OK");
} catch {
  data = body;
  log("PARSE", "odpowiedź nie-JSON — używam raw text");
}

if (!data || data.revalidated !== true) {
  log("ERROR", "Brak pola revalidated: true w odpowiedzi");
  throw new Error("Odpowiedź bez revalidated: true — " + body);
}

const totalMs = Date.now() - startedAt;
log(
  "SUCCESS",
  JSON.stringify({
    revalidated: data.revalidated,
    mode: data.mode ?? null,
    paths: data.paths ?? null,
    serverNow: data.now ?? null,
    tableName: tableName || null,
    recordId: recordId || null,
    durationMs: totalMs,
  }),
);

console.log(`${LOG} Zakończono pomyślnie w ${totalMs} ms`);

import {
  createContactSubmission,
  createContactSubmissionStep1,
  updateContactSubmissionStep2,
} from "@/lib/airtable";
import {
  contactSchema,
  contactStep1Schema,
  contactStep2Schema,
} from "@/lib/validation";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (body.step === 1) {
      const parsed = contactStep1Schema.safeParse(body);

      if (!parsed.success) {
        return NextResponse.json(
          { error: "Nieprawidłowe dane formularza" },
          { status: 400 },
        );
      }

      if (parsed.data.website) {
        return NextResponse.json({ error: "Invalid data" }, { status: 400 });
      }

      const submissionId = await createContactSubmissionStep1(parsed.data);

      return NextResponse.json({ success: true, submissionId });
    }

    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Nieprawidłowe dane formularza" },
        { status: 400 },
      );
    }

    if (parsed.data.website) {
      return NextResponse.json({ error: "Invalid data" }, { status: 400 });
    }

    await createContactSubmission({
      name: parsed.data.name,
      email: parsed.data.email,
      phone: parsed.data.phone,
      message: parsed.data.message,
      sourcePage: parsed.data.sourcePage,
      utmSource: parsed.data.utmSource,
      utmMedium: parsed.data.utmMedium,
      utmCampaign: parsed.data.utmCampaign,
      utmTerm: parsed.data.utmTerm,
      utmContent: parsed.data.utmContent,
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Wystąpił błąd serwera" },
      { status: 500 },
    );
  }
}

export async function PATCH(request: Request) {
  try {
    const body = await request.json();
    const parsed = contactStep2Schema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Nieprawidłowe dane formularza" },
        { status: 400 },
      );
    }

    if (parsed.data.website) {
      return NextResponse.json({ error: "Invalid data" }, { status: 400 });
    }

    await updateContactSubmissionStep2(parsed.data.submissionId, {
      employeeCount: parsed.data.employeeCount,
      industry: parsed.data.industry,
      interestedServices: parsed.data.interestedServices,
      additionalNotes: parsed.data.additionalNotes,
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Wystąpił błąd serwera" },
      { status: 500 },
    );
  }
}

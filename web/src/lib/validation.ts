import { z } from "zod";
import { EMPLOYEE_COUNT_OPTIONS, INDUSTRY_OPTIONS } from "./contact-form-options";

export const contactSchema = z.object({
  name: z.string().min(2, "Podaj imię i nazwisko"),
  email: z.string().email("Podaj poprawny adres e-mail"),
  phone: z.string().min(7, "Podaj numer telefonu"),
  message: z.string().min(10, "Wiadomość jest zbyt krótka"),
  sourcePage: z.string().min(1),
  website: z.string().optional(),
  utmSource: z.string().optional(),
  utmMedium: z.string().optional(),
  utmCampaign: z.string().optional(),
  utmTerm: z.string().optional(),
  utmContent: z.string().optional(),
});

export const contactStep1Schema = z.object({
  firstName: z.string().min(2, "Podaj imię"),
  lastName: z.string().min(2, "Podaj nazwisko"),
  email: z.string().email("Podaj poprawny adres e-mail"),
  phone: z.string().min(7, "Podaj numer telefonu"),
  company: z.string().min(2, "Podaj nazwę firmy"),
  consent: z.literal(true, {
    errorMap: () => ({ message: "Wymagana zgoda na przetwarzanie danych" }),
  }),
  sourcePage: z.string().min(1),
  website: z.string().optional(),
  utmSource: z.string().optional(),
  utmMedium: z.string().optional(),
  utmCampaign: z.string().optional(),
  utmTerm: z.string().optional(),
  utmContent: z.string().optional(),
});

export const contactStep2Schema = z.object({
  submissionId: z.string().min(1),
  employeeCount: z.enum(EMPLOYEE_COUNT_OPTIONS).optional(),
  industry: z.enum(INDUSTRY_OPTIONS).optional(),
  interestedServices: z.array(z.string()).optional(),
  additionalNotes: z.string().optional(),
  website: z.string().optional(),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
export type ContactStep1Values = z.infer<typeof contactStep1Schema>;
export type ContactStep2Values = z.infer<typeof contactStep2Schema>;

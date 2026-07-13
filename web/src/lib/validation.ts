import { z } from "zod";

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

export type ContactFormValues = z.infer<typeof contactSchema>;

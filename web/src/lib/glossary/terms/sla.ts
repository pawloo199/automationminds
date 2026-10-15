import { defineTerm } from "../types";

export default defineTerm({
  slug: "sla",
  term: "SLA",
  fullName: "Service Level Agreement",
  category: "systemy",
  definition:
    "SLA to uzgodniony poziom obsługi, czyli zobowiązanie, w jakim czasie i z jaką jakością sprawa zostanie obsłużona, na przykład odpowiedź na zgłoszenie w ciągu 4 godzin roboczych albo naprawa w ciągu 2 dni.",
  metaTitle: "SLA: co to jest i jak pilnować czasów obsługi",
  metaDescription:
    "SLA co to jest: umowny poziom obsługi w praktyce, przykłady czasów reakcji i naprawy, jak mierzyć SLA i jak automatyzacja pomaga dotrzymać terminów.",
  primaryKeyword: "sla co to",
  updatedAt: "2026-10-15",
  body: [
    "## Co to jest SLA",
    "SLA to ustalenie, jak szybko i jak dobrze firma obsługuje sprawy. Może być zapisane w umowie z klientem, na przykład w umowie serwisowej, albo obowiązywać wewnętrznie, na przykład między działem IT a resztą firmy. Najczęściej określa czas reakcji, czyli pierwszej odpowiedzi, i czas rozwiązania. Często rozróżnia też priorytety: awaria zatrzymująca pracę ma krótszy termin niż drobna usterka.",
    "Liczby w definicji są tylko przykładem. Każda firma ustala własne terminy, dopasowane do branży i możliwości zespołu.",
    "## Przykład tabeli SLA",
    "To przykład ilustracyjny:",
    "| Priorytet | Przykład | Czas reakcji | Czas rozwiązania |\n|---|---|---|---|\n| Krytyczny | Maszyna stoi, produkcja zatrzymana | 1 godzina | 1 dzień roboczy |\n| Wysoki | Usterka utrudniająca pracę | 4 godziny robocze | 2 dni robocze |\n| Normalny | Drobna usterka, pytanie | 1 dzień roboczy | 5 dni roboczych |",
    "## Jak mierzy się SLA",
    "Żeby wiedzieć, czy SLA jest dotrzymywane, każde zgłoszenie musi mieć zapisany czas przyjęcia, pierwszej odpowiedzi i rozwiązania, a także priorytet. W skrzynce mailowej jest to prawie niemożliwe. W systemie zgłoszeń lub rejestrze dzieje się automatycznie, a raport pokazuje, jaki odsetek spraw zmieścił się w terminie i gdzie są opóźnienia.",
    "## Jak automatyzacja pomaga dotrzymać SLA",
    "- **Szybkie przyjęcie:** zgłoszenia z maila, formularza i telefonu trafiają do jednego rejestru od razu, a nie gdy ktoś sprawdzi skrzynkę.\n- **Priorytet i przypisanie:** reguły albo AI oceniają priorytet i przypisują sprawę właściwej osobie.\n- **Liczniki czasu:** system liczy czas do terminu w godzinach roboczych.\n- **Ostrzeżenia:** gdy termin się zbliża, opiekun i kierownik dostają powiadomienie, zanim SLA zostanie przekroczone.\n- **Raporty:** dotrzymanie SLA według klientów, rodzajów spraw i osób.",
    "## Jak ustalić realne SLA",
    "SLA powinno wynikać z danych o tym, jak dziś obsługujecie sprawy, a nie z życzeń. Najpierw warto przez kilka tygodni mierzyć czasy reakcji i rozwiązania, a dopiero potem ustalić terminy, które zespół jest w stanie dotrzymać. Zbyt ambitne SLA, przekraczane regularnie, szkodzi relacji z klientem bardziej niż uczciwie ustalone dłuższe terminy.",
    "## Jak to wygląda w praktyce",
    "To przykład ilustracyjny. Firma serwisowa ma z klientami umowy z różnym SLA. Zgłoszenie przychodzi mailem, automatyzacja rozpoznaje klienta, sprawdza jego umowę i ustawia termin reakcji. Dyspozytor widzi zgłoszenia posortowane według czasu do przekroczenia SLA. Gdy do terminu zostaje godzina, kierownik dostaje ostrzeżenie. Na koniec miesiąca klient dostaje raport dotrzymania SLA. Więcej w artykule [umowy serwisowe](/poradnik/umowy-serwisowe) i na stronie [zgłoszenia serwisowe](/branze/firmy-serwisowe/zgloszenia-serwisowe).",
    "Systemy zgłoszeń i przypomnienia o terminach wdrażamy w usłudze [automatyzacja w obsłudze klienta](/uslugi/automatyzacja-w-obsludze-klienta), a cały proces opisujemy na stronie [obsługa reklamacji](/procesy/obsluga-reklamacji).",
  ].join("\n\n"),
  faq: [
    { question: "Czym różni się czas reakcji od czasu rozwiązania?", answer: "Czas reakcji to czas do pierwszej merytorycznej odpowiedzi. Czas rozwiązania to czas do usunięcia problemu lub zamknięcia sprawy." },
    { question: "Czy SLA liczy się w godzinach roboczych?", answer: "Zwykle tak, ale zależy to od umowy. System musi znać kalendarz pracy i święta, żeby liczyć terminy poprawnie." },
    { question: "Czy SLA przydaje się wewnątrz firmy?", answer: "Tak. Wewnętrzne SLA, np. czas akceptacji faktury czy odpowiedzi działu IT, pomaga skrócić procesy, które czekają na decyzje." },
  ],
  relatedTermSlugs: ["workflow", "bpmn", "crm"],
  relatedServiceSlugs: ["automatyzacja-w-obsludze-klienta", "automatyzacja-dla-firm-uslugowych"],
  relatedToolSlugs: ["n8n"],
  relatedProcessSlugs: ["obsluga-reklamacji"],
  relatedArticleSlugs: ["umowy-serwisowe", "program-do-zarzadzania-serwisem"],
});

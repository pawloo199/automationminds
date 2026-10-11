import { defineArticle } from "../define";

export default defineArticle({
  id: "a62",
  slug: "umowy-serwisowe",
  title: "Umowy serwisowe: jak je prowadzić i rozliczać, żeby przynosiły zysk",
  metaTitle: "Umowy serwisowe: jak je prowadzić i rozliczać",
  metaDescription:
    "Jak firma serwisowa może prowadzić umowy serwisowe bez arkuszy: rodzaje umów, terminy reakcji, przeglądy, rozliczenia, prace poza umową i rentowność.",
  primaryKeyword: "umowy serwisowe",
  secondaryKeywords: [
    "rozliczanie umów serwisowych",
    "abonament serwisowy",
    "umowa serwisowa SLA",
  ],
  excerpt:
    "Umowy serwisowe dają firmie przewidywalny przychód, ale tylko wtedy, gdy są dobrze prowadzone. W wielu firmach przeglądy z umów umykają, prace poza zakresem nie są fakturowane, a nikt nie wie, które umowy są rentowne. Opisujemy, jak to uporządkować.",
  categories: ["firmy-serwisowe", "audyt-i-koszty"],
  publishedAt: "2026-10-11",
  updatedAt: "2026-10-11",
  imageUrl: "https://images.unsplash.com/photo-1642749776312-aa42ce20c9f5?w=1200&q=80",
  imageAlt: "Serwisanci przy urządzeniach na dachu budynku",
  summary: [
    "Umowa serwisowa to obietnica: przeglądów w terminie, reakcji w określonym czasie, ceny za określony zakres.",
    "Obietnicy łatwo dotrzymać, gdy terminy, zakres i limity są zapisane w systemie, a nie w pamięci.",
    "Najczęstsze straty to przeglądy, które się nie odbyły, i prace poza umową, których nie zafakturowano.",
    "Raport rentowności umów pokazuje, które warto przedłużyć na tych samych warunkach.",
  ],
  relatedServiceSlugs: ["automatyzacja-dla-firm-uslugowych", "automatyzacja-raportow", "projektowanie-baz-danych"],
  relatedArticleSlugs: ["co-zautomatyzowac-w-firmie-serwisowej", "program-do-zarzadzania-serwisem", "jak-mierzyc-roi-automatyzacji"],
  cta: {
    title: "Chcecie uporządkować umowy serwisowe?",
    body: "Przejrzymy wasze umowy i sposób ich rozliczania i podpowiemy, co zautomatyzować, żeby przeglądy i faktury nie umykały.",
  },
  body: [
    "Dla firmy serwisowej umowy to najlepszy rodzaj przychodu. Są przewidywalne, pozwalają planować pracę serwisantów i budują długą relację z klientem. Klient z umową rzadziej szuka innego serwisu, a przy awarii dzwoni najpierw do was.",
    "Jednocześnie umowy wymagają dyscypliny. Każda umowa to obietnica: przeglądów w określonych terminach, reakcji na awarię w określonym czasie, określonego zakresu prac w określonej cenie. Gdy firma ma kilkanaście umów, da się ich pilnować w arkuszu. Gdy ma ich kilkaset, arkusz przestaje wystarczać, a obietnice zaczynają się rozjeżdżać z rzeczywistością.",
    "## Rodzaje umów serwisowych",
    "Firmy serwisowe stosują zwykle kilka modeli umów, często jednocześnie:",
    "- **Abonament.** Stała opłata miesięczna lub roczna za przeglądy i gotowość do reakcji. Naprawy rozliczane osobno albo do ustalonego limitu.\n- **Pakiet wizyt.** Klient kupuje określoną liczbę wizyt lub godzin do wykorzystania w określonym czasie.\n- **Przegląd płatny przy wizycie.** Firma przypomina o przeglądzie i rozlicza go po wykonaniu.\n- **Umowa z terminem reakcji.** Zwykle dla klientów firmowych: firma zobowiązuje się do reakcji na awarię w określonym czasie.",
    "Każdy model wymaga innego sposobu prowadzenia i rozliczania. W arkuszu łatwo je pomylić.",
    "## Co musi być zapisane",
    "Żeby dotrzymywać obietnic z umowy, system musi znać jej warunki. Dla każdej umowy warto zapisać:",
    "- klienta i lokalizacje,\n- urządzenia objęte umową,\n- częstotliwość i zakres przeglądów,\n- termin reakcji na awarię, jeśli jest,\n- co jest wliczone w cenę, a co rozliczane osobno,\n- limity, np. liczbę wizyt lub godzin,\n- cenę, sposób i terminy fakturowania,\n- datę końca i warunki przedłużenia.",
    "Gdy te dane są w bazie, a nie w treści umowy w PDF, automatyzacja może z nich korzystać.",
    "## Przeglądy z umów",
    "Najczęstsza strata w umowach to przegląd, który się nie odbył. Klient płaci abonament, a przegląd nie został zaplanowany, bo nikt nie pamiętał. Przy kontroli lub awarii klient ma pretensje, a firma traci wiarygodność. Przy umowach płatnych za przegląd strata jest wprost finansowa: przegląd się nie odbył, faktura nie wyszła.",
    "Automatyzacja codziennie sprawdza, którym urządzeniom z umów zbliża się termin przeglądu, i tworzy wizyty do zaplanowania albo wysyła klientowi propozycję terminu. Po przeglądzie następny termin wylicza się sam. Opisujemy to na stronie [przeglądy okresowe i umowy serwisowe](/branze/firmy-serwisowe/przeglady-okresowe).",
    "## Terminy reakcji",
    "Umowy z klientami firmowymi często zawierają termin reakcji na awarię. Gdy zgłoszenie przychodzi, dyspozytor musi wiedzieć, że ten klient ma umowę i ile czasu zostało. System pokazuje to przy zgłoszeniu i przypomina, gdy termin się zbliża. Po miesiącu raport pokazuje, czy firma dotrzymała terminów, co jest przydatne w rozmowie z klientem o przedłużeniu umowy.",
    "[[CTA]]",
    "## Prace poza umową",
    "Druga częsta strata to prace, które nie są objęte umową, a nie zostały zafakturowane. Serwisant przy przeglądzie wymienił część, która nie jest wliczona, albo wykonał naprawę ponad limit. W protokole jest to zapisane, ale biuro nie wie, że trzeba to rozliczyć osobno.",
    "Gdy protokół jest połączony z warunkami umowy, system oznacza pozycje spoza zakresu i dodaje je do faktury do sprawdzenia. Biuro widzi listę takich pozycji i decyduje, co zafakturować. Opisujemy to na stronie [części i rozliczenia zleceń](/branze/firmy-serwisowe/rozliczenia-zlecen).",
    "## Fakturowanie umów",
    "Abonamenty fakturuje się cyklicznie, pakiety przy zakupie, przeglądy płatne po wykonaniu, a prace dodatkowe na bieżąco. Gdy wszystko jest w arkuszu, łatwo o pominiętą fakturę. Automatyzacja przygotowuje faktury według zasad każdej umowy w programie do faktur, a biuro je sprawdza i wysyła. Faktury trafiają do [KSeF](/narzedzia/ksef).",
    "## Rentowność umów",
    "Nie każda umowa jest rentowna. Klient z dużą liczbą starszych urządzeń może wymagać tylu wizyt, że abonament nie pokrywa kosztów. Inny klient płaci abonament, a serwis prawie nie jest potrzebny. Bez danych trudno to ocenić.",
    "Raport rentowności zestawia przychód z umowy z kosztami: czasem pracy serwisantów, dojazdami, częściami wliczonymi w cenę. Pokazuje, które umowy warto przedłużyć na tych samych warunkach, a przy których trzeba porozmawiać o cenie lub zakresie. Jak liczyć takie efekty, opisujemy w artykule [jak mierzyć ROI automatyzacji](/poradnik/jak-mierzyc-roi-automatyzacji).",
    "## Przedłużanie umów",
    "Umowa, która wygasa bez rozmowy, to utracony przychód. System przypomina o końcu umowy z wyprzedzeniem i przygotowuje dla handlowca lub właściciela podsumowanie: liczbę wizyt, dotrzymane terminy, rentowność. Taka rozmowa jest łatwiejsza, gdy firma może pokazać klientowi, co dla niego zrobiła.",
    "## Raport dla klienta firmowego",
    "Klienci firmowi, szczególnie zarządcy budynków i działy techniczne, często potrzebują od serwisu zestawienia: jakie urządzenia zostały przejrzane, jakie usterki wykryto, co zalecono, jakie prace wykonano. W wielu firmach takie zestawienie składa się ręcznie z protokołów raz na kwartał albo przed audytem klienta.",
    "Gdy protokoły są w bazie i połączone z umową, raport dla klienta może powstawać automatycznie: lista urządzeń, daty przeglądów, wykonane prace, zalecenia, dotrzymane terminy reakcji. Klient dostaje go regularnie, bez proszenia, a firma serwisowa pokazuje w ten sposób wartość umowy. To jeden z najlepszych argumentów przy przedłużaniu umowy.",
    "## Zespół i dane",
    "Uporządkowanie umów nie wymaga zmiany sposobu pracy serwisantów. Serwisant nadal wypełnia protokół, a to, czy praca była objęta umową, czy przegląd był w terminie i co trzeba zafakturować, rozpoznaje system na podstawie danych umowy. Więcej pracy ma na początku biuro, które przenosi umowy do bazy, ale potem oszczędza czas co miesiąc.",
    "## Ceny i waloryzacja",
    "Umowy zawierane na kilka lat wymagają aktualizacji cen. Gdy daty i zasady waloryzacji są zapisane w bazie, system przypomina o nich z wyprzedzeniem i przygotowuje dla biura listę umów, których dotyczy zmiana. Bez tego wiele firm przez lata świadczy usługi po cenach sprzed kilku lat, bo nikt nie pamiętał o aktualizacji.",
    "Przy waloryzacji warto też sięgnąć do raportu rentowności. Umowa, która od lat przynosi stratę, wymaga rozmowy o zakresie, a nie tylko o wskaźniku.",
    "## Porównanie: arkusz i uporządkowane umowy",
    "| Element | Arkusz | Baza umów z automatyzacją |\n|---|---|---|\n| Przeglądy | Pilnowane ręcznie | Wizyty tworzone z terminów |\n| Terminy reakcji | Pamięć dyspozytora | Widoczne przy zgłoszeniu |\n| Prace poza umową | Często niezafakturowane | Oznaczone przy protokole |\n| Faktury | Ręcznie, według pamięci | Według zasad umowy |\n| Rentowność | Nieznana | Raport według umów |\n| Przedłużenia | Gdy klient zapyta | Przypomnienie i podsumowanie |",
    "## Od czego zacząć",
    "Najpierw warto przenieść umowy do bazy: warunki, urządzenia, terminy. To praca, którą wykonuje się raz. Potem można dołożyć przypomnienia o przeglądach, oznaczanie prac poza umową i fakturowanie. Raport rentowności ma sens po kilku miesiącach, gdy zbierze się wystarczająco dużo danych. Jeśli korzystacie z programu do zarządzania serwisem, sprawdźcie, czy obsługuje wasze modele umów, o czym piszemy w artykule [program do zarządzania serwisem](/poradnik/program-do-zarzadzania-serwisem). Pozostałe procesy opisujemy w artykule [co zautomatyzować w firmie serwisowej](/poradnik/co-zautomatyzowac-w-firmie-serwisowej).",
  ].join("\n\n"),
  faq: [
    {
      question: "Jakie są rodzaje umów serwisowych?",
      answer:
        "Najczęściej abonament, pakiet wizyt lub godzin, przegląd płatny przy wizycie i umowa z terminem reakcji na awarię, często dla klientów firmowych.",
    },
    {
      question: "Jak nie przegapić przeglądów z umów?",
      answer:
        "Zapisać urządzenia i częstotliwość przeglądów w bazie, a wizyty lub przypomnienia tworzyć automatycznie z terminów.",
    },
    {
      question: "Jak rozliczać prace poza umową?",
      answer:
        "Połączyć protokół z warunkami umowy, tak żeby pozycje spoza zakresu były oznaczane i trafiały do faktury do sprawdzenia.",
    },
    {
      question: "Jak sprawdzić, czy umowa serwisowa jest rentowna?",
      answer:
        "Zestawić przychód z umowy z czasem pracy, dojazdami i częściami wliczonymi w cenę. Raport rentowności pokazuje to dla każdej umowy.",
    },
    {
      question: "Czy umowy serwisowe można fakturować automatycznie?",
      answer:
        "Faktury mogą powstawać automatycznie według zasad umowy, a biuro sprawdza je przed wysłaniem.",
    },
  ],
});

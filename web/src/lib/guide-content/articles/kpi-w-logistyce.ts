import { defineArticle } from "../define";

export default defineArticle({
  id: "a42",
  slug: "kpi-w-logistyce",
  title: "KPI w logistyce: jakie wskaźniki mierzyć i jak automatyzować raporty dla klientów",
  metaTitle: "KPI w logistyce: wskaźniki i automatyczne raporty",
  metaDescription:
    "Jakie KPI mierzyć w firmie logistycznej i magazynie, jak je definiować w umowach z klientami i jak automatyzować raporty, żeby nie składać ich ręcznie.",
  primaryKeyword: "KPI w logistyce",
  secondaryKeywords: [
    "wskaźniki KPI w magazynie",
    "raportowanie w logistyce",
    "KPI dla klientów 3PL",
  ],
  excerpt:
    "Klienci operatorów logistycznych oczekują regularnych raportów i wskaźników jakości usług. Opisujemy, jakie KPI warto mierzyć, jak je definiować, żeby nie było sporów, i jak automatyzować raporty, żeby nie zabierały opiekunom klientów całego tygodnia.",
  categories: ["firmy-logistyczne", "dane-i-cyfryzacja"],
  publishedAt: "2026-10-11",
  updatedAt: "2026-10-11",
  imageUrl: "https://images.unsplash.com/photo-1672552226380-486fe900b322?w=1200&q=80",
  imageAlt: "Magazyn z kartonami i paletami",
  summary: [
    "Dobre KPI w logistyce są mierzalne z danych w systemach, zrozumiałe dla klienta i jednoznacznie zdefiniowane w umowie.",
    "Najczęściej mierzy się terminowość, dokładność, czas przyjęcia i wydania, reklamacje i wykorzystanie powierzchni.",
    "Raporty i KPI liczone ręcznie przed spotkaniem z klientem pokazują problem za późno.",
    "Automatyczne raporty na danych z WMS i TMS pozwalają reagować, zanim klient zwróci uwagę na spadek jakości.",
  ],
  relatedServiceSlugs: ["automatyzacja-raportow", "automatyzacja-dla-logistyki", "porzadkowanie-i-strukturyzowanie-danych"],
  relatedArticleSlugs: ["co-zautomatyzowac-w-firmie-logistycznej", "wms-a-automatyzacja", "jak-mierzyc-roi-automatyzacji"],
  cta: {
    title: "Chcecie zautomatyzować raporty i KPI dla klientów?",
    body: "Pomożemy zdefiniować wskaźniki i zbudować raporty na danych z WMS i TMS, które wychodzą do klientów same. Pierwsza rozmowa trwa 30 minut i jest bezpłatna.",
  },
  body: [
    "W relacji operatora logistycznego z klientem KPI pełnią podwójną rolę. Dla klienta są dowodem, że usługa jest realizowana zgodnie z umową. Dla operatora są narzędziem do zarządzania magazynem i wczesnym sygnałem, że coś idzie nie tak. Problem w tym, że w wielu firmach KPI liczy się ręcznie, przed spotkaniem z klientem, z eksportów z kilku systemów. Wtedy pokazują problem za późno i zabierają czas, który mógłby trafić do klientów.",
    "W tym artykule opisujemy, jakie KPI warto mierzyć w firmie logistycznej, jak je definiować, żeby nie prowadziły do sporów, i jak automatyzować raporty.",
    "## Cechy dobrego KPI",
    "Zanim wybierzecie wskaźniki, warto sprawdzić, czy każdy z nich jest:",
    "- **mierzalny z danych w systemach,** a nie z ręcznych notatek,\n- **jednoznacznie zdefiniowany,** łącznie z tym, co się do niego wlicza, a co nie,\n- **zrozumiały dla klienta** i związany z tym, co dla niego ważne,\n- **możliwy do porównania** w czasie i między klientami.",
    "Wskaźnik, którego nie da się policzyć z danych, będzie liczony ręcznie i z opóźnieniem. Wskaźnik źle zdefiniowany będzie źródłem sporów, bo klient i operator policzą go inaczej.",
    "## Najczęściej mierzone KPI",
    "| Wskaźnik | Co mierzy | Skąd dane |\n|---|---|---|\n| Terminowość wydań | Udział zleceń wydanych w ustalonym czasie | WMS |\n| Terminowość dostaw | Udział dostaw u odbiorcy w ustalonym oknie | TMS, przewoźnicy |\n| Dokładność kompletacji | Udział zleceń bez błędów w ilościach i indeksach | WMS, reklamacje |\n| Czas przyjęcia | Czas od przyjazdu dostawy do dostępności towaru | WMS, awizacje |\n| Reklamacje | Liczba i rodzaj reklamacji na liczbę zleceń | Rejestr reklamacji |\n| Zgodność stanów | Różnice wykryte przy inwentaryzacji | WMS |\n| Wykorzystanie powierzchni | Zajęte miejsca paletowe na dostępne | WMS |",
    "Nie każdy klient potrzebuje wszystkich wskaźników. Dla klienta z branży spożywczej ważne będą daty ważności i czas przyjęcia, dla e-commerce terminowość wydań w dniu zamówienia, dla produkcji dostępność komponentów na czas.",
    "## Definicje, które zapobiegają sporom",
    "Większość sporów o KPI nie dotyczy wyników, tylko definicji. Czy zlecenie złożone po godzinie odcięcia liczy się do terminowości tego samego dnia? Czy opóźnienie przewoźnika obciąża operatora? Czy reklamacja nieuznana wlicza się do wskaźnika? Odpowiedzi na takie pytania warto zapisać w umowie lub załączniku i użyć dokładnie tych samych zasad w obliczeniach.",
    "Dobrą praktyką jest przygotowanie krótkiej karty dla każdego wskaźnika: nazwa, wzór, źródło danych, wyjątki, częstotliwość i próg. Taka karta jest potem specyfikacją dla automatycznego raportu.",
    "[[CTA]]",
    "## Ile wskaźników to za dużo",
    "Pokusa jest taka, żeby mierzyć wszystko. W praktyce raport z kilkunastoma wskaźnikami jest trudny do czytania, a klient i tak patrzy na dwa lub trzy. Lepiej uzgodnić z klientem kilka najważniejszych wskaźników w umowie, a resztę traktować jako wskaźniki pomocnicze, dostępne na żądanie lub w raporcie wewnętrznym. Mniejsza liczba wskaźników to też mniej definicji do uzgodnienia i mniej okazji do sporów.",
    "## Dlaczego ręczne raporty nie wystarczają",
    "Ręczny raport ma trzy wady. Zabiera czas: eksport z WMS, eksport z TMS, połączenie w arkuszu, formatowanie i wysyłka, osobno dla każdego klienta. Powstaje z opóźnieniem, więc problem z terminowością widać po fakcie. A każda osoba liczy trochę inaczej, co prowadzi do niespójności.",
    "Automatyczne raporty usuwają te problemy. Dane są pobierane z systemów regularnie, wskaźniki liczone według tych samych definicji, a raport wychodzi do klienta o ustalonej porze. Opisujemy to na stronie [raporty i obsługa klientów](/branze/firmy-logistyczne/obsluga-klientow).",
    "## Jak zautomatyzować raporty i KPI",
    "1. **Spisanie definicji.** Karta dla każdego wskaźnika, uzgodniona z klientem.\n2. **Dostęp do danych.** Ustalenie, jak pobierać dane z WMS, TMS i rejestru reklamacji bez obciążania systemów w szczycie. Piszemy o tym w artykule [WMS a automatyzacja](/poradnik/wms-a-automatyzacja).\n3. **Obliczenia.** Wskaźniki liczone przez system według definicji, nie przez model AI.\n4. **Raporty w formatach klientów.** Plik, raport w Power BI albo podsumowanie w mailu, o ustalonej porze.\n5. **Progi i alerty.** Informacja dla opiekuna i kierownika, gdy wskaźnik spada poniżej progu.\n6. **Porównanie z dotychczasowymi raportami.** Przez pierwsze okresy warto porównać wyniki z raportami ręcznymi, żeby wychwycić różnice w definicjach.",
    "Dane muszą być uporządkowane, żeby raporty były wiarygodne. Jeśli WMS zawiera braki lub niespójności, warto zacząć od ich uporządkowania, o czym piszemy w artykule [porządek w danych przed AI i automatyzacją](/poradnik/porzadek-w-danych-przed-ai-i-automatyzacja).",
    "## Dane, które warto uporządkować przed startem",
    "Najczęstsze problemy z automatycznymi KPI to brakujące znaczniki czasu w WMS, zlecenia zamykane z opóźnieniem, reklamacje zapisywane poza systemem i różne nazwy tego samego klienta w różnych systemach. Każdy z nich zaburza wskaźniki. Dlatego przed budową raportów warto sprawdzić, czy dane potrzebne do każdego wskaźnika są zapisywane w systemach regularnie i w ten sam sposób. Czasem wystarczy drobna zmiana w pracy magazynu, np. skanowanie w konkretnym momencie, żeby wskaźnik był wiarygodny.",
    "## Rola AI w raportach",
    "AI nie powinno liczyć wskaźników, bo modele językowe mylą się w obliczeniach. Może za to pomóc w interpretacji: przygotować szkic komentarza do raportu, wskazać zlecenia, które najbardziej wpłynęły na spadek terminowości, albo podsumować przyczyny reklamacji w miesiącu. Opiekun klienta sprawdza taki komentarz i uzupełnia go o swoją wiedzę. Więcej o zastosowaniach AI piszemy w artykule [AI w logistyce](/poradnik/ai-w-logistyce).",
    "## Przegląd z klientem",
    "Automatyczne raporty nie zastępują spotkań z klientem, ale zmieniają ich charakter. Zamiast przygotowywać zestawienie przez dwa dni przed spotkaniem, opiekun ma gotowe dane i może skupić się na rozmowie: co poprawić, jak zmienia się wolumen, czego klient będzie potrzebował w kolejnym sezonie. Zestawienie na przegląd kwartalny może powstawać automatycznie z tych samych danych, z których powstają raporty tygodniowe. Opisujemy to na stronie [automatyzacja firmy logistycznej](/branze/firmy-logistyczne).",
    "## KPI wewnętrzne",
    "Oprócz wskaźników dla klientów warto mierzyć wskaźniki wewnętrzne: wydajność kompletacji, obciążenie zmian, czas obsługi zlecenia w biurze, rentowność klientów. Te same dane, które służą do raportów dla klientów, mogą zasilać raport dla zarządu. Pozwala to zobaczyć, którzy klienci wymagają więcej pracy niż przewiduje cennik, i oprzeć negocjacje na liczbach. O tym, jak mierzyć efekty automatyzacji, piszemy w artykule [jak mierzyć ROI automatyzacji](/poradnik/jak-mierzyc-roi-automatyzacji).",
    "## Od czego zacząć",
    "Najlepiej od jednego, największego klienta: spisać definicje jego wskaźników, zbudować automatyczny raport i porównać go przez kilka tygodni z raportem ręcznym. Potem ten sam mechanizm można rozszerzyć na kolejnych klientów, zmieniając tylko format i zestaw wskaźników. Szerszy przegląd procesów do automatyzacji znajdziecie w artykule [co zautomatyzować w firmie logistycznej](/poradnik/co-zautomatyzowac-w-firmie-logistycznej).",
  ].join("\n\n"),
  faq: [
    {
      question: "Jakie KPI mierzyć w magazynie?",
      answer:
        "Najczęściej terminowość wydań, dokładność kompletacji, czas przyjęcia, liczbę reklamacji, zgodność stanów przy inwentaryzacji i wykorzystanie powierzchni. Zestaw warto dopasować do branży i oczekiwań klienta.",
    },
    {
      question: "Jak uniknąć sporów o KPI z klientem?",
      answer:
        "Spisać dokładne definicje wskaźników, łącznie z wyjątkami, w umowie lub załączniku i używać dokładnie tych samych zasad w obliczeniach.",
    },
    {
      question: "Czy raporty KPI można wysyłać automatycznie?",
      answer:
        "Tak. Dane pobiera się z WMS i TMS, wskaźniki liczy według definicji, a raport wychodzi do klienta o ustalonej porze w uzgodnionym formacie.",
    },
    {
      question: "Czy AI może liczyć KPI?",
      answer:
        "Nie powinno. Obliczenia wykonują systemy według definicji. AI może pomóc w komentarzu do wyników i wskazaniu przyczyn zmian.",
    },
    {
      question: "Od czego zacząć automatyzację raportów?",
      answer:
        "Od spisania definicji wskaźników dla największego klienta, zbudowania jednego automatycznego raportu i porównania go z raportem ręcznym przez kilka tygodni.",
    },
  ],
});

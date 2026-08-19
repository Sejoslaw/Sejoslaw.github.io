class CzymJestDywidendaPost extends BasePost {
    constructor() {
        super({
            id: "czym-jest-dywidenda",
            title: "Czym jest dywidenda? Kompletny przewodnik inwestora",
            description: "Wszystko o dywidendach: podstawy, wskaźniki, cykl wypłaty, podatek Belki oraz rozliczenia spółek polskich i zagranicznych.",
            tags: ["dywidenda", "podatki", "edukacja", "analiza"],
            date: "2026-08-19"
        });
    }

    renderPost() {
        const formattedDate = this.formatDate ? this.formatDate(this.date) : this.date;

        return `
            <article class="post">
                <header>
                    <h1>${this.title}</h1>
                    <p class="post-meta">📅 Opublikowano: ${formattedDate}</p>
                </header>
                <hr>
                <section class="post-body">
                    <p><strong>Dywidenda</strong> to część zysku netto wypracowanego przez spółkę kapitałową, która na mocy uchwały Walnego Zgromadzenia Akcjonariuszy (WZA) zostaje przekazana bezpośrednio inwestorom. Jest to podstawowy mechanizm dzielenia się sukcesem biznesowym z właścicielami akcji.</p>
                    
                    <blockquote>💡 <strong>Innymi słowy:</strong> Firma zarobiła pieniądze, część zostawiła na rozwój, a resztę przelewa na konta swoich właścicieli. Płacą Ci za samo to, że masz ich akcje w portfelu.</blockquote>

                    <h2>1. Kluczowe daty w procesie dywidendowym (Cykl GPW)</h2>
                    <p>Aby otrzymać dywidendę na polskiej giełdzie (GPW), nie wystarczy posiadać akcji w dniu wypłaty. Warto znać 3 kluczowe terminy:</p>
                    <ul>
                        <li><strong>Dzień ustalenia prawa do dywidendy (Dzień D):</strong> Dzień, w którym na podstawie ksiąg KDPW ustala się listę akcjonariuszy uprawnionych do wypłaty.</li>
                        <li><strong>Dzień odcięcia dywidendy (Ex-Dividend Date):</strong> W związku z cyklem rozliczeniowym <strong>T+2</strong> na GPW, aby znaleźć się w księgach w Dniu D, akcje należy kupić najpóźniej <strong>2 dni robocze przed Dniem D</strong>. W dniu odcięcia kurs otwarcia akcji jest korygowany w dół o wartość brutto przyznanej dywidendy.</li>
                        <li><strong>Dzień wypłaty:</strong> Dzień, w którym środki pieniężne trafiają bezpośrednio na konto maklerskie inwestora.</li>
                    </ul>

                    <blockquote>💡 <strong>Innymi słowy:</strong> Jak dzień prawa do dywidendy wypada w czwartek, to musisz kupić akcje najpóźniej we wtorek przed zamknięciem sesji. Kupisz w środę? Dywidendę przygarnie poprzedni właściciel.</blockquote>

                    <h2>2. Podstawowa matematyka dywidendowa</h2>

                    <h3>Stopa Dywidendy (Dividend Yield - DY)</h3>
                    <p>Określa procentowy zwrot z zainwestowanego kapitału wyłącznie z samej wypłaty zysku:</p>
                    <p><strong>DY = (Dywidenda na akcję / Cena akcji) × 100%</strong></p>

                    <blockquote>💡 <strong>Innymi słowy:</strong> Ile groszy 'czystej gotówki' dostajesz do kieszeni z każdego wydanego złotego na akcję spółki.</blockquote>

                    <h3>Wskaźnik Wypłaty Dywidendy (Payout Ratio - PR)</h3>
                    <p>Mówi o tym, jaką część wypracowanego zysku netto spółka oddaje akcjonariuszom, a ile zatrzymuje na rozwój i inwestycje:</p>
                    <p><strong>PR = (Suma wypłaconych dywidend / Zysk netto) × 100%</strong></p>
                    <p><em>Optymalny Payout Ratio dla stabilnych spółek dojrzałych to zazwyczaj 30% – 70%. Wartość powyżej 100% oznacza, że spółka wypłaca więcej niż zarobiła (np. z kapitału zapasowego lub długu), co bywa sygnałem ostrzegawczym.</em></p>

                    <blockquote>💡 <strong>Innymi słowy:</strong> Ile zebranych pieniędzy z zysku firma rozdaje ludziom, a ile zostawia w kasie na rozwój lub czarną godzinę. Jak rozdaje ponad 100%, to zaczyna dokładanie do interesu z oszczędności albo długu.</blockquote>

                    <h3>Wyliczenie kwoty netto (Podatek Belki)</h3>
                    <p>W Polsce zryczałtowany podatek dochodowy od zysków kapitałowych wynosi <strong>19%</strong>:</p>
                    <p><strong>Dywidenda netto = Dywidenda brutto × (1 - 0,19) = Dywidenda brutto × 0,81</strong></p>

                    <blockquote>💡 <strong>Innymi słowy:</strong> Z każdych 100 zł dywidendy przyznanej przez polską spółkę, 81 zł trafia na Twoje konto, a 19 zł dom maklerski od razu zabiera dla państwa.</blockquote>

                    <h2>3. Opodatkowanie i rozliczenie dywidend</h2>

                    <h3>Spółki z polskiej giełdy (GPW)</h3>
                    <p>Dla akcji polskich spółek proces jest w pełni zautomatyzowany. Polskie domy maklerskie (np. ING Makler, XTB) pełnią rolę płatnika podatku. Pobierają 19% podatku Belki automatycznie przed przelewem środków na Twoje konto. <strong>Inwestor otrzymuje kwotę netto i nie musi wykazywać tych dywidend w rocznym zeznaniu PIT-38.</strong></p>

                    <blockquote>💡 <strong>Innymi słowy:</strong> Zero papierkologii. Pieniądze wpadają na konto gotowe do ponownego zainwestowania lub wypłaty, a skarbówka jest już rozliczona.</blockquote>

                    <h3>Spółki zagraniczne (np. USA)</h3>
                    <p>Przy inwestowaniu w spółki z USA obowiązuje podatek u źródła (Withholding Tax - WHT):</p>
                    <ul>
                        <li>Standardowa stawka podatku u źródła w USA wynosi <strong>30%</strong>.</li>
                        <li>Dzięki złożeniu formularza <strong>W-8BEN</strong> u swojego brokera, stawka ta spada do <strong>15%</strong> (zgodnie z umową o unikaniu podwójnego opodatkowania).</li>
                        <li>Pozostałe <strong>4%</strong> (do pełnej polskiej stawki 19%) inwestor zobowiązany jest samodzielnie dopłacić w Polsce i rozliczyć w rocznym formularzu <strong>PIT-38 (załącznik PIT/ZG)</strong>.</li>
                    </ul>

                    <blockquote>💡 <strong>Innymi słowy:</strong> Klikasz jeden formularz u brokera i zamiast oddawać Amerykanom 30% zysku, oddajesz im 15%, a raz w roku dopłacasz w Polsce brakujące 4%.</blockquote>

                    <h2>4. Przydatne źródła i narzędzia</h2>
                    <p>Do codziennej analizy historii dywidend oraz nadchodzących terminów warto korzystać ze sprawdzonych serwisów:</p>
                    <ul>
                        <li><strong><a href="https://www.biznesradar.pl/dywidendy/" target="_blank" rel="noopener">BiznesRadar - Kalendarz Dywidend</a>:</strong> Najpopularniejsze źródło historii wypłat, stóp dywidend oraz terminów odcięcia dla spółek z GPW.</li>
                        <li><strong><a href="https://strefainwestorow.pl/dywidendy" target="_blank" rel="noopener">Strefa Inwestorów</a>:</strong> Artykuły, zestawienia spółek dywidendowych oraz analiza polityk dywidendowych.</li>
                        <li><strong><a href="https://www.gpw.pl" target="_blank" rel="noopener">Oficjalny serwis GPW</a>:</strong> Komunikaty ESPI/EBI bezpośrednio ze spółek dotyczące uchwał WZA w sprawie podziału zysku.</li>
                    </ul>
                </section>
            </article>
        `;
    }
}

new CzymJestDywidendaPost();
class InteligentnyInwestorGrahamPost extends BasePost {
    constructor() {
        super({
            id: "inteligentny-inwestor-benjamin-graham",
            title: "Inteligentny Inwestor – Benjamin Graham: Biblia inwestowania w wartość i sztuka kontroli emocji",
            description: "Jak odróżnić rzeczywistą wartość biznesu od chwilowych nastrojów tłumu? Poznaj Pana Rynka, Margines Bezpieczeństwa oraz różnice między inwestorem defensywnym a agresywnym według ojca analizy fundamentalnej.",
            tags: ["graham", "analiza-fundamentalna", "edukacja", "margines-bezpieczenstwa", "psychologia-inwestowania"],
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
                    <p>Jeśli istnieje jedna książka, którą Warren Buffett uważa za absolutny fundament swojej kariery, to jest nią opublikowany po raz pierwszy w 1949 roku <a href="https://www.google.com/search?q=inteligentny+inwestor+benjamin+graham" target="_blank" rel="noopener noreferrer">„Inteligentny Inwestor” (The Intelligent Investor)</a> autorstwa <strong>Benjamina Grahama</strong>. Ojciec analizy fundamentalnej stworzył w niej ramy pojęciowe, które do dziś chronią inwestorów przed popełnianiem najkosztowniejszych błędów na giełdzie.</p>

                    <p>Głównym przesłaniem dzieła Grahama jest wyraźne oddzielenie <strong>inwestowania</strong> od <strong>spekulacji</strong>. Inwestor traktuje akcje jako cząstkę realnego biznesu, podczas gdy spekulant jedynie obstawia, czy inny uczestnik rynku zapłaci jutro za papier więcej niż on dzisiaj.</p>

                    <blockquote>💡 <strong>Innymi słowy:</strong> Kupuj płaszcz zimowy latem, kiedy nikt go nie chce i jest na wyprzedaży, a nie w środku śnieżycy, gdy wszyscy stoją w kolejce i są gotowi zapłacić każdą cenę.</blockquote>

                    <h2>1. Pan Rynek (Mr. Market) – Twój emocjonalny partner w biznesie</h2>

                    <p>Najsłynniejsza alegoria stworzona przez Grahama w Chapter 8 książki to postać <strong>Pana Rynka</strong>. Wyobraź sobie, że posiadasz udział w prywatnym biznesie, a Twoim wspólnikiem jest człowiek o skrajnych zaburzeniach afektywnych dwubiegunowych.</p>

                    <p>Codziennie puka do Twoich drzwi i proponuje cenę, po której gotów jest odkupić Twój udział lub odsprzedać Ci swój:</p>
                    <ul>
                        <li><strong>Gdy jest w euforii:</strong> Widzi przed biznesem tylko różowe perspektywy i żąda kosmicznych cen za swoje akcje.</li>
                        <li><strong>Gdy wpada w depresję:</strong> Widzi wokół same zagrożenia i oferuje oddanie swoich udziałów za bezcen.</li>
                    </ul>

                    <p>Kluczowa lekcja Grahama brzmi: <strong>Pan Rynek jest po to, by Ci służyć, a nie by Cię prowadzić.</strong> Nie masz żadnego obowiązku codziennie z nim handlować. Działa na Twoją korzyść tylko wtedy, gdy wykorzystujesz jego wahania nastrojów, zamiast ulegać jego emocjom.</p>

                    <blockquote>💡 <strong>Innymi słowy:</strong> Giełda nie mówi Ci, ile naprawdę warta jest dana firma — pokazuje jedynie, ile emocjonalni ludzie są gotowi za nią zapłacić w danej minucie.</blockquote>

                    <h2>2. Margines Bezpieczeństwa (Margin of Safety) – Święty Graal analizy</h2>

                    <p>W Rozdziale 20 Graham podsumowuje całe swoje sekretne podejście w dwóch słowach: <strong>Margines Bezpieczeństwa</strong>. Jest to różnica pomiędzy wewnętrzną wartością godziwą biznesu (<em>intrinsic value</em>), wynikającą z jego aktywów i zysków, a aktualną ceną rynkową.</p>

                    <p>Jeśli po dokładnej analizie oceniasz wartość spółki na 100 zł za akcję, kupowanie jej po 95 zł nie daje Ci żadnego marginesu. Kupujesz ją dopiero wtedy, gdy Pan Rynek w przypływie paniki oferuje Ci ją po 60–70 zł.</p>

                    <h3>Dlaczego Margines Bezpieczeństwa jest kluczowy?</h3>
                    <ol>
                        <li><strong>Chroni przed Twoimi własnymi błędami:</strong> Twoje prognozy dotyczące przyszłości spółki mogą okazać się zbyt optymistyczne. Dyfuzja ryzyka w cenie daje przestrzeń na błąd w obliczeniach.</li>
                        <li><strong>Amortyzuje pecha i zdarzenia losowe:</strong> Recesja, kryzys branżowy czy pożar w fabryce mniej bolą, gdy kupiłeś aktywa z głębokim dyskontem.</li>
                    </ol>

                    <blockquote>💡 <strong>Innymi słowy:</strong> Budując most o nośności 10 ton, nie wpuszczasz na niego ciężarówki ważącej dokładnie 9,9 tony. Budujesz go tak, by wytrzymał 30 ton, na wypadek gdyby przejechał po nim cięższy pojazd.</blockquote>

                    <h2>3. Inwestor Defensywny vs. Agresywny (Przedsiębiorczy)</h2>

                    <p>Graham dokonuje unikalnego podziału inwestorów. Wbrew obiegowej opinii nie dzieli ich według skłonności do ryzyka, ale według <strong>ilości czasu i energii, jaką są w stanie poświęcić na analizę</strong>.</p>

                    <p><strong>A. Inwestor Defensywny (Pasywny):</strong><br>
                    Jego głównym celem jest ochrona kapitału i uniknięcie poważnych błędów. Nie ma czasu ani ochoty na codzienne badanie sprawozdań finansowych. Wybiera proste, zdywersyfikowane rozwiązania: duże, stabilne spółki o niskim zadłużeniu i długiej historii wypłaty dywidend (lub tanie fundusze indeksowe).</p>

                    <p><strong>B. Inwestor Agresywny / Przedsiębiorczy (Aktywny):</strong><br>
                    Traktuje inwestowanie jak pełnoetatowy biznes. Przeszukuje zakamarki rynku, bada trudne sprawozdania finansowe i poluje na głęboko niedowartościowane spółki (często nielubiane lub pomijane przez Wall Street).</p>

                    <blockquote>💡 <strong>Innymi słowy:</strong> Wyniki na giełdzie nie zależą od tego, jak bardzo ryzykujesz, ale od tego, jak dużo rzetelnej pracy wykonasz przed zakupem. Jeśli nie masz czasu na analizę — bądź inwestorem defensywnym.</blockquote>

                    <h2>Podsumowanie: Test Inteligencji wg Grahama</h2>

                    <p>Dla Grahama „inteligentny” inwestor to nie ten o wysokim IQ, lecz ten, który potrafi kontrolować swoje emocje i chciwość. Zanim dokonasz kolejnej transakcji na giełdzie, odpowiedz sobie na 3 pytania:</p>

                    <ol>
                        <li>Czy kupuję udział w biznesie, czy po prostu obstawiam wzrost cyferek na ekranie?</li>
                        <li>Czy obecna cena zapewnia mi wyraźny <strong>Margines Bezpieczeństwa</strong> względem realnych aktywów i zysków spółki?</li>
                        <li>Czy reaguję na racjonalne dane finansowe, czy daję się manipulować chwilowym nastrojom <strong>Pana Rynka</strong>?</li>
                    </ol>

                    <h2>Materiały źródłowe i literatura</h2>
                    <ul>
                        <li><a href="https://www.berkshirehathaway.com/letters/1987.html" target="_blank" rel="noopener noreferrer">Warren Buffett o Panu Rynku — List do Akcjonariuszy Berkshire Hathaway (1987)</a></li>
                        <li><a href="https://www.grahamanddoddsville.net/" target="_blank" rel="noopener noreferrer">Graham and Doddsville — Materiały i biuletyny o inwestowaniu w wartość</a></li>
                        <li><a href="https://sejoslaw.github.io/intrinsic-value-calculator" target="_blank" rel="noopener noreferrer">Krisu - Analiza Wskaźnikowa Akcji</a></li>
                    </ul>
                </section>
            </article>
        `;
    }
}

new InteligentnyInwestorGrahamPost();
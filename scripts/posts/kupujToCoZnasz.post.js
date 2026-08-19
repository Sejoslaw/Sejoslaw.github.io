class BuyWhatYouKnowPost extends BasePost {
    constructor() {
        super({
            id: "buy-what-you-know-peter-lynch",
            title: "Buy What You Know: Jak wykorzystać przewagę inwestora indywidualnego według Petera Lyncha?",
            description: "Najsłynniejsza zasada Petera Lyncha to nie zachęta do bezmyślnego kupowania pod wpływem emocji. Zobacz, jak przekuć codzienne obserwacje w przewagę nad Wall Street i właściwie przeanalizować spółkę.",
            tags: ["lynch", "strategia", "edukacja", "analiza-fundamentalna"],
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
                    <p>Większość inwestorów indywidualnych uważa, że stoi na z góry przegranej pozycji w starciu z wielkimi funduszami inwestycyjnymi. Analitycy z Wall Street mają przecież dostęp do szybkich terminali, zespołów badawczych i bezpośrednich rozmów z zarządami spółek. Jednak <strong>Peter Lynch</strong> — legendarny zarządca funduszu Fidelity Magellan, który osiągał średnioroczny zwrot 29,2% — twierdził coś zupełnie przeciwnego: <strong>jako inwestor indywidualny masz ogromną przewagę rynkową, jeśli tylko zaczniesz świadomie rozglądać się wokół siebie.</strong></p>

                    <p>Z tego przekonania narodziła się jego najsłynniejsza koncepcja: <strong>„Buy What You Know”</strong> (Inwestuj w to, co znasz), opisana szczegółowo w jego książce <a href="https://www.simonandschuster.com/books/One-Up-On-Wall-Street/Peter-Lynch/9780743200400" target="_blank" rel="noopener noreferrer">„One Up On Wall Street”</a>.</p>

                    <blockquote>💡 <strong>Innymi słowy:</strong> Najlepsze okazje inwestycyjne zobaczysz w swoim codziennym życiu — w sklepie, w pracy, na budowie czy w telefonie — na długo zanim analityk finansowy dostrzeże je w oficjalnym raporcie kwartalnym.</blockquote>

                    <h2>1. Ulica kontra Wall Street: Skąd bierze się Twoja przewaga?</h2>

                    <p>Analitycy z wielkich instytucji spędzają większość czasu w biurach, analizując arkusze Excela i wskaźniki makroekonomiczne. Tymczasem Ty i Twoje otoczenie codziennie tworzycie realną gospodarkę. Zauważasz, które sklepy w galerii handlowej są stale pełne ludzi, jakie oprogramowanie wdraża Twoja firma, albo które produkty zaczynają być masowo polecane przez znajomych.</p>

                    <p>W swoim słynnym wystąpieniu <a href="https://www.youtube.com/watch?v=72Pq5zKEi_g" target="_blank" rel="noopener noreferrer">Peter Lynch w National Press Club (1994)</a> dokładnie wyjaśniał, dlaczego inwestorzy prywatni nie powinni kopiować ruchem do ruchu ekspertów z Wall Street, lecz polegać na lokalnym zmysle obserwacji. Lynch podkreślał, że kluczowe inwestycje swojego życia (takie jak Taco Bell, Dunkin' Donuts czy Hanes) odkrył dzięki obserwacjom swojej rodziny oraz własnym wizytom w restauracjach.</p>

                    <blockquote>💡 <strong>Innymi słowy:</strong> Widząc pełny parking przed sklepem i kolejki do kas, dostrzegasz sukces biznesowy firmy na kilka miesięcy przed tym, zanim jej wysokie zyski zostaną oficjalnie zaksięgowane i opublikowane w raporcie.</blockquote>

                    <h2>2. Wielka pułapka: "Kupuj to, co znasz" to NIE jest "Kupuj bez analizy"</h2>

                    <p>Zasada Lyncha bywa niezwykle często opatrznie rozumiana. Inwestorzy mylnie zakładają: <em>„Lubię pić tę kawę, więc kupię akcje tej sieci”</em> albo <em>„Moje dziecko gra w tę grę, więc wchodzę va banque w jej producenta”</em>. To prosta droga do utraty kapitału.</p>

                    <p>Temat ten Lynch poruszył ponownie w trakcie swojego <a href="https://www.youtube.com/watch?v=myu4Nv0pt0U" target="_blank" rel="noopener noreferrer">wykładu inwestycyjnego z 1997 roku</a>, gdzie kładł nacisk na fakt, że sama wiedza o produkcie to za mało. <strong>Sam fakt, że lubisz dany produkt lub widujesz tłumy w sklepie, nie jest powodem do zakupu akcji. Jest jedynie sygnałem do rozpoczęcia badania spółki.</strong></p>

                    <h3>Prawidłowa ścieżka analizy według Lyncha:</h3>
                    <ol>
                        <li><strong>Krok 1 (Obserwacja):</strong> Dostrzegasz świetny produkt, usługę lub rosnący trend w codziennym życiu.</li>
                        <li><strong>Krok 2 (Hipoteza):</strong> Sprawdzasz, czy giełdowa spółka stoi za tym sukcesem i czy dany produkt stanowi istotną część jej przychodów.</li>
                        <li><strong>Krok 3 (Analiza fundamentalna):</strong> Otwierasz bilans i weryfikujesz finanse: wskaźnik C/Z, PEG, poziom zadłużenia, marże i wolne przepływy pieniężne (FCF).</li>
                        <li><strong>Krok 4 (Decyzja):</strong> Kupujesz akcje TYLKO wtedy, gdy za popularnością produktu idą zdrowe finanse i atrakcyjna wycena rynkowa.</li>
                    </ol>

                    <blockquote>💡 <strong>Innymi słowy:</strong> Zauważenie popularnego produktu w sklepie to nie nakaz zakupu akcji — to po prostu darmowy 'cynk', który sam sobie dajesz. Dopiero weryfikacja bilansu spółki mówi Ci, czy warto włożyć w nią prawdziwe pieniądze.</blockquote>

                    <h2>3. Kategoryzacja spółek według Petera Lyncha</h2>

                    <p>Gdy już znajdziesz interesującą firmę, Lynch (co opisał również w kontynuacji swojej twórczości <a href="https://www.simonandschuster.com/books/Beating-the-Street/Peter-Lynch/9780671891633" target="_blank" rel="noopener noreferrer">„Beating the Street”</a>) nakazuje przyporządkować ją do jednej z 6 kategorii. Każda z nich charakteryzuje się innym poziomem ryzyka i wymaga odmiennego podejścia:</p>

                    <ul>
                        <li><strong>1. Wolno rosnące (Slow Growers):</strong> Dojrzałe giganty rosnące w tempie PKB (2–5% rocznie). Kupuje się je głównie dla stabilnej, regularnej dywidendy.</li>
                        <li><strong>2. Czempiony (Stalwarts):</strong> Duże, stabilne firmy rosnące w tempie 10–12% rocznie (np. Coca-Cola, Procter & Gamble). Dają oparcie portfelowi w czasie bessy.</li>
                        <li><strong>3. Szybko rosnące (Fast Growers):</strong> Małe, agresywne spółki rosnące po 20–25% rocznie. To tutaj szuka się tzw. <em>tenbaggerów</em> (spółek dających 1000% zysku).</li>
                        <li><strong>4. Cykliczne (Cyclicals):</strong> Spółki zależne od cykli gospodarczych (motoryzacja, surowce, budownictwo). Wymagają wyczucia punktu zwrotnego w gospodarce.</li>
                        <li><strong>5. Po przejściach (Turnarounds):</strong> Spółki na skraju bankructwa lub w głębokim kryzysie. Jeśli zrestrukturyzują biznes, dają gigantyczny zwrot, ale niosą spore ryzyko.</li>
                        <li><strong>6. Z ukrytym majątkiem (Asset Plays):</strong> Firmy posiadające majątek (ziemia, patenty, nieruchomości, gotówka), którego rynek nie dostrzega w aktualnej wycenie.</li>
                    </ul>

                    <blockquote>💡 <strong>Innymi słowy:</strong> Nie oczekuj od wielkiego banku czy dojrzałej spółki energetycznej, że podwoi swój biznes w dwa lata. Jeśli szukasz kilkuset procent zysku, musisz celować w kategrię szybko rosnących małych firm (Fast Growers).</blockquote>

                    <h2>4. Czego bezwzględnie unikać zdaniem Lyncha?</h2>

                    <p>Ochrona kapitału była dla Lyncha równie ważna co szukanie okazji. W swoich wystąpieniach wyróżnił dwa typy spółek, które najczęściej doprowadzają inwestorów indywidualnych do strat:</p>

                    <p><strong>A. Najgorętsza spółka w najgorętszej branży:</strong><br>
                    Modne spółki, o których mówią wszyscy w wiadomościach. Przyciągają gigantyczną konkurencję, mamią wielkimi wizjami, ale rzadko generują realną gotówkę dla akcjonariuszy.</p>

                    <p><strong>B. Spółki-szepty (Whisper stocks):</strong><br>
                    Firmy, które 'już za chwilę' dokonają przełomu technologicznego, odkryją lek na rzadką chorobę albo podpiszą kontrakt życia, ale na razie nie mają żadnych przychodów ani zysków.</p>

                    <blockquote>💡 <strong>Innymi słowy:</strong> Zamiast szukać niesprawdzonych obietnic i firm 'z przyszłości', wolę zainwestować w nudną firmę produkującą plastikowe nakrętki, jeśli tylko monopolizuje rynek i generuje przewidywalny zysk tu i teraz.</blockquote>

                    <h2>Podsumowanie: Checklist Inwestora Lyncha</h2>

                    <p>Zanim zainwestujesz w spółkę odkrytą dzięki zasadzie <em>Buy What You Know</em>, odpowiedz sobie na 4 proste pytania:</p>

                    <ol>
                        <li>Czy potrafię wyjaśnić 12-latkowi w dwóch prostych zdaniach, na czym ta firma zarabia pieniądze?</li>
                        <li>Czy jej wycena (np. wskaźnik C/Z lub PEG) jest uzasadniona tempem wzrostu zysków?</li>
                        <li>Czy firma ma bezpieczny poziom zadłużenia i brak problemów z płynnością?</li>
                        <li>Czy rosnąca popularność jej produktów przekłada się na realny wzrost zysku netto i wolnych przepływów pieniężnych (FCF)?</li>
                    </ol>
                </section>
            </article>
        `;
    }
}

new BuyWhatYouKnowPost();
class ThinkAndGrowRichHillPost extends BasePost {
    constructor() {
        super({
            id: "mysl-i-bogac-sie-napoleon-hill",
            title: "Myśl i bogać się – Napoleon Hill: Dyscyplina mentalna, jasność celu i odporność psychiczna inwestora",
            description: "Klasyk psychologii sukcesu z 1937 roku okazuje się jednym z najlepszych podręczników dla inwestorów. Poznaj zasady jednoznaczności celu, panowania nad strachem i żelaznej wytrwałości na giełdzie.",
            tags: ["hill", "psychologia-inwestowania", "dyscyplina", "edukacja", "strategia"],
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
                    <p>Wydana po raz pierwszy w 1937 roku książka <a href="https://www.google.com/search?q=mysl+i+bogac+sie+napoleon+hill" target="_blank" rel="noopener noreferrer">„Myśl i bogać się” (Think and Grow Rich)</a> autorstwa <strong>Napoleona Hilla</strong> jest powszechnie uważana za fundament współczesnej literatury rozwoju osobistego. Hill spędził ponad 20 lat na badaniu nawyków setek najbogatszych ludzi swoich czasów — w tym Andrew Carnegie'ego, Henry'ego Forda czy Thomasa Edisona.</p>

                    <p>Choć książka nie została napisana z myślą o rynku kapitałowym, jej wnioski uderzają celnością w sam środek giełdowej praktyki. Na rynku akcji architektura Twojego portfela jest zaledwie wtórnym efektem tego, co dzieje się w Twojej głowie.</p>

                    <blockquote>💡 <strong>Innymi słowy:</strong> Twój stan konta i portfela inwestycyjnego jest bezpośrednim odbiciem Twojej codziennej dyscypliny, jasności planu i odporności psychicznej.</blockquote>

                    <h2>1. Jednoznaczność celu (Definiteness of Purpose): Koniec z ogólnikami</h2>

                    <p>Hill wskazuje, że pierwszą i najważniejszą przyczyną porażki większości ludzi jest brak precyzyjnie określonego celu. Chęć <em>„zarobienia dużych pieniędzy”</em> albo <em>„bycia bogatym”</em> nie jest celem — jest bezwartościowym życzeniem.</p>

                    <p>W kontekście inwestowania na giełdzie <strong>Jednoznaczność celu</strong> oznacza posiadanie spisanej, twardej strategii:</p>

                    <ul>
                        <li>Dokładnie wiesz, jakie spółki kupujesz (np. dojrzałe spółki dywidendowe z udowodnioną historią wypłat i niskim zadłużeniem).</li>
                        <li>Znasz swoją docelową stopę zwrotu i horyzont czasowy (np. zbudowanie portfela generującego X zł miesięcznie z dywidend za 10 lat).</li>
                        <li>Masz spisane kryteria wejścia oraz twarde zasady, kiedy dopuszczasz sprzedaż akcji.</li>
                    </ul>

                    <blockquote>💡 <strong>Innymi słowy:</strong> Inwestor bez spisanego planu jest jak okręt bez steru — przy pierwszej giełdowej burzy popłynie dokładnie tam, dokąd zniesie go fala paniki lub chciwości.</blockquote>

                    <h2>2. Panowanie nad emocjami: Chciwość i strach jako pożeracze kapitału</h2>

                    <p>Hill poświęca ogromną uwagę kontroli emocjonalnej. Na giełdzie dwa pierwotne uczucia — <strong>strach (Fear)</strong> oraz <strong>chciwość (Greed)</strong> — odpowiadają za niszczenie największych majątków.</p>

                    <p>Rynki finansowe to gigantyczny wzmacniacz ludzkich słabości:</p>
                    <ol>
                        <li><strong>Chciwość na szczycie bańki:</strong> Sprawia, że inwestorzy kupują modne akcje po astronomicznych wycenach, bo ignorują bilanse i boją się, że ominie ich okazja (FOMO).</li>
                        <li><strong>Strach na dnie bessy:</strong> Paraliżuje racjonalne myślenie i zmusza do pozbywania się udziałów w świetnych biznesach za ułamek ich wartości godziwej.</li>
                    </ol>

                    <p>Osoba bez dyscypliny mentalnej staje się marionetką w rękach tłumu. Panowanie nad sobą wg Hilla to umiejętność chłodnej kalkulacji w momentach, gdy wszyscy wokół ulegają histerii.</p>

                    <blockquote>💡 <strong>Innymi słowy:</strong> Największym wrogiem Twojego portfela nie jest trudna sytuacja gospodarcza, inflacja czy decyzje banków centralnych — jest nim impuls, by kliknąć 'Sprzedaj' w stanie emocjonalnego wzburzenia.</blockquote>

                    <h2>3. Wytrwałość (Persistence) i rezygnacja o krok przed przełomem</h2>

                    <p>W pierwszym rozdziale książki Hill przytacza słynną historię R. U. Darby'ego, który podczas gorączki złota zainwestował majątek w dół w kopalni, ale poddał się i sprzedał maszynę na złom, gdy żyła złota nagle zniknęła. Nowy nabywca wezwał geologa i odkrył, że żyła znajdowała się... <strong>dokładnie trzy stopy od miejsca, w którym Darby przerwał kopanie</strong> („Three Feet from Gold”).</p>

                    <p>Na giełdzie inwestorzy bez żelaznej wytrwałości popełniają dokładnie ten sam błąd:</p>
                    <ul>
                        <li>Sprzedają akcje doskonałych, fundamentalnie zdrowych spółek na samym dnie korekty lub bessy, tuż przed rozpoczęciem wieloletniej hossy.</li>
                        <li>Rezygnują ze strategii dywidendowej po roku czy dwóch, nie dając procesowi procentu składanego wystarczająco dużo czasu na nabranie pędu.</li>
                    </ul>

                    <blockquote>💡 <strong>Innymi słowy:</strong> Kapitał na giełdzie przepływa od aktywnego i niecierpliwego tłumu do cierpliwych jednostek, które mają wytrwałość przetrwać trudne momenty.</blockquote>

                    <h2>4. Grupa Mastermind: Otoczenie tworzy wyniki</h2>

                    <p>Kolejnym filarem teorii Hilla jest koncepcja **Mastermind** — otaczania się ludźmi o wyższych kompetencjach i spójnym systemie wartości. Dzielenie się wiedzą i weryfikowanie własnych pomysłów z bardziej doświadczonymi inwestorami chroni przed błędem poznawczym i ślepymi plamami w analizie.</p>

                    <p>Współczesny inwestor indywidualny buduje swój „Mastermind” poprzez studiowanie dorobku mistrzów (Buffett, Munger, Lynch, Graham) oraz dyskusję w merytorycznych grupach z ludźmi, którzy kierują się analizą chłodnych faktów, a nie spekulacyjnym szumem.</p>

                    <blockquote>💡 <strong>Innymi słowy:</strong> Jeśli Twoim otoczeniem są ludzie szukający darmowych 'cynków' i szybkich zysków, przejmiesz ich nawyki. Jeśli otaczasz się analityczną dyscypliną — osiągniesz powtarzalne wyniki.</blockquote>

                    <h2>Podsumowanie: Test Odporności Mentalnej Hilla</h2>

                    <p>Zanim uznasz swój plan inwestycyjny za gotowy, poddaj go testowi 4 pytań Napoleona Hilla:</p>

                    <ol>
                        <li>Czy mam dokładnie spisaną celowość i zasady swojego portfela (np. strategię dywidendową), czy działam na wyczucie?</li>
                        <li>Czy moje decyzje inwestycyjne z ostatniego miesiąca wynikały z chłodnej analizy bilansu, czy z emocji (strachu lub chciwości)?</li>
                        <li>Czy posiadam wytrwałość, by trzymać wartościowe spółki w portfelu w trakcie 20–30% rynkowej korekty?</li>
                        <li>Czy moje źródła wiedzy i otoczenie wspierają dyscyplinę, czy karmią mnie spekulacyjnym hałasem?</li>
                    </ol>

                    <h2>Materiały źródłowe i literatura</h2>
                    <ul>
                        <li><a href="https://www.google.com/search?q=mysl+i+bogac+sie+napoleon+hill" target="_blank" rel="noopener noreferrer">Napoleon Hill Foundation — Think and Grow Rich (Wydanie oficjalne)</a></li>
                    </ul>
                </section>
            </article>
        `;
    }
}

new ThinkAndGrowRichHillPost();
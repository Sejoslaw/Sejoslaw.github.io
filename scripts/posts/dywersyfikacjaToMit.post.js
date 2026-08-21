class DywersyfikacjaToMitPost extends BasePost {
    constructor() {
        super({
            id: "dywersyfikacja-to-mit",
            title: "Dywersyfikacja to mit",
            description: "Dlaczego ślepe kupowanie setek spółek szkodzi twojemu portfelowi? Poznaj pojęcie 'diworsification' Petera Lyncha oraz dowiedz się, dlaczego Charlie Munger uważał Nową Teorię Portfelową za kompletne szaleństwo.",
            tags: ["dywersyfikacja", "munger", "lynch", "portfel-inwestycyjny", "edukacja", "gielda"],
            date: "2026-08-21"
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
                    <p>Doradcy finansowi i podręczniki akademickie traktują dywersyfikację niemal jak religię. Powtarzają bez końca: <em>„Nie wkładaj wszystkich jajek do jednego koszyka”</em>. Problem w tym, że ślepe wdrożenie tej zasady w praktyce sprawia, że zamiast bezpiecznego portfela kończysz z koszykiem pełnym potłuczonych jajek.</p>

                    <p>Dla inwestora indywidualnego szukającego ponadprzeciętnych zysków nadmierna dywersyfikacja to najprostsza droga do przeciętności (albo strat). Najwięksi praktycy giełdowi nie pozostawiają na tym podejściu suchej nitki.</p>

                    <h2>1. Peter Lynch i zjawisko „Diworsification”</h2>

                    <p>Legendarny zarządzający funduszem Magellan, Peter Lynch, zauważył, że zarówno zarządy dużych korporacji, jak i inwestorzy indywidualni mają tendencję do robienia czegoś, co nazwał błyskotliwie <strong>„diworsification”</strong> (połączenie słów <em>diversification</em> – dywersyfikacja oraz <em>worse</em> – gorszy).</p>

                    <p>Zjawisko to polega na dokupowaniu kolejnych aktywów tylko po to, by mieć „więcej różnych rzeczy”, bez względu na ich jakość:</p>

                    <ul>
                        <li><strong>W wydaniu korporacyjnym:</strong> Świetnie prosperująca firma zarabia mnóstwo gotówki na swoim podstawowym biznesie (np. sieci hoteli). Zamiast podwoić to, w czym jest wybitna, kupuje bez sensu sieć restauracji ze stekami albo fabrykę tekstylną, w których kompletnie nie ma doświadczenia. Rezultat? Świetny biznes zostaje pociągnięty na dno przez przeciętne nabytki.</li>
                        <li><strong>W wydaniu inwestora:</strong> Masz w portfelu 3 fantastyczne spółki, które doskonale znasz i które rosną po 20% rocznie. Nagle dochodzisz do wniosku, że „masz ich za mało” i dokupujesz 15 przypadkowych firm z branż, o których nie masz pojęcia, tylko po to, by mieć „zróżnicowany portfel”. Rozwadniasz w ten sposób zyski ze swoich najlepszych pomysłów na rzecz średniaków.</li>
                    </ul>

                    <blockquote>
                        <p>„Kupowanie akcji tylko po to, by mieć ich dużo, bez głębokiego zrozumienia każdej z nich, przypomina robienie zakładek w książce, której nawet się nie przeczytało.” — Peter Lynch</p>
                    </blockquote>

                    <h2>2. Charlie Munger i „szaleństwo” Nowej Teorii Portfelowej</h2>

                    <p>Gdyby zapytać Charliego Mungera o uniwersyteckie wykłady z finansów, zapewne z właściwym sobie wdziękiem uznałby je za kompletny absurd. Munger przez dekady otwarcie krytykował tzw. <strong>Nową Teorię Portfelową (MPT)</strong> oraz wskaźnik Beta, na których opiera się współczesna bankowość prywatna.</p>

                    <p>Akademicka teoria zakłada, że im więcej spółek masz w portfelu, tym mniejsze ponosisz ryzyko, ponieważ zmienność kursów się „znosi”. Munger uważał to za szaleństwo z dwóch powodów:</p>

                    <ol>
                        <li><strong>Mylenie ryzyka ze zmiennością:</strong> Dla Mungera i Buffetta ryzykiem jest <em>trwała utrata kapitału</em> (np. bankructwo spółki), a nie to, że kurs akcji skacze o 3% w górę i w dół na sesji. Akademicy uznali zmienność za ryzyko, bo łatwo wyliczyć z niej wzory matematyczne – mimo że nie ma to przełożenia na realny biznes.</li>
                        <li><strong>Promowanie niewiedzy:</strong> Munger twierdził, że nauczanie ludzi, iż powinni kupować dziesiątki spółek, których nie rozumieją, zamiast skupić się na kilku wybitnych, to „przekazywanie wiedzy o tym, jak być przeciętnym”. Nazwał to przyznaniem się do intelektualnej porażki.</li>
                    </ol>

                    <blockquote>
                        <p>„Pojęcie, że nadmierna dywersyfikacja chroni inwestora, jest całkowicie błędne. Przeciętny człowiek nie znajdzie w życiu 50 świetnych okazji. Jeśli znajdzie trzy, to powinien dziękować losowi i postawić na nie mocno.” — Charlie Munger</p>
                    </blockquote>

                    <h2>3. Pułapka całego indeksu: Po co kupować resztki?</h2>

                    <p>Często słyszy się argument: <em>„Kup ETF na cały indeks, np. S&P 500 albo WIG20, tam masz gotową dywersyfikację”</em>. Dla kogoś, kto w ogóle nie chce poświęcać czasu na finanse – spoko, to sensowne rozwiązanie. Ale jeśli chcesz podchodzić do giełdy jak świadomy inwestor, musisz dostrzec fundamentalny problem indeksów.</p>

                    <p>Jeśli w danym indeksie znajduje się np. 500 spółek, to umówmy się: <strong>nie wszystkie z nich są wspaniałe</strong>.</p>

                    <ul>
                        <li>Masz tam 10–20% wybitnych lokomotyw wzrostu (świetne zarządy, brak długów, ogromne marże).</li>
                        <li>Masz solidną masę średniaków, które po prostu „są”.</li>
                        <li>Oraz pokaźną grupę powolnych „zombi”, które powoli tracą rynek, toną w długu i zjadają kapitał akcjonariuszy.</li>
                    </ul>

                    <p>Kupując cały indeks hurtowo, świadomie płacisz za to, aby w Twoim portfelu znalazły się również te słabe i zadłużone firmy. Czy kupując kosz owoców w sklepie, dopłacasz extra za to, żeby sprzedawca wrzucił Ci do środka dwa zgniłe jabłka dla „zróżnicowania smaku”? No nie. Więc po co robić to na giełdzie?</p>

                    <h2>Podsumowanie: Jakość zamiast ilości</h2>

                    <p>Jeśli naprawdę rozumiesz 3 czy 4 biznesy (np. z branży finansowej czy handlowej), to dopisanie do portfela 5. i 6. spółki z branży, o której nie masz pojęcia, nie zmniejsza Twojego ryzyka – ono je <strong>zwiększa</strong>.</p>

                    <p>Prawdziwa ochrona kapitału nie wynika z posiadania 50 pozycji na koncie maklerskim. Wynika z:</p>
                    <ul>
                        <li>Głębokiej wiedzy o firmach, które posiadasz.</li>
                        <li>Kupowania ich poniżej rzeczywistej wartości.</li>
                        <li>Cierpliwości, by pozwolić im spokojnie zarabiać pieniądze przez lata.</li>
                    </ul>

                    <p>Zamiast szukać ilości, szukaj jakości. Trzy wspaniałe spółki kupione po dobrej cenie dają większe bezpieczeństwo i lepszy sen niż setka firm, których nazw nawet nie potrafisz zapamiętać.</p>
                </section>
            </article>
        `;
    }
}

new DywersyfikacjaToMitPost();
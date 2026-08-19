class SittingOnYourAssMungerPost extends BasePost {
    constructor() {
        super({
            id: "sitting-on-your-ass-charlie-munger",
            title: "Zasada „Sitting on Your Ass” według Charliego Mungera: Dlaczego sztuka nierobienia niczego daje największe zyski?",
            description: "Dlaczego najlepszą rzeczą, jaką inwestor dywidendowy może zrobić po zakupie dobrej spółki, jest nie robić nic? Zobacz, jak Munger układał procent składany i dlaczego ciągły handel niszczy stopę zwrotu.",
            tags: ["munger", "procent-skladany", "dywidendy", "psychologia-inwestowania", "analiza-fundamentalna"],
            date: "2026-08-22"
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
                    <p>Współczesny świat finansów próbuje przekonać inwestorów, że kluczem do sukcesu jest ciągła aktywność: śledzenie wykresów, reagowanie na nagłówki prasowe i ciągłe rotowanie portfelem. Tymczasem śp. <strong>Charlie Munger</strong> — wieloletni wiceprzewodniczący Berkshire Hathaway i prawy partner Warrena Buffetta — przez dekady promował podejście drastycznie odmienne, które sam nazwał z właściwym sobie humorem: <strong>„Sitting on Your Ass Investing”</strong> (Inwestowanie polegające na siedzeniu na tyłku).</p>

                    <p>Filozofia ta, wyłożona m.in. w kultowym zbiorze przemówień <a href="https://www.stripe.press/poor-charlies-almanack" target="_blank" rel="noopener noreferrer">„Poor Charlie's Almanack”</a>, sprowadza się do prostej prawdy: <strong>największe majątki na giełdzie buduje się czekaniem, a nie handelkiem.</strong></p>

                    <blockquote>💡 <strong>Innymi słowy:</strong> Najważniejsze decyzje inwestycyjne podejmujesz na etapie analizy. Gdy już kupisz udział w świetnym biznesie, Twoim jedynym zadaniem jest nie przeszkadzać procesowi budowania wartości.</blockquote>

                    <h2>1. "The Big Money Is in the Waiting"</h2>

                    <p>Słynny cytat Mungera głosi: <em>„Wielkie pieniądze nie leżą w kupowaniu i sprzedawaniu, ale w czekaniu”</em>. Wielu inwestorów myli aktywność z produktywnością. W tradycyjnej pracy im więcej godzin przepracujesz, tym więcej zarobisz. Na giełdzie ta zależność często działa w drugą stronę: <strong>im częściej klikasz „Kup/Sprzedaj”, tym niższy staje się Twój ostateczny wynik.</strong></p>

                    <p>W swoim wykładzie na Uniwersytecie Południowej Kalifornii z 1994 roku, Munger punktował, że inwestorzy indywidualni zbyt szybko realizują niewielkie zyski, zamiast pozwolić swoim najlepszym spółkom rosnąć przez dekady.</p>

                    <blockquote>💡 <strong>Innymi słowy:</strong> Jeśli kupiłeś wspaniałą spółkę, która rośnie i zwiększa zyski, sprzedanie jej tylko dlatego, że urosła o 20% lub 30%, to odcinanie skrzydeł własnemu portfelowi.</blockquote>

                    <h2>2. Ciche koszty nadaktywności: Podatki i prowizje</h2>

                    <p>Ciągły handel generuje dwa potężne hamulce dla Twojego kapitału, które Munger nazywał niepotrzebnym „tarciem” (friction costs):</p>

                    <ul>
                        <li><strong>Ciągła realizacja podatku od zysków kapitałowych:</strong> Sprzedając akcje z zyskiem co roku, natychmiast oddajesz część kapitału fiskusowi. Zamiast pracować w portfelu i generować kolejny procent składany, te pieniądze znikają bezpowrotnie.</li>
                        <li><strong>Prowizje i spread:</strong> Każda transakcja uszczupla Twój kapitał na rzecz brokera i animatorów rynku.</li>
                    </ul>

                    <p>Munger wielokrotnie wyliczał, że inwestor, który kupi jedną doskonałą spółkę i trzyma ją przez 30 lat bez sprzedawania, osiągnie znacznie wyższą stopę zwrotu netto niż ktoś, kto co roku przeskakuje między „Lepszymi okazjami”, płacąc po drodze podatki i prowizje.</p>

                    <blockquote>💡 <strong>Innymi słowy:</strong> Dopóki nie sprzedajesz akcji, Twój nieopodatkowany zysk dalej na Ciebie zarabia. Sprzedaż to dobrowolne odcięcie części paliwa z silnika procentu składanego.</blockquote>

                    <h2>3. Portfel dywidendowy jako samonapędzająca się kula śnieżna</h2>

                    <p>Dla inwestora skoncentrowanego na dywidendach zasada <em>„Sitting on Your Ass”</em> nabiera jeszcze głębszego sensu. Gdy posiadasz udział w fundamentalnie zdrowej spółce, która regularnie dzieli się zyskiem i co roku podnosi wypłatę:</p>

                    <ol>
                        <li><strong>Strumień gotówki rośnie bez Twojej ingerencji:</strong> Zarząd spółki odwala ciężką pracę za Ciebie — reinwestuje część zysków, rozwija biznes i wypłaca Ci coraz wyższą dywidendę na akcję.</li>
                        <li><strong>Inwestujesz dywidendę, a nie własne nerwy:</strong> Wpływające dywidendy reinwestujesz w kolejne walory, co Munger określał jako naturalny mechanizm alokacji kapitału.</li>
                        <li><strong>Cena rynkowa przestaje mieć znaczenie:</strong> Jeżeli spółka generuje stabilne przepływy pieniężne, krótkoterminowe wahania kursu na giełdzie stają się jedynie szumem.</li>
                    </ol>

                    <blockquote>💡 <strong>Innymi słowy:</strong> W inwestowaniu dywidendowym Twoim „zarobkiem” nie jest różnica w wycenie na ekranie, ale rosnący strumień gotówki płynący z biznesu na Twoje konto maklerskie. Do tego nie potrzebujesz transakcji — potrzebujesz czasu.</blockquote>

                    <h2>4. Siedzenie na tyłku to NIE lenistwo — to ekstremalna dyscyplina</h2>

                    <p>Munger przestrzegał przed myleniem jego zasady z biernością intelektualną. Siedzenie na tyłku nie oznacza zakupu przypadkowych akcji i zapomnienia o nich na dekady. Prawdziwe podejście Mungera wymaga:</p>

                    <p><strong>A. Rygorystycznej selekcji na wejściu:</strong><br>
                    Musisz wykonać tytaniczną pracę analityczną <em>przed</em> zakupem. Szukasz firm z tzw. szeroką fosą rynkową (economic moat), wysokim zwrotem ze zainwestowanego kapitału (ROIC) oraz uczciwym zarządem. Jak mawiał Munger na corocznych spotkaniach <a href="https://www.berkshirehathaway.com/letters/letters.html" target="_blank" rel="noopener noreferrer">Berkshire Hathaway</a>: <em>„Kupujemy biznesy tak dobre, że poradzi sobie z nimi nawet idiota — bo wcześniej czy później jakiś idiota będzie nimi zarządzał”</em>.</p>

                    <p><strong>B. Odporności na psychologiczne pokusy:</strong><br>
                    Najtrudniejszą częścią strategii jest patrzeć, jak rynek wokół szaleje (bańki na modnych spółkach, rynkowe paniki), i nie robić nic. Psychologia inwestowania wg Mungera opiera się na panowaniu nad własną chciwością i zazdrością (tzw. <em>FOMO</em>).</p>

                    <blockquote>💡 <strong>Innymi słowy:</strong> Najtrudniejsza praca w inwestowaniu odbywa się PRZED wciśnięciem przycisku „Kup”. Gdy już dokonasz właściwego wyboru, najtrudniejsza staje się powściągliwość, by nie zepsuć tego, co działa.</blockquote>

                    <h2>Podsumowanie: Test Cierpliwości Mungera</h2>

                    <p>Zanim zdecydujesz się na sprzedaż akcji dobrej spółki dywidendowej lub szybką zmianę pozycji w portfelu, zadaj sobie 3 pytania:</p>

                    <ol>
                        <li>Czy fundamentalny biznes spółki naprawdę uległ trwałemu pogorszeniu, czy po prostu kieruję się emocjami i szumem medialnym?</li>
                        <li>Jak wielki podatek i koszty transakcyjne poniosę w wyniku tej transakcji?</li>
                        <li>Czy mam pewność, że nowa spółka, którą chcę kupić za pozyskane środki, jest na tyle lepsza, by pokryć koszty podatkowe i ryzyko popełnienia błędu?</li>
                    </ol>

                    <p>Jeśli odpowiedź na te pytania brzmi „nie” — zastosuj radę Charliego Mungera: usiądź na rękach, daj działać procentowi składanemu i zajmij się życiem poza giełdą.</p>

                    <h2>Materiały źródłowe i literatura</h2>
                    <ul>
                        <li><a href="https://www.stripe.press/poor-charlies-almanack" target="_blank" rel="noopener noreferrer">Charlie Munger — Poor Charlie's Almanack (Kompilacja myśli i wykładów)</a></li>
                        <li><a href="https://www.berkshirehathaway.com/letters/letters.html" target="_blank" rel="noopener noreferrer">Listy do Akcjonariuszy Berkshire Hathaway</a></li>
                    </ul>
                </section>
            </article>
        `;
    }
}

new SittingOnYourAssMungerPost();
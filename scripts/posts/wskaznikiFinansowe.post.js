class WskaznikiFinansoweBuffettMungerLynchPost extends BasePost {
    constructor() {
        super({
            id: "wskazniki-finansowe-buffett-munger-lynch",
            title: "Jak czytać bilans jak Buffett, Munger i Lynch: Kluczowe wskaźniki finansowe i progi wartości",
            description: "Sprawdź, jakimi twardymi wskaźnikami finansowymi kierowali się najwybitniejsi inwestorzy w historii. Poznaj progi dla ROE, ROIC, C/Z, C/WK oraz dowiedz się, jak wykryć manipulacje w sprawozdaniu finansowym.",
            tags: ["analiza-fundamentalna", "buffett", "munger", "lynch", "wskazniki", "edukacja"],
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
                    <p>Wielcy inwestorzy wartościowi — <strong>Warren Buffett</strong>, <strong>Charlie Munger</strong> oraz <strong>Peter Lynch</strong> — różnili się stylami, jednak w kwestii twardych fundamentów finansowych spółki byli niezwykle spójni. Zamiast prognozować kierunek rynku na podstawie wykresów, otwierali sprawozdanie finansowe i weryfikowali, czy biznes generuje gotówkę, posiada trwałą przewagę konkurencyjną (tzw. <em>moat</em>) oraz czy jest wyceniany z dyskontem.</p>

                    <p>Oto zestawienie najważniejszych wskaźników finansowych, na które patrzyli legendarni inwestorzy, wraz z ich konkretnymi progami wartości i sygnałami ostrzegawczymi.</p>

                    <blockquote>💡 <strong>Innymi słowy:</strong> Wskaźniki finansowe to sito, na którym odsiewasz 90% giełdowych spółek, zanim spędzisz choćby minutę na czytaniu o ich „wielkich planach na przyszłość”.</blockquote>

                    <h2>1. Rentowność kapitału: ROE i ROIC (Sercowa ocena biznesu)</h2>

                    <p>Jeśli Warren Buffett i Charlie Munger mieli wybrać tylko jeden wskaźnik określający jakość biznesu, był nim <strong>ROE (Return on Equity)</strong> oraz jego potężniejszy brat — <strong>ROIC (Return on Invested Capital)</strong>.</p>

                    <h3>A. Wskaźnik ROE (Rentowność Kapitału Własnego)</h3>
                    <p>Mówi o tym, ile czystego zysku spółka generuje z każdej złotówki włożonej przez akcjonariuszy.</p>
                    <ul>
                        <li><strong>ROE &lt; 10%:</strong> Słaby biznes. Firma zarabia niewiele więcej niż bezpieczna lokata bankowa lub obligacje skarbowe.</li>
                        <li><strong>ROE &gt; 10%:</strong> Dobre, stabilne przedsiębiorstwo.</li>
                        <li><strong>ROE &gt; 15% (utrzymywane przez 5–10 lat):</strong> Wybitna spółka z trwałą przewagą konkurencyjną. Właśnie w takie biznesy Buffett i Munger pakowali miliardy dolarów.</li>
                    </ul>

                    <h3>B. Pułapka rozbieżności: ROE vs. ROIC / ROI</h3>
                    <p>Bardzo wysokie ROE (np. 30–40%) może być iluzją księgową. Spółka może sztucznie wyśrubować ROE, biorąc ogromny dług i drastycznie zmniejszając udział kapitału własnego. Dlatego Munger zawsze porównywał ROE z <strong>ROIC (Rentowność Zainwestowanego Kapitału)</strong>, który bierze pod uwagę zarówno kapitał własny, jak i dług.</p>

                    <p><strong>Czerwona flaga:</strong> Jeśli spółka ma <strong>ROE = 25%</strong>, ale jej <strong>ROIC (lub ROI) wynosi zaledwie 5%</strong>, oznacza to, że biznes operacyjny jest przeciętny, a wysoka rentowność wynika wyłącznie z ryzykownego lewarowania się długiem.</p>

                    <blockquote>💡 <strong>Innymi słowy:</strong> Szukaj spółek, które utrzymują ROE oraz ROIC powyżej 15% bez konieczności zadłużania się po uszy. To znak, że firma ma niemal darmową 'maszynkę' do drukowania gotówki.</blockquote>

                    <h2>2. Wycena spółki: C/Z (P/E) i wskaźnik PEG wg Lyncha</h2>

                    <p>Wskaźnik <strong>Cena do Zysku (C/Z lub P/E)</strong> pokazuje, ile lat musisz czekać, aby zyski spółki pokryły cenę, jaką za nią dzisiaj płacisz na giełdzie.</p>

                    <h3>A. Klasyczny progi C/Z dla Value Investorów</h3>
                    <ul>
                        <li><strong>C/Z &lt; 10–12:</strong> Okazja cenowa lub obszar dla tradycyjnego inwestowania w wartość (o ile spółka nie ma ukrytych problemów). Dla klasycznego inwestora C/Z w przedziale 10–12 oznaczało bezpieczny punkt wejścia.</li>
                        <li><strong>C/Z &gt; 12–15:</strong> Granica, powyżej której Benjamin Graham i młody Buffett stawali się bardzo ostrożni. Płacenie C/Z &gt; 20 uważali za rezygnację z marginesu bezpieczeństwa (chyba że spółka rosła błyskawicznie).</li>
                    </ul>

                    <h3>B. Innowacja Petera Lyncha: Wskaźnik PEG (Price/Earnings to Growth)</h3>
                    <p>Peter Lynch zauważył, że odrzucanie spółki tylko dlatego, że ma C/Z = 20, jest błędem, jeśli jej zyski rosną o 30% rocznie. Stworzył więc wskaźnik <strong>PEG = (Wskaźnik C/Z) / (Roczne tempo wzrostu zysków w %)</strong>.</p>

                    <ul>
                        <li><strong>PEG = 1,0:</strong> Spółka jest uczciwie wyceniona (np. C/Z = 15 przy wzroście zysków o 15% rocznie).</li>
                        <li><strong>PEG &lt; 1,0 (a idealnie &lt; 0,5):</strong> Głęboko niedowartościowany „Fast Grower” — ukochana okazja Lyncha.</li>
                        <li><strong>PEG &gt; 1,5:</strong> Spółka przewartościowana, inwestor płaci zbyt dużo za prognozowany wzrost.</li>
                    </ul>

                    <blockquote>💡 <strong>Innymi słowy:</strong> Sam wskaźnik C/Z = 12 bez wiedzy o tym, jak szybko rośnie biznes, nic Ci nie mówi. C/Z = 20 przy wzroście zysków o 30% rocznie jest tańsze niż C/Z = 10 przy braku jakiegokolwiek wzrostu.</blockquote>

                    <h2>3. Majątek spółki: C/WK (P/B - Price to Book Value)</h2>

                    <p>Wskaźnik <strong>Cena do Wartości Księgowej (C/WK lub P/B)</strong> określa, ile rynek płaci za każdą złotówkę majątku netto (aktywa minus zobowiązania) wykazanego w bilansie.</p>

                    <ul>
                        <li><strong>C/WK &lt; 1,0:</strong> Spółka wyceniana poniżej majątku, który posiada. Domena szukania tzw. „niedopałków” (cigar butts) przez Benjamina Grahama.</li>
                        <li><strong>C/WK &gt; 1,6:</strong> W klasycznej szkole Grahama spółka przekraczająca C/WK = 1,5–1,6 stawała się zbyt droga i wymagała ponadprzeciętnie wysokich zysków, by uzasadnić wycenę. (Graham stosował słynną regułę: <code>(C/Z) * (C/WK) ≤ 22,5</code>).</li>
                    </ul>

                    <p><strong>Ewolucja u Buffetta i Mungera:</strong> Munger przekonał Buffetta, że lepsze jest kupienie wspaniałej firmy z wyższym C/WK (np. Apple czy Coca-Cola z C/WK &gt; 3,0), jeśli generuje ona kosmiczne ROE, niż kupowanie słabej firmy fabrycznej z C/WK = 0,8, która nie potrafi zarobić na swój majątek.</p>

                    <blockquote>💡 <strong>Innymi słowy:</strong> Niskie C/WK (&lt; 1,6) jest doskonałą osłoną dla spółek przemysłowych czy finansowych, ale w nowoczesnej gospodarce najważniejsze aktywa ( marki, patenty, oprogramowanie) często nie widnieją w bilansie.</blockquote>

                    <h2>4. Zapewnienie przetrwania: Wolne Przepływy Pieniężne (FCF) i Dług</h2>

                    <p>Zysk netto wykazany w rachunku zysków i strat można łatwo podrasować zabiegami księgowymi. Pieniądz na koncie bankowym nie kłamie. Dlatego inwestorzy wartościowi zawsze patrzyli na dwa dodatkowe parametry:</p>

                    <h3>A. Jakość Zysku: FCF / Zysk Netto</h3>
                    <p><strong>Free Cash Flow (FCF)</strong> to realna gotówka, która zostaje w kieszeni spółki po pokryciu wszystkich wydatków operacyjnych i inwestycyjnych (CapEx).</p>
                    <ul>
                        <li>Jeśli FCF / Zysk Netto &gt; 1,0 — spółka generuje prawdziwe pieniądze. Zysk jest poparty realną gotówką.</li>
                        <li>Jeśli Zysk Netto rośnie, ale FCF jest ujemny przez kilka lat — uciekaj. Pieniądze przeciekają przez palce (np. w postaci nieściągalnych należności lub gigantycznych nakładów na utrzymanie majątku).</li>
                    </ul>

                    <h3>B. Bezpieczne Zadłużenie: Dług / EBITDA lub Dług / FCF</h3>
                    <p>Buffett powtarzał, że dobra spółka powinna być w stanie spłacić cały swój dług długoterminowy w czasie <strong>krótszym niż 3–4 lata</strong> z bieżących zysków.</p>

                    <ul>
                        <li><strong>Dług / EBITDA &lt; 2,0–3,0:</strong> Bezpieczny poziom zadłużenia. Firma przetrwa każdy kryzys gospodarczy i podwyżki stóp procentowych.</li>
                        <li><strong>Dług / EBITDA &gt; 4,0:</strong> Czerwona flaga. Firma działa pod presją wierzycieli. Każde tąpnięcie w opłacalności biznesu grozi utratą płynności.</li>
                    </ul>

                    <blockquote>💡 <strong>Innymi słowy:</strong> Zysk księgowy to teoria, gotówka na koncie to fakt. Firma bez długu i z wysokim FCF nigdy nie zbankrutuje.</blockquote>

                    <h2>Ściągawka: Święta Trójca Wskaźników Inwestora Wartościowego</h2>

                    <table class="metrics-table" style="width:100%; border-collapse: collapse; margin: 20px 0;">
                        <thead>
                            <tr style="border-bottom: 2px solid #ccc; text-align: left;">
                                <th style="padding: 8px;">Wskaźnik</th>
                                <th style="padding: 8px;">Idealny Poziom</th>
                                <th style="padding: 8px;">Co oznacza dla inwestora?</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style="border-bottom: 1px solid #eee;">
                                <td style="padding: 8px;"><strong>ROE</strong></td>
                                <td style="padding: 8px;">&gt; 15%</td>
                                <td style="padding: 8px;">Silna fosa rynkowa i wysoka rentowność kapitału.</td>
                            </tr>
                            <tr style="border-bottom: 1px solid #eee;">
                                <td style="padding: 8px;"><strong>ROIC vs ROE</strong></td>
                                <td style="padding: 8px;">ROIC &gt; 12% (blisko ROE)</td>
                                <td style="padding: 8px;">Brak ukrytych manipulacji długiem; czysta jakość operacyjna.</td>
                            </tr>
                            <tr style="border-bottom: 1px solid #eee;">
                                <td style="padding: 8px;"><strong>PEG (Lynch)</strong></td>
                                <td style="padding: 8px;">&lt; 1,0</td>
                                <td style="padding: 8px;">Cena akcji jest niska w stosunku do tempa wzrostu zysków.</td>
                            </tr>
                            <tr style="border-bottom: 1px solid #eee;">
                                <td style="padding: 8px;"><strong>C/WK (P/B)</strong></td>
                                <td style="padding: 8px;">&lt; 1,6 (klasyka)</td>
                                <td style="padding: 8px;">Margines bezpieczeństwa w majątku (kluczowy przy niskim ROE).</td>
                            </tr>
                            <tr style="border-bottom: 1px solid #eee;">
                                <td style="padding: 8px;"><strong>Dług / EBITDA</strong></td>
                                <td style="padding: 8px;">&lt; 3,0</td>
                                <td style="padding: 8px;">Bezpieczny bilans, spłata długu możliwa w kilka lat.</td>
                            </tr>
                        </tbody>
                    </table>
                </section>
            </article>
        `;
    }
}

new WskaznikiFinansoweBuffettMungerLynchPost();
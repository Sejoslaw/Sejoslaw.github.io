class JakZaczacInwestowacPost extends BasePost {
    constructor() {
        super({
            id: "jak-krok-po-kroku-zaczac-inwestowac-na-gieldzie",
            title: "Jak krok po kroku zacząć inwestować na giełdzie: Przewodnik praktyczny (ING Makler vs XTB)",
            description: "Kompleksowy przewodnik dla początkujących inwestorów: od wyboru brokera (ING Makler vs XTB), przez optymalizację podatkową (IKE/IKZE), aż po złożenie pierwszego zlecenia z limitem ceny.",
            tags: ["inwestowanie", "gielda", "gpw", "xtb", "ing-makler", "ike-ikze", "poradnik"],
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
                    <p>Rozpoczęcie przygody z giełdą nie wymaga potężnego kapitału ani wykształcenia finansowego. Wymaga natomiast <strong>systematyczności, zrozumienia ryzyka oraz odpowiedniej infrastruktury</strong>. Przejście od decyzji „chcę inwestować” do zakupu pierwszych akcji lub ETF-a sprowadza się do 5 prostych kroków.</p>

                    <h2>Krok 1: Wybór odpowiedniego brokera (ING Makler vs XTB)</h2>

                    <p>W Polsce dwaj najpopularniejsi brokerzy dla inwestorów indywidualnych to <strong>ING Biuro Maklerskie</strong> oraz <strong>XTB</strong>. Wybór zależy głównie od Twojego stylu inwestowania oraz priorytetów.</p>

                    <table class="comparison-table" style="width:100%; border-collapse: collapse; margin: 20px 0;">
                        <thead>
                            <tr style="border-bottom: 2px solid #ccc; text-align: left;">
                                <th style="padding: 8px;">Cecha</th>
                                <th style="padding: 8px;">ING Biuro Maklerskie</th>
                                <th style="padding: 8px;">XTB</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style="border-bottom: 1px solid #eee;">
                                <td style="padding: 8px;"><strong>Prowizja (Akcje/ETF Polska)</strong></td>
                                <td style="padding: 8px;">0,39% (min. 5 PLN)</td>
                                <td style="padding: 8px;">0% (do 100 000 EUR obrotu / mies.)</td>
                            </tr>
                            <tr style="border-bottom: 1px solid #eee;">
                                <td style="padding: 8px;"><strong>Konta Emerytalne (IKE/IKZE)</strong></td>
                                <td style="padding: 8px;">Dostępne (IKE oraz IKZE)</td>
                                <td style="padding: 8px;">Dostępne (IKE oraz IKZE)</td>
                            </tr>
                            <tr style="border-bottom: 1px solid #eee;">
                                <td style="padding: 8px;"><strong>Integracja z bankiem</strong></td>
                                <td style="padding: 8px;">Pełna (jeden login w ING Moje Konto)</td>
                                <td style="padding: 8px;">Brak (osobny przelew na subkonto)</td>
                            </tr>
                            <tr style="border-bottom: 1px solid #eee;">
                                <td style="padding: 8px;"><strong>Rynki zagraniczne</strong></td>
                                <td style="padding: 8px;">Wyższe prowizje (min. 38 PLN)</td>
                                <td style="padding: 8px;">0% prowizji, przewalutowanie 0,5%</td>
                            </tr>
                            <tr style="border-bottom: 1px solid #eee;">
                                <td style="padding: 8px;"><strong>Dla kogo?</strong></td>
                                <td style="padding: 8px;">Inwestorzy ceniący wygodę w jednym banku i dywidendy na GPW.</td>
                                <td style="padding: 8px;">Inwestorzy szukający zerowych prowizji, ETF-ów i akcji zagranicznych.</td>
                            </tr>
                        </tbody>
                    </table>

                    <blockquote>💡 <strong>Rekomendacja:</strong> Jeśli planujesz kupować polskie spółki dywidendowe długoterminowo i posiadasz konto w ING – ING Makler zapewnia ogromną wygodę. Jeśli chcesz kupować ETF-y, akcje zagraniczne lub robić częstsze transakcje na małych kwotach – XTB z brakiem prowizji będzie tańszą alternatywą.</blockquote>

                    <h2>Krok 2: Zabezpieczenie podatków (Otwarcia konta IKE / IKZE)</h2>

                    <p>Zanim otworzysz zwykły rachunek maklerski (opodatkowany 19% podatkiem Belki od każdego zysku i dywidendy), upewnij się, czy nie lepiej zacząć od <strong>IKE (Indywidualne Konto Emerytalne)</strong> lub <strong>IKZE (Indywidualne Konto Zabezpieczenia Emerytalnego)</strong>.</p>

                    <ul>
                        <li><strong>IKE:</strong> Całkowity brak podatku Belki (19%) od zysków kapitałowych i dywidend przy wypłacie po 60. roku życia. Zyski reinwestujesz w 100%.</li>
                        <li><strong>IKZE:</strong> Wpłaty odliczasz od dochodu w corocznym PIT (zwrot podatku PIT nawet do kilkunastu procent wpłaconej kwoty), ale przy wypłacie na emeryturze płacisz zryczałtowany podatek 10%.</li>
                    </ul>

                    <h2>Krok 3: Rejestracja, test MiFID i zasilenie konta</h2>

                    <p>Proces rejestracji u obu brokerów jest w pełni cyfrowy i trwa od kilku minut do jednego dnia roboczego:</p>

                    <ol>
                        <li><strong>Weryfikacja tożsamości (KYC):</strong> Przygotuj dowód osobisty. W ING przechodzisz proces automatycznie przez bankowość; w XTB wgrywasz zdjęcie dowodu i robisz selfie.</li>
                        <li><strong>Ankieta wiedzy i doświadczenia (MiFID):</strong> Obligatoryjny kwestionariusz prawny sprawdzający, czy rozumiesz ryzyko giełdowe. Nie da się go "oblać" – służy określeniu profilu inwestora.</li>
                        <li><strong>Zasilenie konta:</strong> Przelej kwotę, którą przeznaczasz na inwestycje. Pamiętaj: <em>nigdy nie inwestuj pieniędzy z poduszki finansowej (3–6 miesięcy kosztów życia)!</em></li>
                    </ol>

                    <h2>Krok 4: Składanie pierwszego zlecenia zakupu (Kluczowe zasady)</h2>

                    <p>Wpisanie symbolu spółki (np. <code>PZU</code>, <code>PKN</code>, <code>KGH</code>) w wyszukiwarce brokera to dopiero początek. Najważniejszą decyzją jest <strong>wybór typu zlecenia</strong>.</p>

                    <h3>A. Zlecenie z Limitem Ceny (Limit) — ZAWSZE ZALECANE</h3>
                    <p>Określasz maksymalną cenę, jaką jesteś w stanie zapłacić za jedną akcję. Zlecenie wykona się po Twojej cenie lub lepszej.</p>
                    <p><em>Przykład:</em> Akcje PZU kosztują 45,20 PLN. Składasz zlecenie „Kupno z Limitem 45,20 PLN” na 100 akcji. Masz gwarancję, że nie zapłacisz więcej niż 4 520 PLN (+ ewentualna prowizja).</p>

                    <h3>B. Zlecenie PKC / Market (Po Każdej Cenie) — UNIKAJ NA GPW</h3>
                    <p>Zlecenie wykonuje się natychmiast po najlepszych dostępnych ofertach na rynku. Na mniej płynnych spółkach może to doprowadzić do zakupu akcji po drastycznie zawyżonej cenie!</p>

                    <blockquote>💡 <strong>Żelazna zasada GPW:</strong> Zawsze używaj zlecenia <strong>Limit</strong>. Uchroni Cię to przed chwilowymi skokami cen i tzw. rynkowym spreadem.</blockquote>

                    <h2>Krok 5: Rozliczenie podatkowe (PIT-8C)</h2>

                    <p>Inwestowanie na tradycyjnym rachunku (poza IKE/IKZE) wiąże się z corocznym rozliczeniem podatkowym z Urzędem Skarbowym:</p>

                    <ul>
                        <li>Zarówno <strong>ING Makler</strong>, jak i <strong>XTB</strong> do końca lutego każdego roku wystawiają dla polskich rezydentów podatkowych formularz <strong>PIT-8C</strong>.</li>
                        <li>Dane z PIT-8C są automatycznie przesyłane do portalu <em>Twój e-PIT</em> (podatki.gov.pl). Wystarczy zalogować się w kwietniu, zweryfikować dane i zatwierdzić deklarację.</li>
                        <li>Podatek 19% płacisz tylko od <strong>zrealizowanych zysków</strong> (sprzedanych akcji z zyskiem) oraz od pobranych dywidend. Sam wzrost wyceny posiadanych akcji w portfelu nie tworzy obowiązku podatkowego.</li>
                    </ul>

                    <h2>Checklist: Twoja pierwsza transakcja w 5 minut</h2>
                    <ol>
                        <li>Zaloguj się do konta maklerskiego (ING lub XTB).</li>
                        <li>Wpisz ticker spółki lub ETF-a (np. <code>ETFBM40</code> lub <code>CDR</code>).</li>
                        <li>Wybierz typ zlecenia: <strong>LIMIT</strong>.</li>
                        <li>Wpisz cenę limitu (np. aktualną cenę z arkusza zleceń) oraz liczbę akcji.</li>
                        <li>Kliknij <strong>Kup</strong> i zatwierdź transakcję. Gratulacje, właśnie zostałeś współwłaścicielem biznesu!</li>
                    </ol>
                </section>
            </article>
        `;
    }
}

new JakZaczacInwestowacPost();
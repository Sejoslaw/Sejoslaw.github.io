class CzymJestDywidendaPost extends BasePost {
    constructor() {
        super({
            id: "czym-jest-dywidenda",
            title: "Czym jest dywidenda?",
            description: "Dywidenda to część zysku spółki, która jest wypłacana akcjonariuszom.",
            tags: ["dywidenda", "inwestowanie"],
            date: "2026-08-19"
        });
    }

    renderPost() {
        return `
            <article class="post">
                <header>
                    <h1>${this.title}</h1>
                    <p class="post-meta">Opublikowano: ${this.date}</p>
                </header>
                <hr>
                <section class="post-body">
                    <p>Dywidenda to część zysku spółki, która jest wypłacana akcjonariuszom. Jest to forma wynagrodzenia dla inwestorów za posiadanie akcji spółki. Wysokość dywidendy zależy od decyzji zarządu spółki oraz jej wyników finansowych. Dywidendy mogą być wypłacane w formie gotówki lub dodatkowych akcji.</p>
                    <p>Inwestorzy często wybierają spółki wypłacające regularne dywidendy, ponieważ stanowią one stabilne źródło dochodu. Warto jednak pamiętać, że nie wszystkie spółki wypłacają dywidendy, a ich wysokość może się zmieniać w zależności od sytuacji finansowej firmy.</p>
                </section>
            </article>
        `;
    }
}

new CzymJestDywidendaPost();
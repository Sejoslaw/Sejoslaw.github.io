class InformacjePrawnePost extends BasePost {
    constructor() {
        super({
            id: "informacje-prawne",
            title: "Informacje Prawne i Nota Prawna",
            description: "Zastrzeżenia prawne oraz regulamin serwisu.",
            tags: ["prawo", "regulamin"],
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
                    <p>Przeglądając niniejszą stronę, proszę pamiętaj, że:</p>
                    <ul>
                        <li>Strona ta ma <strong>jedynie charakter informacyjny</strong>.</li>
                        <li>Inwestowanie jest obarczone <strong>wysokim ryzykiem utraty kapitału</strong>.</li>
                        <li>Autor <strong>nie ponosi odpowiedzialności</strong> za decyzje inwestycyjne innych osób.</li>
                        <li>Niniejsza strona <strong>nie zawiera porad inwestycyjnych</strong>, a jedynie informacje o poczynaniach autora (porad inwestycyjnych mogą udzielać wyłącznie licencjonowani doradcy finansowi).</li>
                        <li>Strona ani w całości, ani w części <strong>nie stanowi „rekomendacji”</strong> w rozumieniu przepisów ustawy z dnia 29 lipca 2005 r. o obrocie instrumentami finansowymi czy Rozporządzenia Parlamentu Europejskiego i Rady (UE) Nr 596/2014 z dnia 16 kwietnia 2014 r. w sprawie nadużyć na rynku (rozporządzenie w sprawie nadużyć na rynku) oraz uchylające dyrektywę 2003/6/WE Parlamentu Europejskiego i Rady i dyrektywy Komisji 2003/124/WE, 2003/125/WE i 2004/72/WE oraz Rozporządzenia Delegowanego Komisji (UE) 2017/565 z dnia 25 kwietnia 2016 r. uzupełniające dyrektywę Parlamentu Europejskiego i Rady 2014/65/UE w odniesieniu do wymogów organizacyjnych i warunków prowadzenia działalności przez firmy inwestycyjne oraz pojęć zdefiniowanych na potrzeby tej dyrektywy. Zawarte w serwisie treści <strong>nie spełniają wymogów</strong> stawianych rekomendacjom w rozumieniu w/w ustawy, m.in. nie zawierają konkretnej wyceny żadnego instrumentu finansowego, <strong>nie opierają się</strong> na żadnej metodzie wyceny, a także <strong>nie określają ryzyka inwestycyjnego</strong>.</li>
                    </ul>
                </section>
            </article>
        `;
    }
}

new InformacjePrawnePost();
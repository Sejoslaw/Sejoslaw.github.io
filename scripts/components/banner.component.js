class AppBanner {
  constructor() {
    Utils.buildStyle("app-banner-styles", `
      .app-banner {
        max-width: 1200px;
        margin: 16px auto 8px;
        padding: 28px 24px;
        background: linear-gradient(135deg, var(--card-bg) 0%, var(--card-top-bg) 100%);
        border: 1px solid var(--border-color);
        border-radius: 16px;
        box-shadow: 0 4px 12px var(--shadow-color);
        position: relative;
        overflow: hidden;
      }

      .app-banner::before {
        content: "";
        position: absolute;
        top: -50px;
        right: -50px;
        width: 200px;
        height: 200px;
        background: radial-gradient(circle, rgba(76, 175, 80, 0.12) 0%, rgba(0,0,0,0) 70%);
        pointer-events: none;
      }

      .banner-content {
        display: flex;
        flex-direction: column;
        gap: 10px;
        max-width: 720px;
      }

      .banner-badge {
        display: inline-flex;
        align-items: center;
        width: fit-content;
        padding: 4px 10px;
        border-radius: 20px;
        font-size: 0.78rem;
        font-weight: 600;
        background-color: rgba(76, 175, 80, 0.12);
        color: #4caf50;
        border: 1px solid rgba(76, 175, 80, 0.25);
      }

      .app-banner h1 {
        margin: 0;
        font-size: 1.75rem;
        font-weight: 700;
        color: var(--text-primary);
        line-height: 1.25;
      }

      .app-banner p {
        margin: 0;
        font-size: 0.95rem;
        color: var(--text-secondary);
        line-height: 1.5;
      }

      .banner-pills {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        margin-top: 6px;
      }

      .pill {
        padding: 4px 10px;
        border-radius: 6px;
        font-size: 0.78rem;
        font-weight: 500;
        background-color: var(--bg-color);
        color: var(--text-secondary);
        border: 1px solid var(--border-color);
      }
    `);
  }

  render() {
    return `
      <div class="app-banner">
        <div class="banner-content">
          <span class="banner-badge">🧠 Krisu | Dziennik Inwestora</span>
          <h1>Moja Metodologia i Warsztat Giełdowy</h1>
          <p>Dzielę się autorskim podejściem do analizy fundamentalnej, selekcji spółek oraz praktyką rynkową — od długoterminowego budowania portfela po krótkoterminową spekulację.</p>
          <div class="banner-pills">
            <span class="pill">🔍 Warsztat Analizy</span>
            <span class="pill">💵 Spółki Dywidendowe</span>
            <span class="pill">📈 Spekulacja & Trading</span>
            <span class="pill">🏛️ Długoterminowy Mindset</span>
          </div>
        </div>
      </div>
    `;
  }
}
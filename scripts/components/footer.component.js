class AppFooter {
  constructor() {
    Utils.buildStyle("app-footer-styles", `
      .app-footer {
        max-width: 1200px;
        margin: 32px auto 24px;
        padding: 24px 24px;
        background: linear-gradient(135deg, var(--card-bg) 0%, var(--card-top-bg) 100%);
        border: 1px solid var(--border-color);
        border-radius: 16px;
        box-shadow: 0 4px 12px var(--shadow-color);
        position: relative;
        overflow: hidden;
      }

      .footer-content {
        display: flex;
        flex-direction: column;
        gap: 16px;
      }

      .footer-top {
        display: flex;
        flex-direction: column;
        gap: 6px;
      }

      .footer-brand {
        font-size: 1.1rem;
        font-weight: 700;
        color: var(--text-primary);
      }

      .footer-disclaimer {
        margin: 0;
        font-size: 0.85rem;
        color: var(--text-secondary);
        line-height: 1.45;
      }

      .footer-links {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
      }

      .footer-links .pill {
        padding: 4px 12px;
        border-radius: 6px;
        font-size: 0.78rem;
        font-weight: 500;
        background-color: var(--bg-color);
        color: var(--text-secondary);
        border: 1px solid var(--border-color);
        text-decoration: none;
        display: inline-flex;
        align-items: center;
        transition: color 0.2s ease, border-color 0.2s ease;
      }

      .footer-links a.pill:hover {
        color: var(--text-primary);
        border-color: var(--text-secondary);
      }

      .footer-bottom {
        padding-top: 12px;
        border-top: 1px solid var(--border-color);
        font-size: 0.8rem;
        color: var(--text-secondary);
      }

      .footer-bottom p {
        margin: 0;
      }
    `);
  }

  render() {
    return `
      <footer class="app-footer">
        <div class="footer-content">
          <div class="footer-top">
            <span class="footer-brand">Krisu Blog</span>
            <p class="footer-disclaimer">Prezentowane treści mają charakter wyłącznie edukacyjny i informacyjny. Nie stanowią rekomendacji inwestycyjnej w rozumieniu przepisów prawa.</p>
          </div>
          <div class="footer-links">
            <a href="#informacje-prawne" class="pill">⚖️ Nota Prawna</a>
          </div>
          <div class="footer-bottom">
            <p>&copy; 2026 Krisu. Wszelkie prawa zastrzeżone.</p>
          </div>
        </div>
      </footer>
    `;
  }
}
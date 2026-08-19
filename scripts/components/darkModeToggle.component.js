class AppDarkModeToggle {
  constructor() {
    Utils.buildStyle("app-dark-mode-toggle-styles", `
      .dark-mode-tile {
        position: fixed;
        bottom: 20px;
        right: 20px;
        z-index: 1000;
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 10px 16px;
        border-radius: 12px;
        background-color: var(--card-bg);
        border: 1px solid var(--border-color);
        box-shadow: 0 4px 12px var(--shadow-color);
        cursor: pointer;
        user-select: none;
        transition: transform 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease;
      }

      .dark-mode-tile:hover {
        transform: translateY(-2px);
        background-color: var(--card-top-bg);
        box-shadow: 0 6px 16px var(--shadow-color);
      }

      .dark-mode-tile:active {
        transform: translateY(0) scale(0.98);
      }

      .dark-mode-tile-icon {
        font-size: 1.2rem;
        line-height: 1;
      }

      .dark-mode-tile-content {
        display: flex;
        flex-direction: column;
      }

      .dark-mode-tile-title {
        font-weight: 600;
        font-size: 0.85rem;
        color: var(--text-primary);
        white-space: nowrap;
      }

      @media (max-width: 480px) {
        .dark-mode-tile-content {
          display: none;
        }
        .dark-mode-tile {
          padding: 12px;
          border-radius: 50%;
        }
      }
    `);

    AppDarkModeToggle.initTheme();
  }

  static initTheme() {
    const savedTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const currentTheme = savedTheme || (systemPrefersDark ? "dark" : "light");
    document.documentElement.setAttribute("data-theme", currentTheme);
  }

  static toggle() {
    const currentTheme = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", currentTheme);
    localStorage.setItem("theme", currentTheme);

    const icon = document.getElementById("dark-mode-toggle-icon");
    const title = document.getElementById("dark-mode-toggle-title");

    if (icon) icon.textContent = currentTheme === "dark" ? "☀️" : "🌙";
    if (title) title.textContent = currentTheme === "dark" ? "Jasny motyw" : "Ciemny motyw";
  }

  render() {
    const isDark = document.documentElement.getAttribute("data-theme") === "dark";

    return `
      <div class="dark-mode-tile" onclick="AppDarkModeToggle.toggle()" title="Zmień motyw">
        <span id="dark-mode-toggle-icon" class="dark-mode-tile-icon">${isDark ? "☀️" : "🌙"}</span>
        <div class="dark-mode-tile-content">
          <span id="dark-mode-toggle-title" class="dark-mode-tile-title">${isDark ? "Jasny motyw" : "Ciemny motyw"}</span>
        </div>
      </div>
    `;
  }
}
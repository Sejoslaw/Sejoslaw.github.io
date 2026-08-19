class App {
  constructor() {
    this.appElement = document.createElement("div");
    this.appElement.id = "app";
    document.body.appendChild(this.appElement);

    this.appBanner = new AppBanner();
    this.appContent = new AppContent();
    this.appFooter = new AppFooter();
    this.appDarkModeToggle = new AppDarkModeToggle();
  }

  render() {
    this.appElement.innerHTML = `
      ${this.appBanner.render()}
      ${this.appContent.render()}
      ${this.appFooter.render()}
      ${this.appDarkModeToggle.render()}
    `;
  }

  async init() {
    try {
        this.render();

        window.addEventListener("hashchange", this.render.bind(this));
    } catch (error) {
        console.error("Błąd inicjalizacji aplikacji:", error);
    }
  }
}
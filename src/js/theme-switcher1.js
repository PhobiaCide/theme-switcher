// Constants and Destructuring
const { body, documentElement } = document;
const widthBreakpoint = 768;
class ThemeSwitcher {
  constructor () {
    document.addEventListener("DOMContentLoaded", () => {
      this.applyMode();
      this.donTopcoat();
      // Event listener for theme selection
      this.themeElements().forEach((element) => {
        element.addEventListener("click", () => {
          this.activateTheme();
          this.applyMode();
        });
      });
      this.savedTheme = this.getSavedTheme();
      if (this.savedTheme) this.applyTheme(this.savedTheme);
      this.savedMode = this.getSavedMode();
      if (this.savedMode) this.applyMode(this.savedMode);
      window.addEventListener('resize', this.donTopcoat);
      // Create a MutationObserver instance
      this.themeObserver = new MutationObserver(this.mutationObserverCallback);
      // Configure and start the observer
      this.themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme', 'data-bs-theme', 'width'] });
    });
    this.savedTheme = this.getSavedTheme();
    if (this.savedTheme) this.applyTheme(this.savedTheme);
    this.savedMode = this.getSavedMode();
    if (this.savedMode) this.applyMode(this.savedMode);
    window.addEventListener('resize', this.donTopcoat);
    // Create a MutationObserver instance
    this.themeObserver = new MutationObserver(this.mutationObserverCallback);
    // Configure and start the observer
    this.themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme', 'data-bs-theme', 'width'] });
  }
  mutationObserverCallback = (mutations) => {
    console.log('Mutation Observed', mutations);
    mutations.forEach((mutation) => {
      if (mutation.attributeName === 'data-theme')
      {
        this.handleThemeChange();
      }
      if (mutation.attributeName === 'data-bs-theme')
      {
        this.handleModeChange();
      }
      if (mutation.attributeName === 'width')
      {
        this.handleWidthChange();
      }
    });
  };
  themeElements = () => document.getElementsByName("theme");
  constructTopcoatHref = (mode, screen) => `https://cdnjs.cloudflare.com/ajax/libs/topcoat/0.8.0/css/topcoat-${mode}-${screen}.min.css`;
  // Local Storage Functions
  storeMode = (string) => localStorage.setItem("mode", string);
  storeTheme = (string) => localStorage.setItem("theme", string);

  getSavedMode = () => localStorage.getItem("mode") || null;
  getSavedTheme = () => localStorage.getItem("theme") || null;

  getScreenSize = () => (window.innerWidth >= widthBreakpoint) ? 'desktop' : 'mobile';
  getSelectedTheme = () => [...this.themeElements()].find(element => element.checked)?.value;

  getActiveMode = () => document.documentElement.getAttribute('data-bs-theme').valueOf();

  getActiveTheme = () => +documentElement.getAttribute("data-theme").valueOf();
  getActiveThemeMode = () => (this.getActiveTheme() >= 5) ? "dark" : "light";

  applyMode = (str) => document.documentElement.setAttribute("data-bs-theme", str);
  applyTheme = (str) => documentElement.setAttribute("data-theme", str);

  handleModeChange = () => {
    const mode = this.getActiveThemeMode(); // Corrected method name
    this.applyMode(mode);
    this.storeMode(mode);
    this.donTopcoat(mode, this.getScreenSize());
  };

  handleThemeChange = () => {
    const theme = this.getActiveTheme();
    this.applyTheme(theme);
    this.storeTheme(theme);
  };

  handleWidthChange = () => {
    const mode = this.getActiveThemeMode();
    const screen = this.getScreenSize();
    this.donTopcoat(mode, screen);
  };

  donTopcoat = (mode, screen) => {
    const href = this.constructTopcoatHref(mode, screen);
    const topcoat = document.getElementById('topcoat-stylesheet');
    const currentLink = topcoat?.getAttribute('href');
    if (currentLink === href) return;
    if (!topcoat)
    {
      const link = document.createElement('link');
      link.id = 'topcoat-stylesheet';
      link.rel = 'stylesheet';
      link.href = href;
      document.head.appendChild(link);
    } else
    {
      topcoat.parentNode.removeChild(topcoat);  // Remove the existing link
      const link = document.createElement('link');
      link.id = 'topcoat-stylesheet';
      link.rel = 'stylesheet';
      link.href = href;
      document.head.appendChild(link);
    }
  };

};
new ThemeSwitcher();

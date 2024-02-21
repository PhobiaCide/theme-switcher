// Constants and Destructuring
const { body, documentElement } = document;
const widthBreakpoint = 768;

// Local Storage Functions
const storeTheme = (string) => localStorage.setItem("theme", string);
const getStoredTheme = () => localStorage.getItem("theme") || null;

// Theme-related Functions
const themeElements = document.getElementsByName("theme");

const getSelectedTheme = () => {
  const selectedThemeElement = Array.from(themeElements).find((element) => element.checked);
  return selectedThemeElement ? selectedThemeElement.value : null;
};

const activateTheme = () => {
  const theme = getSelectedTheme();
  documentElement.setAttribute("data-theme", theme);
  storeTheme(theme);
};

// Theme Mode Functions
const determineMode = () => (parseInt(documentElement.getAttribute("data-theme"), 10) >= 5) ? "dark" : "light";

// Initialization
const applyMode = () => document.documentElement.setAttribute("data-bs-theme", determineMode());

document.addEventListener("DOMContentLoaded", () => {
  applyMode();
  donTopcoat();

  // Event listener for theme selection
  themeElements.forEach((element) => {
    element.addEventListener("click", () => {
      activateTheme();
      applyMode();
    });
  });
});

// Topcoat Functions
const getScreenSize = () => (window.innerWidth >= widthBreakpoint) ? 'desktop' : 'mobile';

const constructTopcoatHref = (themeMode) => `https://cdnjs.cloudflare.com/ajax/libs/topcoat/0.8.0/css/topcoat-${getScreenSize()}-${themeMode}.min.css`;

const donTopcoat = () => {
  const activeMode = document.documentElement.getAttribute('data-bs-theme').valueOf();
  console.log(`Active mode: ${activeMode}`);

  const href = constructTopcoatHref(activeMode);
  console.log(`Topcoat href: ${href}`);

  const topcoat = document.getElementById('topcoat-stylesheet');
  console.log(`Topcoat element: ${topcoat ? topcoat.id : 'Not found'}`); // Log the id property of the topcoat element if found

  if (topcoat) {
    topcoat.setAttribute('href', href);
    applyMode();
  }
};

window.addEventListener('resize', donTopcoat);

// Create a MutationObserver instance
const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    if (mutation.attributeName === 'data-theme') {
      donTopcoat();
    }
  });
});

// Configure and start the observer
observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });

// Local Storage Functions
const saveSelectedTheme = (string) => localStorage.setItem("theme", string);
const getSavedTheme = () => localStorage.getItem("theme");

const getActiveTheme = () => +document.documentElement.getAttribute("data-theme");

// Theme Mode Functions
const getMode = () => (+getActiveTheme() >= 5) ? "dark" : "light";

// Initialization
const applyMode = () => document.documentElement.setAttribute("data-bs-theme", getMode());

// Theme-related Functions
const themeElements = document.getElementsByName("theme");
const getSelectedTheme = () => {
  let selectedTheme = null;
  for (let themeElement of themeElements) {
    if (themeElement.checked) {
      selectedTheme = themeElement.value;
      break;
    }
  }
  return selectedTheme;
};

// Topcoat Functions
const donTopcoat = () => {
  const widthBreakpoint = 768;
  const isDesktop = (window.innerWidth >= widthBreakpoint);
  const screenSize = isDesktop ? 'desktop' : 'mobile';
  const baseRef = 'https://cdnjs.cloudflare.com/ajax/libs/topcoat/0.8.0/css/topcoat-';
  const activeMode = document.documentElement.getAttribute('data-bs-theme');
  const topcoatHref = `${baseRef}${screenSize}-${activeMode}.min.css`;
  document.getElementById('topcoat-stylesheet').setAttribute('href', topcoatHref);
  applyMode();
};

const activateTheme = () => {
  donTopcoat();
  const theme = getSelectedTheme();
  document.documentElement.setAttribute("data-theme", theme);
  saveSelectedTheme(theme);
};

document.addEventListener("DOMContentLoaded", () => {
  donTopcoat();
  // Event listener for theme selection
  for (let themeElement of themeElements) {
    themeElement.addEventListener("click", activateTheme);
  }
  window.addEventListener('resize', donTopcoat);

  // Create a MutationObserver instance
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.attributeName === 'data-bs-theme') {
        donTopcoat();
      }
    });
  });

  // Configure and start the observer
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
});
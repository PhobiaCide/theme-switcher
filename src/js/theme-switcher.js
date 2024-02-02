// Constants and Destructuring
const { body, documentElement, getElementsByName } = document;
const widthBreakpoint = 768;

// Local Storage Functions
const saveSelectedTheme = (string) => localStorage.setItem("theme", string);
const getSavedTheme = () => localStorage.getItem("theme");

// Theme-related Functions
const themeElements = document.getElementsByName("theme");
console.log(themeElements);
const getSelectedTheme = () =>
{
  let selectedTheme = null;
  for (let themeElement of themeElements) {
    if (themeElement.checked === true) {
      selectedTheme = themeElement.value;
      break;
    }
  }
  return selectedTheme;
};

const activateTheme = () =>
{
  const theme = getSelectedTheme();
  documentElement.setAttribute("data-theme", theme); // Change activeMode to theme
  saveSelectedTheme(theme);
};

// Theme Mode Functions
const getThemeMode = () => (+documentElement.getAttribute("data-theme") >= 5) ? "dark" : "light";

// Initialization
const applyMode = () => document.documentElement.setAttribute("data-bs-theme", getThemeMode());

document.addEventListener("DOMContentLoaded", () =>
{
  applyMode();
  donTopcoat();

  // Event listener for theme selection
  themeElements.forEach((element) =>
  {
    element.addEventListener("click", () =>
    {
      activateTheme();
      applyMode();
    });
  });
});

// Topcoat Functions
const isDesktop = () => window.innerWidth >= widthBreakpoint;
const getScreenSize = () => (isDesktop() ? 'desktop' : 'mobile');

const baseRef = 'https://cdnjs.cloudflare.com/ajax/libs/topcoat/0.8.0/css/topcoat-';

const constructTopcoatHref = (themeMode) => `${baseRef}${getScreenSize()}-${themeMode}.min.css`;


const donTopcoat = () =>
{
  const activeMode = document.documentElement.getAttribute('data-bs-theme') || 'light';
  console.log(`Active mode: ${activeMode}`);

  const href = constructTopcoatHref(activeMode);
  console.log(`Topcoat href: ${href}`);

  const topcoat = document.getElementById('topcoat-stylesheet');
  console.log(`Topcoat element: ${topcoat}`);

  topcoat.setAttribute('href', href);
  applyMode(activeMode);
};

window.addEventListener('resize', donTopcoat);

// Create a MutationObserver instance
const observer = new MutationObserver((mutations) =>
{
  mutations.forEach((mutation) =>
  {
    if (mutation.attributeName === 'data-theme') {
      donTopcoat();
    }
  });
});

// Configure and start the observer
observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
// Constants and Destructuring
const { body, documentElement, getElementsByName } = document;
const widthBreakpoint = 768;

// Local Storage Functions
const storeTheme = (string) => localStorage.setItem("theme", string);
const getStoredTheme = () => localStorage.getItem("theme") || null;

// Theme-related Functions
const themeElements = document.getElementsByName("theme");

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
  storeTheme(theme);
};

// Theme Mode Functions
const determineMode = () => (+documentElement.getAttribute("data-theme") >= 5) ? "dark" : "light";

// Initialization
const applyMode = () => document.documentElement.setAttribute("data-bs-theme", determineMode());

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
const getScreenSize = () => {
  const isDesktop = () => window.innerWidth >= widthBreakpoint;

  return (isDesktop() ? 'desktop' : 'mobile');
}

const constructTopcoatHref = (themeMode) => {
  const baseRef = 'https://cdnjs.cloudflare.com/ajax/libs/topcoat/0.8.0/css/topcoat-';
  
  return `${baseRef}${getScreenSize()}-${themeMode}.min.css`;
}

const donTopcoat = () =>
{
  const activeMode = document.documentElement.getAttribute('data-bs-theme').valueOf();
  console.log(`Active mode: ${activeMode}`);

  const href = constructTopcoatHref(activeMode);
  console.log(`Topcoat href: ${href}`);

  const topcoat = document.getElementById('topcoat-stylesheet');
  console.log(`Topcoat element: ${topcoat.id}`); // Fix: Log the id property of the topcoat element

  topcoat.setAttribute('href', href);
  applyMode();
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
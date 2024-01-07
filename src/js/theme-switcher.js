// Constants and Destructuring
const { body, documentElement, getElementsByName } = document;
const widthBreakpoint = 768;

// Local Storage Functions
const saveSelectedTheme = (string) => localStorage.setItem("theme", string);
const getSavedTheme = () => localStorage.getItem("theme");

// Theme-related Functions
const getThemeElements = () => document.getElementsByName("theme");
const getSelectedTheme = () => {
  const themeElements = getThemeElements();
  let selectedValue;

  for (const element of themeElements) {
    if (element.checked) {
      selectedValue = element.value;
      break;
    }
  }
  return selectedValue;
};

const applyTheme = (theme) => {
  const attribute = "data-theme";
  documentElement.setAttribute(attribute, theme);
  saveSelectedTheme(theme);
};

// Theme Mode Functions
const getThemeMode = () => {
  const mode = documentElement.getAttribute("data-theme"); // Define mode here
  const isDark = () => (mode >= 5);

  return isDark() ? "dark" : "light";
};

// Topcoat Functions
const isDesktop = () => window.innerWidth >= widthBreakpoint;
const constructTopcoatHref = () => `https://cdnjs.cloudflare.com/ajax/libs/topcoat/0.8.0/css/topcoat-${isDesktop() ? 'desktop' : 'mobile'}-${getThemeMode()}.min.css`;

const donTopcoat = () => {
  const href = constructTopcoatHref();
  const topcoat = document.getElementById("topcoat-stylesheet");
  topcoat.setAttribute("href", href);
  applyMode(getThemeMode());
};

// Initialization
const applyMode = (mode) => {
  const attribute = "data-bs-theme";
  document.documentElement.setAttribute(attribute, mode);
};

document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = getSavedTheme();

  if (savedTheme) {
    applyMode(savedTheme);
  } else {
    // If no saved theme, use the user's preferred color scheme
    applyMode(getUserPreferences());
  }

  donTopcoat(); // Load theme on page load

  window.addEventListener("resize", () => {
    donTopcoat();
  });

  // Event listener for theme selection
  document.getElementsByName("theme").forEach((element) => {
    element.addEventListener("click", () => {
      applyTheme(getSelectedTheme());
      applyMode(getThemeMode());
    });
  });
});


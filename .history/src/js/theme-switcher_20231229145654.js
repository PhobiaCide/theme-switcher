const { body, documentElement, getElementsByName } = document;

const saveSelectedTheme = (string) => localStorage.setItem("theme", string);
const getSavedTheme = () => localStorage.getItem("theme");

const getUserPreferences = () => {
  const { matches } = window.matchMedia("(prefers-color-scheme: dark)");
  return matches ? "dark" : "light";
};
const getAppliedMode = () => {
  const isDark = () => (mode >= 5);
  return isDark() ? "dark" : "light";
};
/**
 * Function to get the currently selected theme
 * @returns {string} The selected theme
 */
const getSelectedTheme = () => {
  const themeElements = document.getElementsByName('theme');
  let selectedValue;

  return themeElements.reduce((selectedValue, element) => (element.checked) ? element.value : selectedValue, 'default');
  
  for (const element of themeElements)
  {
    if (element.checked)
    {
      selectedValue = element.value;
      break;
    }
  }
  return selectedValue;
  
};



/** 
 * Function to change the theme
 */
const applySelectedTheme = (theme) => {
  const attribute = "data-theme";
  // Change the content of the header to match the selected theme
  documentElement.removeAttribute(attribute);
  documentElement.setAttribute(attribute, theme);
  saveSelectedTheme(theme);
  donTopcoat();

  // Save the theme choice to localStorage
  saveSelectedTheme(theme);
};

// Check if a theme choice is saved in localStorage
const savedTheme = localStorage.getItem("theme");

// If a saved theme exists, load it; otherwise, do nothing
(savedTheme) && applySelectedTheme(savedTheme);

const reapplySelectedTheme = () => {
  // Reset the theme to the default theme
  console.log("Resetting theme");
  documentElement.removeAttribute("data-theme");
  documentElement.innerHTML = "default";
  applySelectedTheme("default");
};

document.getElementsByName("theme").forEach((element) => {
  element.addEventListener("click", () => {
    console.log("A theme was selected.");
    applySelectedTheme(getSelectedTheme());
  });
});

/** 
 * Function to load the appropriate stylesheet based on window width and theme group
 */
function donTopcoat() {
  const { documentElement } = document;
  const widthBreakpoint = 768;
  const isDesktop = () => window.innerWidth >= widthBreakpoint;
  const returnMode = () => {


    const mode = documentElement.getAttribute("data-bs-theme");

    // Read theme attributes from the body

  };

  // Construct the filename based on the attributes
  const href = `css/topcoat/${isDesktop() ? 'desktop' : 'mobile'}/${isDark() ? 'dark' : 'light'}.css`;
  const topcoat = document.getElementById("topcoat-stylesheet");
  topcoat.setAttribute("href", href);
}

document.addEventListener("DOMContentLoaded", () => {
  donTopcoat(); // Load theme on page load

  // Add event listener for window resize
  window.addEventListener("resize", () => {
    donTopcoat();
  });
});
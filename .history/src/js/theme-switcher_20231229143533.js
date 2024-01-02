const { body, documentElement, getElementsByName } = document;



/**
 * Function to get the currently applied theme
 * @returns {string} The selected theme
 */
const getAppliedTheme = () => {
  const themeElements = document.getElementsByName('theme');
  let selectedValue;

  for (const element of themeElements) {
    if (element.checked) {
      selectedValue = element.value;
      break;
    }
  }
  return selectedValue;
}

const setSavedTheme = (string) => localStorage.setItem("theme", string);
const getSavedTheme = () => localStorage.getItem("theme");

/** 
 * Function to change the theme
 */
const setAppliedTheme = (theme) => {
  const attribute = "data-theme";
  // Change the content of the header to match the selected theme
  documentElement.removeAttribute(attribute);
  documentElement.setAttribute(attribute, theme);
  setSavedTheme(theme);
  donTopcoat(); 

  // Save the theme choice to localStorage
  setSavedTheme(theme);
};

// Check if a theme choice is saved in localStorage
const savedTheme = localStorage.getItem("theme");

// If a saved theme exists, load it; otherwise, do nothing
(savedTheme) && setAppliedTheme(savedTheme);

const resetAppliedTheme = () => {
  // Reset the theme to the default theme
  console.log("Resetting theme");
  documentElement.removeAttribute("data-theme");
  documentElement.innerHTML = "default";
  setAppliedTheme("default");
};

document.getElementsByName("theme").forEach((element) => {
  element.addEventListener("click", () => {
    console.log("click");
    setAppliedTheme(getAppliedTheme());
  });
});

const get 

/** 
 * Function to load the appropriate stylesheet based on window width and theme group
 */
function donTopcoat() {
  const { documentElement } = document;
  const widthBreakpoint = 768;
  const isDesktop = () => window.innerWidth >= widthBreakpoint;
  const mode = documentElement.getAttribute("data-bs-theme");
  const isDark = () => (mode >= 5);
  // Read theme attributes from the body
  
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
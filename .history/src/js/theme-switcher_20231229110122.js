const { body, documentElement, getElementsByName } = document;

const widthBreakpoint = 768;
const isDesktop = () => window.innerWidth >= widthBreakpoint;

/**
 * Function to get the currently applied theme
 * @returns {string} The selected theme
 */
const getAppliedTheme = () => {
  const themeElement = getElementsByName('theme');
  let selectedValue;

  for (const element of themeElement) {
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
  const attribute = "data-bs-theme";
  // Change the content of the header to match the selected theme
  documentElement.removeAttribute(attribute)
  documentElement.setAttribute(attribute, `theme-${theme}`);
  setTheme(`theme-${theme}`);

  // Save the theme choice to localStorage
  setSavedTheme(theme);
  donTopcoat();
};

// Check if a theme choice is saved in localStorage
const savedTheme = localStorage.getItem("theme");

// If a saved theme exists, load it; otherwise, do nothing
(savedTheme) && changeAppliedTheme(savedTheme);

const resetAppliedTheme = () => {
  // Reset the theme to the default theme
  console.log("Resetting theme");
  documentElement.removeAttribute("data-bs-theme").innerHTML = "default";
  changeTheme("default");
};
document.getElementsByName("theme").forEach((element) => {
  element.addEventListener("click", () => {
    console.log("click");
    changeTheme(getAppliedTheme());
  });
});
const { body, documentElement, getElementsByName } = document;

const widthBreakpoint = 768;
const isDesktop = () => window.innerWidth >= widthBreakpoint;

/**
 * Function to get the currently applied theme
 * @returns {string} The selected theme
 */
const getAppliedTheme = () => {
  console.log("getAppliedTheme");
  const ele = getElementsByName('theme');
  console.log(`Elements: ${JSON.parse(ele)}`);
  let selectedValue;

  for (const element of ele) {
    if (element.checked) {
      selectedValue = element.value;
      break;
    }
  }
  console.log(selectedValue);
  return selectedValue;
}

/** 
 * Function to change the theme
 */
const changeTheme = (theme) => {
  console.log("changeTheme");
  console.log(theme);
  const isLightTheme = (theme) => (theme < 4);

  const setTheme = (string) => isLightTheme(+string) ? 'light' : 'dark';
  const attribute = "data-bs-theme";
  // Change the content of the header to match the selected theme
  documentElement.removeAttribute(attribute)
  documentElement.setAttribute(attribute, `theme-${theme}`);
  console.log(`theme-${theme}`);
  setTheme(`theme-${theme}`);

  // Save the theme choice to localStorage
  localStorage.setItem("theme", theme);
  donTopcoat();
};

// Check if a theme choice is saved in localStorage
const savedTheme = localStorage.getItem("theme");
console.log(`Saved Theme: ${savedTheme}`);
// If a saved theme exists, load it; otherwise, do nothing
(savedTheme) && changeTheme(savedTheme);

const resetTheme = () => {
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

document.addEventListener("DOMContentLoaded", () => {
  donTopcoat(); // Load theme on page load

  // Add event listener for window resize
  window.addEventListener("resize", () => {
    donTopcoat();
  });
});


/** 
 * Function to load the appropriate stylesheet based on window width and theme group
 */
function donTopcoat() {

console.log(isDesktop());
  const isDark = (theme) => (theme === 'dark');
  // Read theme attributes from the body
  const theme = documentElement.getAttribute("data-bs-theme");

  // Construct the filename based on the attributes
  const href = `./src/css/topcoat/${isDesktop ? 'desktop' : 'mobile'}/${isDark(theme) ? 'dark' : 'light'}.css`;
  console.log(href);
  const topcoat = document.getElementById("topcoat-stylesheet")
  topcoat.setAttribute("href", href);
}

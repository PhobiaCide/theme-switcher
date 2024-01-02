const { body, documentElement, getElementsByName } = document;

function getSelectedTheme() {
  const ele = getElementsByName('theme');
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

// Function to capitalize words in a string
const titleCase = (str) =>
  str
    .toLowerCase()
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

// Function to change the theme
const changeTheme = (theme) => {
  console.log(theme);
  const isLightTheme = (theme) => (theme < 4);

  const setTheme = (string) => isLightTheme(+string) ? 'light' : 'dark';
  const attribute = "data-theme";
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

// If a saved theme exists, load it; otherwise, do nothing
(savedTheme) && changeTheme(savedTheme);

const resetTheme = () => {
  // Reset the theme to the default theme
  console.log("Resetting theme");
  documentElement.removeAttribute("data-bs-theme").innerHTML = "default";
  changeTheme("default");
};

document.getElementById("theme-btn-0").addEventListener("click", () => changeTheme(0));
document.getElementById("theme-btn-1").addEventListener("click", () => changeTheme(1));
document.getElementById("theme-btn-2").addEventListener("click", () => changeTheme(2));
document.getElementById("theme-btn-3").addEventListener("click", () => changeTheme(3));
document.getElementById("theme-btn-4").addEventListener("click", () => changeTheme(4));

document.getElementById("theme-btn-5").addEventListener("click", () => changeTheme(5));
document.getElementById("theme-btn-6").addEventListener("click", () => changeTheme(6));
document.getElementById("theme-btn-7").addEventListener("click", () => changeTheme(7));
document.getElementById("theme-btn-8").addEventListener("click", () => changeTheme(8));
document.getElementById("theme-btn-9").addEventListener("click", () => changeTheme(9));

// Add event listener for the "Reset Demo" button if needed
document.getElementById("reset-theme-btn").addEventListener("click", () => resetTheme());

document.addEventListener("DOMContentLoaded", () => {
  donTopcoat(); // Load theme on page load

  // Add event listener for window resize
  window.addEventListener("resize", () => {
    donTopcoat();
  });
});


/** 
 * <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/topcoat/0.8.0/css/topcoat-mobile-dark.min.css" integrity="sha512-3axCmtM0Aq1Zin8EQ/BgsaYCdR9jY488aH7JYG4zTUeEHWGqOjm86hjL4cx6nIWGLMJ/UU4m+MOcQ2D/f2QdfQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
 * 
 * <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/topcoat/0.8.0/css/topcoat-desktop-dark.min.css" integrity="sha512-Cwdrdy7iqIj7n5XjgDqvpCOO4aztpoIISOcabdx5igD8Z51YuOWa8BBbI8+2oOI6Rf77xMZ1vAlXvGn6jc6O5Q==" crossorigin="anonymous" referrerpolicy="no-referrer" />
 * 
 * <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/topcoat/0.8.0/css/topcoat-desktop-light.min.css" integrity="sha512-vToQtWeIAV/M1IyI2UfG2960coqQIr4x+icXgiiLBdHWY8D1WicINvFKOPE8OdAgZQ19KmDIq6467HpuZ5mvJA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
 * 
 * <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/topcoat/0.8.0/css/topcoat-mobile-light.min.css" integrity="sha512-EBhFkNAzhuqgCQxsBZLoqnTnvS3VF0V635TNJ7TXZ1ArdVKh/mO50iAXX/e0whOPegbPw/VsduECqVFeUME1KQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
 * 
 * 
 * Function to load the appropriate stylesheet based on window width and theme group
 */
function donTopcoat() {
  console.log("donTopcoat");
  const isDesktop = window.innerWidth >= 768; // Adjust the breakpoint as needed
console.log(isDesktop)();
  const isDark = (theme) => (theme === 'dark');
  // Read theme attributes from the body
  const theme = documentElement.getAttribute("data-bs-theme");

  // Construct the filename based on the attributes
  const href = `./src/css/topcoat-${isDesktop ? 'desktop' : 'mobile'}-${isDark(theme) ? 'dark' : 'light'}.min.css`;
  console.log(href);
  const topcoat = document.getElementById("topcoat-stylesheet")
  topcoat.setAttribute("href", href);
}

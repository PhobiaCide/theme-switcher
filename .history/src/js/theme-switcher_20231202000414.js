console.log(document);
const { body, documentElement } = document; // Removed unnecessary getElementById
console.log(documentElement);
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
  if (!theme || theme === "") {
    return
  } else {
    const lightThemes = [
      'alien',
      'back-to-the-future',
      'star-wars-tatooine-jakku',
      'the-fifth-element',
      'close-encounters'
    ];

    const isLightTheme = (string) => lightThemes.includes(string);

    const setTheme = (string) => isLightTheme(string) ? 'light' : 'dark';

    //Object.assign()
/*
    const newAttribute = (documentElement, attribute, value) => {
      documentElement.removeAttribute(attribute);
      documentElement.setAttribute(attribute, value);
    }

    newAttribute('data-bs-theme', `${setTheme(theme)}`);
    newAttribute('data-theme', theme);
*/
    // Change the content of the header to match the selected theme
    document.getElementById("theme-name").innerHTML = titleCase(theme);
    
    setTheme(theme);
  
  
  }
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
  documentElement.removeAttribute("data-bs-theme").innerHTML = "";
  changeTheme("default");
};

document.getElementById("l-theme-button-1").addEventListener("click", () => changeTheme("l-theme-1"));
document.getElementById("l-theme-button-2").addEventListener("click", () => changeTheme("l-theme-2"));
document.getElementById("l-theme-button-3").addEventListener("click", () => changeTheme("l-theme-3"));
document.getElementById("l-theme-button-4").addEventListener("click", () => changeTheme("l-theme-4"));
document.getElementById("l-theme-button-5").addEventListener("click", () => changeTheme("l-theme-5"));

document.getElementById("d-theme-button-1").addEventListener("click", () => changeTheme("d-theme-1"));
document.getElementById("d-theme-button-2").addEventListener("click", () => changeTheme("d-theme-2"));
document.getElementById("d-theme-button-3").addEventListener("click", () => changeTheme("d-theme-3"));
document.getElementById("d-theme-button-4").addEventListener("click", () => changeTheme("d-theme-4"));
document.getElementById("d-theme-button-5").addEventListener("click", () => changeTheme("d-theme-5"));

// Add event listener for the "Reset Demo" button if needed
document.getElementById("reset-theme-button").addEventListener("click", () => resetTheme());

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
  const isDesktop = window.innerWidth >= 768; // Adjust the breakpoint as needed

  const isDark = (theme) => theme === 'dark';
  // Read theme attributes from the body
  const theme = documentElement.getAttribute("data-bs-theme");

  const file = {};
  // Construct the filename based on the attributes
  file.href = `https://cdnjs.cloudflare.com/ajax/libs/topcoat/0.8.0/css/topcoat-${isDesktop ? 'desktop' : 'mobile'}-${isDark(theme) ? 'dark' : 'light'}.min.css`;
  let index;
  if (isDesktop) {
    index = isDark(theme) ? 0 : 1;
  } else {
    index = isDark(theme) ? 2 : 3;
  }

  file.integrity = [
    `sha512-Cwdrdy7iqIj7n5XjgDqvpCOO4aztpoIISOcabdx5igD8Z51YuOWa8BBbI8+2oOI6Rf77xMZ1vAlXvGn6jc6O5Q==`,
    `sha512-vToQtWeIAV/M1IyI2UfG2960coqQIr4x+icXgiiLBdHWY8D1WicINvFKOPE8OdAgZQ19KmDIq6467HpuZ5mvJA==`,
    `sha512-3axCmtM0Aq1Zin8EQ/BgsaYCdR9jY488aH7JYG4zTUeEHWGqOjm86hjL4cx6nIWGLMJ/UU4m+MOcQ2D/f2QdfQ==`,
    `sha512-EBhFkNAzhuqgCQxsBZLoqnTnvS3VF0V635TNJ7TXZ1ArdVKh/mO50iAXX/e0whOPegbPw/VsduECqVFeUME1KQ==` 
  ][index];
console.log(file.href, file.integrity );
  const topcoat = document.getElementById("topcoat-stylesheet")
  topcoat.setAttribute("href", href);
  topcoat.setAttribute("integrity", integrity)

}

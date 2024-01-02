const { body } = document; // Removed unnecessary getElementById

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
    body.removeAttribute("data-theme-group")
    body.removeAttribute("data-theme-name")
  } else {
    const lightThemes = [
      'alien',
      'back-to-the-future',
      'star-wars-tatooine-jakku',
      'the-fifth-element',
      'close-encounters'
    ];

    const isLightTheme = (string) => lightThemes.includes(string);

    const handleIsLightTheme = (string) => isLightTheme(string) ? 'light' : 'dark';

    body.removeAttribute("data-theme-group")
    body.setAttribute('data-theme-group', `${handleIsLightTheme(theme)}`);

    body.removeAttribute("data-bs-theme")
    body.setAttribute('data-bs-theme', `${handleIsLightTheme(theme)}`);

    body.removeAttribute("data-theme-name")
    body.setAttribute('data-theme-name', theme);

    // Change the content of the header to match the selected theme
    document.getElementById("theme-name").innerHTML = titleCase(theme);
  }
  // Save the theme choice to localStorage
  localStorage.setItem("theme", theme);
  loadTheme();
};

// Check if a theme choice is saved in localStorage
const savedTheme = localStorage.getItem("theme");

// If a saved theme exists, load it; otherwise, do nothing
(savedTheme) && changeTheme(savedTheme);

document.getElementById("alien").addEventListener("click", () => changeTheme("alien"));
document.getElementById("close-encounters").addEventListener("click", () => changeTheme("close-encounters"));
document.getElementById("the-fifth-element").addEventListener("click", () => changeTheme("the-fifth-element"));
document.getElementById("back-to-the-future").addEventListener("click", () => changeTheme("back-to-the-future"));
document.getElementById("star-wars-tatooine-jakku").addEventListener("click", () => changeTheme("star-wars-tatooine-jakku"));

document.getElementById("dune").addEventListener("click", () => changeTheme("dune"));
document.getElementById("the-matrix").addEventListener("click", () => changeTheme("the-matrix"));
document.getElementById("blade-runner").addEventListener("click", () => changeTheme("blade-runner"));
document.getElementById("jurassic-park").addEventListener("click", () => changeTheme("jurassic-park"));
document.getElementById("star-wars-death-star").addEventListener("click", () => changeTheme("star-wars-death-star"));

// Add event listener for the "Reset Demo" button if needed
document.getElementById('reset-demo').addEventListener("click", () => {
  //   Reset the theme to the default theme
  console.log("Resetting theme");
  document.getElementById("theme-name").innerHTML = "";
  changeTheme("default");
});

document.addEventListener("DOMContentLoaded", function () {
  loadTheme(); // Load theme on page load

  // Add event listener for window resize
  window.addEventListener("resize", function () {
    loadTheme();
  });
});

// Function to load the appropriate stylesheet based on window width and theme group
function loadTheme() {
  const isDesktop = window.innerWidth >= 768; // Adjust the breakpoint as needed

  // Read theme attributes from the body
  const themeGroup = body.getAttribute("data-theme-group");

  // Construct the filename based on the attributes
  const filename = `./css/topcoat-${isDesktop ? 'desktop' : 'mobile'}-${(themeGroup) ? themeGroup : 'light'}.css`;

  // Load the stylesheet
  loadStylesheet(filename);
}

// Function to load the appropriate stylesheet
function loadStylesheet(stylesheet) {
  document.getElementById("topcoat-stylesheet").setAttribute("href", stylesheet);
}
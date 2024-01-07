// function to get the user's preferred color scheme
const getPreferredColorScheme = () => {
  // get the user's preferred color scheme from the browser
  // return the value of the user's preferred color scheme or null if no preference is set
}

// function to get the currently saved theme
const getSavedTheme = () => {
  // access local storage and get the value of theme
  // return the value of theme or null if no theme is saved  
}

// function to change the selected theme to match the saved theme
const changeDisplayedTheme = () => {
  const savedTheme = getSavedTheme();
  // if no saved theme, return
  if (!savedTheme) return;
  const radioButtons = document.querySelectorAll('input[type="radio"]');
  radioButtons.find((radioButton) => radioButton.value === savedTheme).setAttribute("checked", "true");
  
  // check the radio button with the value of html[data-theme]
}

// function to 
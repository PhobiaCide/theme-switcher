function changeTheme(theme) {
    // remove all theme classes from body
    document.body.className = ``;
    // add class for selected theme
    document.body.classList.add(`theme-${theme}`);
    //
    document.getElementById("header").innerHTML = titleCase(theme);
  }

  function titleCase(str) {
    return str
      .toLowerCase()
      .split("-")
      .map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(" ");
  }
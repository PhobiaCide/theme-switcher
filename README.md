# 🎨 Theme Switcher

> The Theme Switcher is a 🛠 tool that allows users to easily switch between different visual themes on a website🕶. It provides a selection of predefined CSS variables, which users can choose from and apply to customize the appearance of the website.

[![Language Count][language-count-shield]][language-count-url]
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]

## Features ✨

- Seamlessly switch between multiple visual themes on a website.
- Customize the appearance by selecting predefined CSS variables.
- Instantly apply theme changes for immediate visual feedback.
- Easy integration into any website using JavaScript.

### Screenshot 📸

![Screenshot][product-screenshot] [^1]

[^1]: Screenshot of the demo project in the default theme(colorless)

<p align="right"><a href="#-theme-switcher">🔗back to top</a></p>

---

## Installation 💻

The Theme Switcher runs directly in the browser🖥, eliminating the need for any installation process. Users can access and utilize it by simply visiting the demo website below.

<p align="right"><a href="#-theme-switcher">🔗back to top</a></p>

---

## Usage example 🚀

### Live Demo ▶

To see the Theme Switcher in action, click [here][demo-url]. [^2]

[^2]: 🌐 Hosted by Github Pages

<p align="right"><a href="#-theme-switcher">🔗back to top</a></p>

---

## Development Prerequisites 🔰

To develop with the Theme Switcher, a basic understanding of HTML, CSS, and JavaScript is required.

<p align="right"><a href="#-theme-switcher">🔗back to top</a></p>

---

## File Structure 📁

```bash
theme-switcher/
└── images/
│   ├── README.md
│   └── screenshot.png
├── index.html
├── LICENSE.md
├── package.json
├── README.md
├── script.js
└── style.css
```

### File Overview

| File Name    | Description                               |
|--------------|-------------------------------------------|
| `index.html` | The main HTML file that represents the webpage structure and content. It includes the title, theme switcher buttons, and a container for displaying the selected theme. |
| `style.css`  | The CSS file that defines the styling rules for the webpage. It includes styles for various elements, such as the container, headings, buttons, and table. It also defines different CSS variables for each theme, allowing dynamic theme switching. |
| `script.js`  | The JavaScript file that contains the `changeTheme` function and the `titleCase` helper function. The `changeTheme` function is called when a theme button is clicked and updates the theme of the webpage by adding/removing CSS classes on the `body` element. The `titleCase` function converts a string to title case by capitalizing the first letter of each word. |

### File Details

#### index.html

Integrates the theme switcher functionality into the HTML structure. When a theme button is clicked, it calls the `changeTheme` function with the corresponding theme name as the argument.

Here's the code:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="X-UA-Compatible" content="ie=edge" />
  <title>Sci-Fi Theme Switcher</title>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;700&amp;display=swap" />
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="container">
    <h1 id="header">Theme Switcher</h1>
    <p>
      This is a prototype as well as a proof of concept to be used as a
      feature in future projects.
    </p>
    <p>Select a theme from the choices below for a demo.</p>
    <hr />
    <table>
      <tr>
        <td>
          <h2>Light</h2>
          <table>
            <tbody>
              <tr>
                <td>
                  <button onclick="changeTheme('alien')">Xeno</button>
                </td>
              </tr>
              <tr>
                <td>
                  <button onclick="changeTheme('back-to-the-future')">
                    McFly
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  <button onclick="changeTheme('star-wars-tatooine-jakku')">
                    Light&nbsp;Side
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  <button onclick="changeTheme('the-fifth-element')">
                    Multi-Pass
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  <button onclick="changeTheme('close-encounters-of-the-third-kind')">
                    Close&nbsp;Encounters
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </td>
        <td>
          <h2>Dark</h2>
          <table>
            <tbody>
              <tr>
                <td>
                  <button onclick="changeTheme('blade-runner')">
                    Blade&nbsp;Runner
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  <button onclick="changeTheme('jurassic-park')">
                    Dino&nbsp;DNA
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  <button onclick="changeTheme('star-wars')">
                    Dark&nbsp;Side
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  <button onclick="changeTheme('the-matrix')">
                    The&nbsp;One
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  <button onclick="changeTheme('dune')">Spice</button>
                </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    </table>
  </div>
  <script src="script.js"></script>
</body>
</html>
```

#### script.js

Here's the code:

```javascript
function changeTheme(theme) {
  // remove all theme classes from body
  document.body.className = ``;
  // add class for selected theme
  document.body.classList.add(`theme-${theme}`);
  // update header text
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
```

Contains the JavaScript code for the theme switcher functionality.

The `changeTheme` function is called when a theme button is clicked. It takes a `theme` parameter and performs the following actions:
1. Removes all existing theme classes from the `body` element.
2. Adds the appropriate theme class based on the selected theme.
3. Updates the header text to display the selected theme name in title case.

The `titleCase` function is a helper function used to convert the theme name from kebab-case to title case. It splits the string by hyphens, capitalizes the first letter of each word, and then joins them back together.

#### style.css

Here's the code:

```css
/* just some standard style resets */
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  background-color: var(--bg-color);
  color: var(--font-color);
  overflow: hidden;
  font: 500 2.5vh / 1.5 Ubuntu, sans-serif;
}

body 
{
  /* Colorless default theme */
  background-color: var(--color-primary);
  --color-primary: #eee;
  color: var(--font-color);
  --color-secondary: #555;
  --color-accent: #aaa;
}
.theme-dune 
{
  --color: #ddd;
  --bg-color: #666;
  --color-primary: #de8735;
  --font-color: #a11225;
  --color-secondary: #f4c16e;
  --color-accent: #b5a492;
}
.theme-jurassic-park 
{
  --color: #ddd;
  --bg-color: #666;
  --color-primary: #4b4921;
  --font-color: #f01c1f;
  --color-secondary: #2a8a56;
  --color-accent: #66d848;
}
.theme-back-to-the-future 
{
  --color: #111;
  --bg-color: #eee;
  --color-primary: #e02411;
  --font-color: #1e4ea0;
  --color-secondary: #ffa913;
  --color-accent: #569ced;
}
.theme-close-encounters
{
  --color: #111;
  --bg-color: #eee;
  --hover-brightness: (1.12);
  --color-primary: #84caec;
  --font-color: #fcec86;
  --color-secondary: #efb7dc;
  --color-accent: #ff9969;
}
.theme-star-wars-tatooine-jakku 
{
  --color: #111;
  --bg-color: #eee;
  --color-primary: #dba05c;
  --font-color: #9995bc;
  --color-secondary: #e9cca4;
  --color-accent: #8eafd8;
}
.theme-alien 
{
  --color: #111;
  --bg-color: #eee;
  --color-primary: #d2ff06;
  --font-color: #042a05;
  --color-secondary: #15aa5c;
  --color-accent: #258073;
}
.theme-star-wars 
{
  --color: #ddd;
  --bg-color: #666;
  --color-primary: #27343a;
  --font-color: #f02;
  --color-secondary: #9ea5a8;
  --color-accent: #ff6800;
}
.theme-blade-runner 
{
  --color: #ddd;
  --bg-color: #666;
  --color-primary: #d88f00;
  --font-color: #812a89;
  --color-secondary: #efca93;
  --color-accent: #ff6cdc;
}
.theme-the-matrix 
{
  --color: #ddd;
  --bg-color: #666;
  --color-primary: #031624;
  --font-color: #30ffa4;
  --color-secondary: #044b4a;
  --color-accent: #5fbe92;
}
.theme-the-fifth-element 
{
  --color: #111;
  --bg-color: #eee;
  --color-primary: #f3f1ed;
  --font-color: #0b190c;
  --color-secondary: #fffd6e;
  --color-accent: #ff6100;
}
a 
{
  color: var(--color-secondary);
}
label 
{
  cursor: pointer;
}
html,
body 
{
  height: 100%;
  width: 100%;
}
.container 
{
  border-style: solid;
  border-color: var(--color-accent);
  border-width: 0 1vw;
  position: relative;
  color: var(--color);
  background-color: var(--bg-color);
  width: 88vw;
  margin-left: 6vw;
  margin-right: 6vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
}
h1,
h2 
{
  color: var(--font-color);
  padding: 1vh;
  text-align: center;
  font-weight: 900;
  text-shadow: 1px 0px 0px black, 1px 1px 0px black, 0px 1px 0px black,
    -1px 1px 0px black, -1px 0px 0px black, -1px -1px 0px black,
    0px -1px 0px black, 1px -1px 0px black, 4px 4px 4px var(--color-primary);
}
h2 
{
  font-size: 4vh;
}
h1 
{
  font-size: 5vh;
  height: 15vh;
}
table 
{
  margin: auto;
  text-align: center;
  padding: 0.6vw;
}
hr 
{
  margin-top: 1vh;
  margin-bottom: 5vh;
  background-image: linear-gradient(
    90deg,
    rgba(0, 0, 0, 0) 0%,
    var(--color-primary) 10%,
    var(--color-accent) 50%,
    var(--color-primary) 90%,
    rgba(0, 0, 0, 0) 100%
  );
  width: 1vw;
  height: 1px;
  border: 2px outset var(--color-accent);
  border-radius: 100%;
  filter: blur(0px);
  outline-width: 2px;
  outline-style: outset;
  outline-color: var(--color-secondary);
  transform: scale(40, 1);
}
button 
{
  font-weight: 700;
  color: var(--font-color);
  margin: 2px;
  background-color: var(--color-secondary);
  font-size: 2.6vh;
  max-width: 100%;
  text-shadow: 1px 1px 0 var(--color-accent);
  padding: 0.6vh 1.2vw;
  border: 4px outset var(--color-secondary);
  border-radius: 30px;
  outline-style: solid;
  outline-width: 1px;
  outline-color: var(--color-secondary);
}
button:hover 
{
  transform: translateY(-1px);
  outline-color: var(--color-accent);
  outline-width: 1px;
  animation-duration: 500ms;
  transition: ease-in-out;
}
```

Contains the CSS styling for the theme switcher.

The CSS file defines CSS variables to customize the theme colors. The default theme is defined under the `body` selector, and there are individual selectors for each theme, such as `.theme-dune`, `.theme-jurassic-park`, etc. You can define the theme colors and additional styles under the respective theme selectors.

##### Make sure that all the files (`index.html`, `style.css` and `script.js`) are in the same directory for the webpage to work properly.

<p align="right"><a href="#-theme-switcher">🔗back to top</a></p>

---

## Contributing 👥

Contributions to the Theme Switcher project are welcome! To contribute, follow the steps below:

1. **Fork** the **repository** by **clicking** the **"Fork"** button on the top-right corner of this page.

   This will create a copy of the repository under your GitHub account.

2. **Clone** your **forked repository** to your local machine. Open a terminal or command prompt and run the following command:

   ```bash
   git clone https://github.com/YourUsername/theme-switcher.git
   ```

   Replace `YourUsername` with your GitHub username.

3. **Create a new branch** for your feature or bug fix:

   ```bash
   git checkout -b feature/your-feature-name
   ```

   Choose a meaningful branch name that describes the purpose of your changes.

4. Make the necessary changes to the codebase using your preferred editor or IDE.

5. **Stage** and **commit** your changes.
   You can use the following commands:

   ```bash
   git add .
   git commit -m "Add your

 commit message here"
   ```

   Replace "Add your commit message here" with a concise and descriptive commit message explaining your changes.

7. **Push** your changes to your forked repository:

   ```bash
   git push origin your-branch-name
   ```

   Replace `your-branch-name` with the name of the branch you created earlier.

8. Visit the original repository on GitHub at `https://github.com/PhobiaCide/theme-switcher`.

9. Once there, you should see a notification suggesting to create a new pull request.

   Click on the "Compare & pull request" button to open a new pull request.

10. Provide a descriptive title and detailed description for your pull request, explaining the purpose of your changes.

11. **Click** the "*Create pull request*" **button** to *submit* your contribution.

12. **Your** pull request will be *reviewed* by the project maintainers.

    They may provide feedback or request further changes.

13. Once your changes are **approved**, they will be **merged** into the main repository.

**Thank you** for contributing to the Theme Switcher project! We appreciate your support and effort in making this project better.

<p align="right"><a href="#-theme-switcher">🔗back to top</a></p>

---

## Meta 📝

&copy; 2023 [PhobiaCide][github-profile]

Distributed under the MIT license. See [LICENSE][license-url] for more information.

<p align="right"><a href="#-theme-switcher">🔗back to top</a></p>

---

<!-- MARKDOWN LINKS & IMAGES -->
[github-profile]: https://github.com/PhobiaCide
[demo-url]: https://phobiacide.github.io/theme-switcher/
[language-count-shield]: https://img.shields.io/github/languages/count/PhobiaCide/theme-switcher?style=for-the-badge
[language-count-url]: https://img.shields.io/github/languages/count/PhobiaCide/theme-switcher
[contributors-shield]: https://img.shields.io/github/contributors/PhobiaCide/theme-switcher?style=for-the-badge
[contributors-url]: https://github.com/PhobiaCide/theme-switcher
[forks-shield]: https://img.shields.io/github/forks/PhobiaCide/theme-switcher?style=for-the-badge
[forks-url]: https://github.com/PhobiaCide/theme-switcher
[stars-shield]: https://img.shields.io/github/stars/PhobiaCide/theme-switcher?style=for-the-badge
[stars-url]: https://github.com/PhobiaCide/theme-switcher/stargazers
[issues-shield]: https://img.shields.io/github/issues/PhobiaCide/theme-switcher?style=for-the-badge
[issues-url]: https://github.com/PhobiaCide/theme-switcher/issues
[license-shield]: https://img.shields.io/github/license/PhobiaCide/theme-switcher?style=for-the-badge
[license-url]: https://github.com/PhobiaCide/theme-switcher/LICENSE.md
[product-screenshot]: images/theme-switcher.gif

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
/** 
 * Function to load the appropriate stylesheet based on window width and theme group
 */
function donTopcoat() {
  const isDark = (theme) => (theme === 'dark');
  // Read theme attributes from the body
  const theme = documentElement.getAttribute("data-bs-theme");
  // Construct the filename based on the attributes
  const href = `./src/css/topcoat/${isDesktop ? 'desktop' : 'mobile'}/${isDark(theme) ? 'dark' : 'light'}.css`;
  const topcoat = document.getElementById("topcoat-stylesheet")
  topcoat.setAttribute("href", href);
}

document.addEventListener("DOMContentLoaded", () => {
  donTopcoat(); // Load theme on page load

  // Add event listener for window resize
  window.addEventListener("resize", () => {
    donTopcoat();
  });
});
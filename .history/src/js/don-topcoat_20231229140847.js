/** 
 * Function to load the appropriate stylesheet based on window width and theme group
 */
function donTopcoat() {
  const { documentElement } = document;
  const widthBreakpoint = 768;
  const isDesktop = () => window.innerWidth >= widthBreakpoint;
  const mode = documentElement.getAttribute("data-bs-theme");
  const isDark = () => (mode >= 5);
  // Read theme attributes from the body
  
  // Construct the filename based on the attributes
  const href = `./src/css/topcoat/${isDesktop() ? 'desktop' : 'mobile'}/${isDark() ? 'dark' : 'light'}.css`;
  const topcoat = document.getElementById("topcoat-stylesheet");
  topcoat.setAttribute("href", href);
}

document.addEventListener("DOMContentLoaded", () => {
  donTopcoat(); // Load theme on page load

  // Add event listener for window resize
  window.addEventListener("resize", () => {
    donTopcoat();
  });
});
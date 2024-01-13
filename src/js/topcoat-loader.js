
// Topcoat Functions
const isDesktop = () => window.innerWidth >= widthBreakpoint;
const constructTopcoatHref = () => `https://cdnjs.cloudflare.com/ajax/libs/topcoat/0.8.0/css/topcoat-${isDesktop() ? 'desktop' : 'mobile'}-${getThemeMode()}.min.css`;

const donTopcoat = () => {
  const href = constructTopcoatHref();
  const topcoat = document.getElementById("topcoat-stylesheet");
  topcoat.setAttribute("href", href);
  applyMode(getThemeMode());
};

donTopcoat(); // Load theme on page load

window.addEventListener("resize", () => {
  donTopcoat();
});
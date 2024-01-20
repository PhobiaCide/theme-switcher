
// Topcoat Functions
const isDesktop = () => window.innerWidth >= widthBreakpoint;
const getScreenSize = () => isDesktop() ? 'desktop' : 'mobile';
const baseRef = 'https://cdnjs.cloudflare.com/ajax/libs/topcoat/0.8.0/css/topcoat-';
const constructTopcoatHref = () => `${baseRef}${getScreenSize()}-${getUserThemeMode()}.min.css`;

const donTopcoat = () => {
  const href = constructTopcoatHref();
  const topcoat = document.getElementById("topcoat-stylesheet");
  topcoat.setAttribute("href", href);
  applyMode(getUserThemeMode());
};

window.addEventListener("resize", () => {

  donTopcoat();
});

// Create a MutationObserver instance
const observer = new MutationObserver(() => {
  console.log("Theme changed");
  donTopcoat();
});

// Configure and start the observer
observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-bs-theme'] });

donTopcoat(); // Load theme on page load

// Topcoat Functions
const isDesktop = () => window.innerWidth >= widthBreakpoint;
const determinePath = () => `https://cdnjs.cloudflare.com/ajax/libs/topcoat/0.8.0/css/topcoat-${isDesktop() ? 'desktop' : 'mobile'}-${getThemeMode()}.min.css`;

const donTopcoat = () => {
  const topcoat = document.getElementById("topcoat-stylesheet");
  topcoat.setAttribute("href", determinePath());
  applyMode(getThemeMode());
};

// Select the <html> element
const targetElement = document.documentElement;

// Specify the attribute to observe
const attributeToObserve = 'data-bs-theme';

// Create a MutationObserver instance
const observer = new MutationObserver(donTopcoat);

// Configure and start the observer
const observerConfig = { attributes: true, attributeFilter: [attributeToObserve] };
observer.observe(targetElement, observerConfig);

donTopcoat(); // Load theme on page load

window.addEventListener("resize", () => {
  donTopcoat();
});
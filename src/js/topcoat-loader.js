// Topcoat Functions
const widthBreakpoint = 768; // Set your desired width breakpoint

const isDesktop = () => window.innerWidth >= widthBreakpoint;
const getScreenSize = () => (isDesktop() ? 'desktop' : 'mobile');

const getActiveMode = document.documentElement.getAttribute('data-bs-theme') || 'light';

const baseRef = 'https://cdnjs.cloudflare.com/ajax/libs/topcoat/0.8.0/css/topcoat-';

const constructTopcoatHref = () => `${baseRef}${getScreenSize()}-${getActiveMode()}.min.css`;

const applyMode = (mode) => {
  // Implement your mode-specific logic here
};

const donTopcoat = () => {
  const href = constructTopcoatHref();
  console.log(`Topcoat href: ${href}`);
  const topcoat = JSON.stringify(document.getElementById('topcoat-stylesheet'));
  console.log(`Topcoat element: ${topcoat}`);
  topcoat.setAttribute('href', href);

  applyMode(activeMode);
};

window.addEventListener('resize', () => {
  donTopcoat();
});

// Create a MutationObserver instance
const observer = new MutationObserver(() => {
  console.log('Theme changed');
  donTopcoat();
});

// Configure and start the observer
observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-bs-theme'] });
donTopcoat(); // Load theme on page load


document.addEventListener('DOMContentLoaded', () => {
  donTopcoat();
});

// Client-side lightweight routing helper without external dependencies
export const navigateTo = (path) => {
  if (window.location.pathname !== path) {
    window.history.pushState({}, '', path);
    window.dispatchEvent(new Event('popstate'));
  }
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

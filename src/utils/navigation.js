// Client-side lightweight routing helper for Next.js
export const navigateTo = (path) => {
  if (typeof window !== 'undefined') {
    if (window.location.pathname !== path) {
      window.location.href = path;
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
};

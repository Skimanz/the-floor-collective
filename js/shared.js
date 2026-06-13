/* shared.js — The Flooring Collective v7
   Note: Nav is self-contained inline in each HTML file.
   This file handles only: fade-up scroll animations. */

document.addEventListener('DOMContentLoaded', function () {
  // Fade-up on scroll — used across all pages
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // stop watching once visible
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-up').forEach(function(el) {
      observer.observe(el);
    });
  } else {
    // Fallback for browsers without IntersectionObserver
    document.querySelectorAll('.fade-up').forEach(function(el) {
      el.classList.add('visible');
    });
  }
});

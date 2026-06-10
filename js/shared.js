/* shared.js — The Floor Collective */

/* Mobile menu toggle with outside-click close */
function toggleMenu() {
  const menu = document.getElementById('mobileMenu');
  const backdrop = document.getElementById('menuBackdrop');
  const isOpen = menu.classList.toggle('open');
  if (backdrop) backdrop.classList.toggle('open', isOpen);
}

document.addEventListener('DOMContentLoaded', function () {

  /* Close menu on outside click */
  const backdrop = document.getElementById('menuBackdrop');
  if (backdrop) {
    backdrop.addEventListener('click', function () {
      document.getElementById('mobileMenu').classList.remove('open');
      backdrop.classList.remove('open');
    });
  }

  /* Close menu on nav link click (mobile) */
  document.querySelectorAll('.mobile-menu a').forEach(a => {
    a.addEventListener('click', () => {
      document.getElementById('mobileMenu').classList.remove('open');
      if (backdrop) backdrop.classList.remove('open');
    });
  });

  /* Fade-up on scroll */
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) e.target.classList.add('visible');
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

  /* Active nav highlight (scroll-based, index only) */
  const sections = document.querySelectorAll('section[id]');
  if (sections.length) {
    window.addEventListener('scroll', () => {
      let cur = '';
      sections.forEach(s => { if (window.scrollY >= s.offsetTop - 80) cur = s.id; });
      document.querySelectorAll('.nav-links a').forEach(a => {
        a.classList.toggle('active', a.getAttribute('href') === '#' + cur);
      });
    }, { passive: true });
  }

});

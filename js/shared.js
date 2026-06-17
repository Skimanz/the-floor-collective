/* shared.js — The Flooring Collective v8
   Note: Nav is self-contained inline in each HTML file.
   This file handles: fade-up scroll animations + quote modal + quote form submit. */

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

  // Quote modal form submit — only runs if the modal/form exist on this page
  var quoteForm = document.getElementById('quoteForm');
  if (quoteForm) {
    quoteForm.addEventListener('submit', async function(e) {
      e.preventDefault();
      var btn = this.querySelector('button[type=submit]');
      btn.textContent = 'Sending…';
      btn.disabled = true;
      try {
        var r = await fetch(this.action, { method: 'POST', body: new FormData(this), headers: { 'Accept': 'application/json' } });
        if (r.ok) {
          this.style.display = 'none';
          document.getElementById('quoteSuccess').style.display = 'block';
        } else {
          btn.textContent = 'Send quote request →';
          btn.disabled = false;
        }
      } catch (err) {
        btn.textContent = 'Send quote request →';
        btn.disabled = false;
      }
    });
  }

  var modal = document.getElementById('quoteModal');
  if (modal) {
    modal.addEventListener('click', function(e) {
      if (e.target === this) closeQuoteModal();
    });
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') closeQuoteModal();
    });
  }
});

function openQuoteModal() {
  var m = document.getElementById('quoteModal');
  if (!m) return;
  m.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeQuoteModal() {
  var m = document.getElementById('quoteModal');
  if (!m) return;
  m.classList.remove('open');
  document.body.style.overflow = '';
}

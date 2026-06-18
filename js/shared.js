// THE FLOORING COLLECTIVE — SHARED JS

function toggleNav(){
  var m = document.getElementById('mobileNav');
  if(!m) return;
  m.classList.toggle('open');
}

function openQuoteModal(){
  var m = document.getElementById('quoteModal');
  if(!m) return;
  m.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeQuoteModal(){
  var m = document.getElementById('quoteModal');
  if(!m) return;
  m.classList.remove('open');
  document.body.style.overflow = '';
}

document.addEventListener('keydown', function(e){
  if(e.key === 'Escape') closeQuoteModal();
});

async function handleQuoteSubmit(e){
  e.preventDefault();
  var form = e.target;
  var data = new FormData(form);
  var btn = form.querySelector('.modal-submit');
  var success = document.getElementById('modalSuccess');
  try{
    var r = await fetch(form.action, { method:'POST', body:data, headers:{'Accept':'application/json'} });
    if(r.ok){
      form.style.display = 'none';
      if(success) success.style.display = 'block';
    } else {
      alert('Something went wrong. Please email or WhatsApp us directly.');
    }
  } catch(err){
    alert('Something went wrong. Please email or WhatsApp us directly.');
  }
}

// Fade-up on scroll
(function(){
  if(!('IntersectionObserver' in window)) {
    document.querySelectorAll('.fade-up').forEach(function(el){ el.classList.add('visible'); });
    return;
  }
  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      if(entry.isIntersecting){
        entry.target.classList.add('visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  document.addEventListener('DOMContentLoaded', function(){
    document.querySelectorAll('.fade-up').forEach(function(el){ io.observe(el); });
  });
})();

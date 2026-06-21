// Mobile menu
var body = document.querySelector('body');
var menuTrigger = document.querySelector('#toggle-main-menu-mobile');
var menuContainer = document.querySelector('#main-menu-mobile');

if (menuTrigger && menuContainer) {
  menuTrigger.onclick = function() {
    menuContainer.classList.toggle('open');
    menuTrigger.classList.toggle('is-active');
    body.classList.toggle('lock-scroll');
  };
}

// Testimonial carousel
document.addEventListener('DOMContentLoaded', function() {
  var track = document.querySelector('.testimonial-track');
  if (!track) return;

  var slides = track.querySelectorAll('.testimonial-slide');
  var dots = document.querySelectorAll('.testimonial-dot');
  var prev = document.querySelector('.testimonial-prev');
  var next = document.querySelector('.testimonial-next');
  var current = 0;

  function goTo(index) {
    current = (index + slides.length) % slides.length;
    track.style.transform = 'translateX(-' + (current * 100) + '%)';
    dots.forEach(function(d, i) {
      d.classList.toggle('active', i === current);
    });
  }

  if (prev) prev.addEventListener('click', function() { goTo(current - 1); });
  if (next) next.addEventListener('click', function() { goTo(current + 1); });
  dots.forEach(function(dot, i) {
    dot.addEventListener('click', function() { goTo(i); });
  });

  // Auto-advance every 6 seconds
  setInterval(function() { goTo(current + 1); }, 6000);
});

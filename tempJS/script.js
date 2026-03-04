// Select all elements that should animate
const animatedElements = document.querySelectorAll('.fade-up');

// Add animation after page loads
window.addEventListener('load', () => {
  animatedElements.forEach(el => {
    el.classList.add('show');
  });
});



const btn = document.querySelector('.btn');

// Toggle the "flipped" class when the btn element is clicked on mobile devices
btn.addEventListener('click', () => {
  if (window.innerWidth < 800) {
    btn.classList.toggle('flipped');
  }
});

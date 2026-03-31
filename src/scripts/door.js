const doorContainer = document.getElementById('door-container');
const introSeen = sessionStorage.getItem('introSeen');

// If the user has already seen the intro, hide the doors immediately.
if (introSeen) {
  doorContainer.style.display = 'none';
} else {
  // Otherwise, add the loading class to trigger the animation.
  document.body.classList.add('loading');

  function openDoors() {
    if (document.body.classList.contains('loading')) {
      document.body.classList.remove('loading');
      // Set the flag in sessionStorage so it doesn't run again.
      sessionStorage.setItem('introSeen', 'true');
    }
  }

  doorContainer.addEventListener('click', openDoors, { once: true });
}

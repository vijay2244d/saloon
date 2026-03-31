document.addEventListener('astro:page-load', () => {
  const container = document.querySelector('.hair-fall-container');
  if (container) {
    setTimeout(() => {
      if (document.body.contains(container)) {
        container.remove();
      }
    }, 7000); // Remove after 7 seconds
  }
});

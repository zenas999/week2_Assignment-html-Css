document.querySelectorAll('.feature').forEach(feature => {
  feature.addEventListener('mouseenter', () => {
    feature.style.transform = 'scale(1.05)';
  });

  feature.addEventListener('mouseleave', () => {
    feature.style.transform = 'scale(1)';
  });
});

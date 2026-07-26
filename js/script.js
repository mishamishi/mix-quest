function showLabel(slot) {
  const label = slot.querySelector('.drink-label');

  if (label.classList.contains('visible')) {
    label.classList.remove('visible');
    clearTimeout(label.hideTimer);
    return;
  }

  // esconder 
  document.querySelectorAll('.drink-label.visible').forEach(l => {
    l.classList.remove('visible');
    clearTimeout(l.hideTimer);
  });

  label.textContent = slot.dataset.name;
  label.classList.add('visible');

  // se oculta  después de 2 segundos
  label.hideTimer = setTimeout(() => {
    label.classList.remove('visible');
  }, 1000);
}
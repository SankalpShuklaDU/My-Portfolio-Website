
document.querySelectorAll('.skill-header').forEach(header => {
  header.addEventListener('click', () => {
    const content = header.nextElementSibling;
    const icon = header.querySelector('.toggle-icon');

    content.style.display = content.style.display === 'block' ? 'none' : 'block';
    icon.textContent = icon.textContent === '+' ? '−' : '+';
  });
});
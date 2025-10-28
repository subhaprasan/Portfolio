// Dark / Light Theme Toggle
const themeBtn = document.getElementById('theme-toggle');
themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  if (document.body.classList.contains('dark')) {
    themeBtn.textContent = '☀️ Light';
  } else {
    themeBtn.textContent = '🌙 Dark';
  }
});

// Color Palette Switch
const colorButtons = document.querySelectorAll('.color-btn');
colorButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const newColor = btn.getAttribute('data-color');
    document.documentElement.style.setProperty('--primary-color', newColor);
  });
});

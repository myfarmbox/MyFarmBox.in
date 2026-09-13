document.getElementById('year').textContent = new Date().getFullYear();
document.querySelector('[data-notify]').addEventListener('click', () => document.getElementById('message').hidden = false);

const form = document.getElementById('bookingForm');
const success = document.getElementById('success');

form.addEventListener('submit', e => {
  e.preventDefault();

  // Здесь можно подключить:
  // fetch / Formspree / Telegram Bot / EmailJS

  success.classList.remove('hidden');
  form.reset();

  setTimeout(() => {
    success.classList.add('hidden');
  }, 4000);
});

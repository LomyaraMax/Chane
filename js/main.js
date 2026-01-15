const form = document.getElementById('bookingForm');
const success = document.getElementById('success');

form.addEventListener('submit', e => {
  e.preventDefault();

  success.classList.remove('hidden');
  form.reset();

  setTimeout(() => {
    success.classList.add('hidden');
  }, 5000);
});

const track = document.querySelector('.carousel-track');
const slides = document.querySelectorAll('.slide');
const form = document.getElementById('form');
const success = document.getElementById('success');

let index = 0;
let startX = 0;

/* Автокарусель */
setInterval(() => {
  index = (index + 1) % slides.length;
  update();
}, 5000);

function update() {
  track.style.transform = `translateX(-${index * 100}%)`;
}

/* Свайп */
track.addEventListener('touchstart', e => {
  startX = e.touches[0].clientX;
});

track.addEventListener('touchend', e => {
  const diff = e.changedTouches[0].clientX - startX;
  if (diff > 50 && index > 0) index--;
  if (diff < -50 && index < slides.length - 1) index++;
  update();
});

/* Форма */
form.addEventListener('submit', e => {
  e.preventDefault();
  success.classList.remove('hidden');
  form.reset();
  setTimeout(() => success.classList.add('hidden'), 4000);
});

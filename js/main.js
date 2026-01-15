const track = document.querySelector('.slider-track');
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const viewer = document.getElementById('viewer');
const viewerImg = document.querySelector('.viewer-img');

let index = 0;
let startX = 0;
let auto;

/* Обновление */
function updateSlider() {
  track.style.transform = `translateX(-${index * 100}%)`;
  dots.forEach(d => d.classList.remove('active'));
  dots[index].classList.add('active');
}

/* Авто */
function startAuto() {
  auto = setInterval(() => {
    index = (index + 1) % slides.length;
    updateSlider();
  }, 5000);
}

startAuto();

/* Свайп */
track.addEventListener('touchstart', e => {
  clearInterval(auto);
  startX = e.touches[0].clientX;
});

track.addEventListener('touchend', e => {
  const diff = e.changedTouches[0].clientX - startX;
  if (diff > 50 && index > 0) index--;
  if (diff < -50 && index < slides.length - 1) index++;
  updateSlider();
  startAuto();
});

/* Клик */
slides.forEach(slide => {
  slide.addEventListener('click', () => {
    viewerImg.style.background = getComputedStyle(slide).background;
    viewer.classList.remove('hidden');
  });
});

viewer.addEventListener('click', () => {
  viewer.classList.add('hidden');
});

/* Form */
const form = document.getElementById('form');
const success = document.getElementById('success');

form.addEventListener('submit', e => {
  e.preventDefault();
  success.classList.remove('hidden');
  form.reset();
  setTimeout(() => success.classList.add('hidden'), 4000);
});

const track = document.querySelector('.carousel-track');
let index = 0;

setInterval(() => {
  index = (index + 1) % 3;
  track.style.transform = `translateX(-${index * 100}%)`;
}, 4000);

// JavaScript para la interactividad del sitio web

let currentIndex = 0;
const images = document.getElementById("carouselImages");
const totalSlides = images.children.length;

function showSlide(index) {
  if (index >= totalSlides) currentIndex = 0;
  else if (index < 0) currentIndex = totalSlides - 1;
  else currentIndex = index;

  const offset = -currentIndex * 100;
  images.style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
  showSlide(currentIndex + 1);
}

function prevSlide() {
  showSlide(currentIndex - 1);
}

// Opcional: auto-slide cada 5 segundos
setInterval(() => {
  nextSlide();
}, 5000);

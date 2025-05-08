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




// Carrusel "carouselProductos"
let currentProductIndex = 0;
const carouselProductos = document.getElementById("carouselProductos");
const productSlides = carouselProductos.querySelectorAll(".carousel-item");
const totalProductSlides = productSlides.length;

function showProductSlide(index) {
  if (index >= totalProductSlides) currentProductIndex = 0;
  else if (index < 0) currentProductIndex = totalProductSlides - 1;
  else currentProductIndex = index;

  // Remover la clase "active" de todas las diapositivas
  productSlides.forEach((slide) => slide.classList.remove("active"));

  // Agregar la clase "active" a la diapositiva actual
  productSlides[currentProductIndex].classList.add("active");
}

function nextProductSlide() {
  showProductSlide(currentProductIndex + 1);
}

function prevProductSlide() {
  showProductSlide(currentProductIndex - 1);
}

// Configurar los botones de navegación para "carouselProductos"
const nextProductButton = carouselProductos.querySelector(".carousel-control-next");
const prevProductButton = carouselProductos.querySelector(".carousel-control-prev");

nextProductButton.addEventListener("click", (e) => {
  e.preventDefault();
  nextProductSlide();
});

prevProductButton.addEventListener("click", (e) => {
  e.preventDefault();
  prevProductSlide();
});

// Auto-slide cada 5 segundos para "carouselProductos"
setInterval(() => {
  nextProductSlide();
}, 5000);


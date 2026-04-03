let currentImage = 0;
const totalImages = document.querySelectorAll(".app-screenshot").length;

function nextImage() {
  currentImage = (currentImage + 1) % totalImages;
  updateCarousel();
}

function previousImage() {
  currentImage = (currentImage - 1 + totalImages) % totalImages;
  updateCarousel();
}

function updateCarousel() {
  const translate = -currentImage * 312;
  document.documentElement.style.setProperty("--translate-x", `${translate}px`);
}

updateCarousel();

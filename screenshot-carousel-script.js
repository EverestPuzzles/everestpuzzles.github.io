let currentImage = 0;
const totalImages = 8;

function nextImage() {
  currentImage = (currentImage + 1) % totalImages;
  updateCarousel();
}

function previousImage() {
  currentImage = (currentImage - 1 + totalImages) % totalImages;
  updateCarousel();
}

function updateCarousel() {
  const translate = -currentImage * 12.35;
  document.documentElement.style.setProperty("--translate-x", `${translate}%`);
}

updateCarousel();

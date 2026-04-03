let currentImage = 0;
const screenshots = document.querySelectorAll(".app-screenshot");
const totalImages = screenshots.length;
const dotsContainer = document.querySelector(".carousel-dots");

// 1. Create dots
for (let i = 0; i < totalImages; i++) {
  const dot = document.createElement("div");
  dot.classList.add("carousel-dot");
  dot.addEventListener("click", () => {
    currentImage = i;
    updateCarousel();
  });
  dotsContainer.appendChild(dot);
}

const dots = dotsContainer.querySelectorAll(".carousel-dot");

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
  // 2. Update active dot
  dots.forEach((dot, idx) => {
    dot.classList.toggle("active", idx === currentImage);
  });
}

updateCarousel();

let currentImage = 0;
const screenshots = document.querySelectorAll(".app-screenshot");
const totalImages = screenshots.length;
const dotsContainer = document.querySelector(".carousel-dots");

// --- IMAGE CAROUSEL ---
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

// --- BACK TO TOP BUTTON ---

const btn = document.querySelector(".back-to-top");

let target = 0;
let current = 0;
let ticking = false;

// SHOW / HIDE BUTTON
window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;

  if (scrollY > 300) {
    btn.classList.add("show");
  } else {
    btn.classList.remove("show");
  }

  if (!ticking) {
    requestAnimationFrame(() => {
      const height = document.documentElement.scrollHeight - window.innerHeight;

      target = Math.min((scrollY / height) * 360, 359.9);

      ticking = false;
    });

    ticking = true;
  }
});

// SMOOTH ANIMATION LOOP
function animate() {
  current += (target - current) * 0.12;

  // hard clamp near full circle
  if (target >= 359.5) {
    current = 360;
    target = 360;
  }

  btn.style.setProperty("--progress", `${current}deg`);

  requestAnimationFrame(animate);
}

animate();

// SCROLL TO TOP
btn.addEventListener("click", () => {
  target = 0;

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

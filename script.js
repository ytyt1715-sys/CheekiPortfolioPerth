document.getElementById("year").textContent = new Date().getFullYear();

const gallery = document.getElementById("gallery");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.getElementById("lightbox-close");
const prevBtn = document.getElementById("lightbox-prev");
const nextBtn = document.getElementById("lightbox-next");

let currentIndex = 0;

PHOTOS.forEach((src, i) => {
  const fig = document.createElement("figure");
  fig.className = "photo";

  const img = document.createElement("img");
  img.src = src;
  img.loading = "lazy";
  img.alt = `Portfolio photo ${i + 1}`;

  fig.appendChild(img);
  fig.addEventListener("click", () => openLightbox(i));
  gallery.appendChild(fig);
});

function openLightbox(index) {
  currentIndex = index;
  lightboxImg.src = PHOTOS[currentIndex];
  lightbox.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  lightbox.classList.remove("open");
  document.body.style.overflow = "";
}

function showNext() {
  currentIndex = (currentIndex + 1) % PHOTOS.length;
  lightboxImg.src = PHOTOS[currentIndex];
}

function showPrev() {
  currentIndex = (currentIndex - 1 + PHOTOS.length) % PHOTOS.length;
  lightboxImg.src = PHOTOS[currentIndex];
}

closeBtn.addEventListener("click", closeLightbox);
nextBtn.addEventListener("click", showNext);
prevBtn.addEventListener("click", showPrev);

lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) closeLightbox();
});

document.addEventListener("keydown", (e) => {
  if (!lightbox.classList.contains("open")) return;
  if (e.key === "Escape") closeLightbox();
  if (e.key === "ArrowRight") showNext();
  if (e.key === "ArrowLeft") showPrev();
});

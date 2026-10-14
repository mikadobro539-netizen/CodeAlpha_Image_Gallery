// FRAME — gallery interactions and photo collection
const photos = [
  {
    id: 1, title: "Where the Earth Touches the Sky", location: "Swiss Alps", category: "nature",
    description: "A quiet moment among towering peaks and passing clouds.",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=85",
    full: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2000&q=90", alt: "Dramatic mountain peaks with clouds"
  },
  {
    id: 2, title: "Geometry in the Sun", location: "Copenhagen, Denmark", category: "architecture",
    description: "Clean lines, warm light, and the rhythm of modern architecture.",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1000&q=85",
    full: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=2000&q=90", alt: "Minimal modern white architecture"
  },
  {
    id: 3, title: "Into the Blue", location: "Amalfi Coast, Italy", category: "travel",
    description: "A coastal escape where colourful homes meet the sea.",
    image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1000&q=85",
    full: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=2000&q=90", alt: "Coastal village overlooking blue water"
  },
  {
    id: 4, title: "Little Things, Big Stories", location: "Still life study", category: "details",
    description: "An appreciation of texture, colour, and everyday objects.",
    image: "https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?auto=format&fit=crop&w=1000&q=85",
    full: "https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?auto=format&fit=crop&w=2000&q=90", alt: "Carefully composed still life details"
  },
  {
    id: 5, title: "The Quiet Forest", location: "Pacific Northwest", category: "nature",
    description: "Soft morning light filtering through a deep green forest.",
    image: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1000&q=85",
    full: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=2000&q=90", alt: "Sunlight and mist in a green forest"
  },
  {
    id: 6, title: "City of Contrasts", location: "New York, USA", category: "architecture",
    description: "An urban portrait of structure, scale, and movement.",
    image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=1000&q=85",
    full: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=2000&q=90", alt: "City skyline and urban buildings"
  },
  {
    id: 7, title: "A Road to Somewhere", location: "Highlands", category: "travel",
    description: "The best journeys leave room for the unexpected.",
    image: "https://images.unsplash.com/photo-1464278533981-50106e6176b1?auto=format&fit=crop&w=1000&q=85",
    full: "https://images.unsplash.com/photo-1464278533981-50106e6176b1?auto=format&fit=crop&w=2000&q=90", alt: "Winding road through a mountain landscape"
  },
  {
    id: 8, title: "Golden Hour", location: "Open countryside", category: "nature",
    description: "The final sunlight of the day paints the landscape gold.",
    image: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=1000&q=85",
    full: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=2000&q=90", alt: "Golden sunset over rolling countryside"
  },
  {
    id: 9, title: "Lines of the Everyday", location: "Urban details", category: "details",
    description: "Finding patterns and unexpected beauty in the ordinary.",
    image: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1000&q=85",
    full: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=2000&q=90", alt: "Architectural detail and repeating lines"
  },
  {
    id: 10, title: "A Different Point of View", location: "Coastal cliffs", category: "travel",
    description: "A wide-open horizon that makes the world feel bigger.",
    image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=1000&q=85",
    full: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=2000&q=90", alt: "Ocean waves meeting the shore"
  },
  {
    id: 11, title: "Stillness in Motion", location: "Mountain lake", category: "nature",
    description: "A peaceful reflection in the cool light of early morning.",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1000&q=85",
    full: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=2000&q=90", alt: "Lake reflecting mountains under a soft sky"
  },
  {
    id: 12, title: "The Art of the Detail", location: "Design study", category: "details",
    description: "Small forms and subtle textures worth a second look.",
    image: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&w=1000&q=85",
    full: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&w=2000&q=90", alt: "Minimal interior and thoughtful design detail"
  }
];

const grid = document.querySelector("#gallery-grid");
const filterButtons = [...document.querySelectorAll(".filter-button")];
const searchInput = document.querySelector("#search-input");
const visibleCount = document.querySelector("#visible-count");
const emptyState = document.querySelector("#empty-state");
const resetButton = document.querySelector("#reset-filters");
const viewToggle = document.querySelector("#view-toggle");
const lightbox = document.querySelector("#lightbox");
const lightboxImage = document.querySelector("#lightbox-image");
const lightboxTitle = document.querySelector("#lightbox-title");
const lightboxCategory = document.querySelector("#lightbox-category");
const lightboxDescription = document.querySelector("#lightbox-description");
const lightboxCurrent = document.querySelector("#lightbox-current");
const lightboxTotal = document.querySelector("#lightbox-total");
const closeButton = document.querySelector("#lightbox-close");
const previousButton = document.querySelector("#lightbox-prev");
const nextButton = document.querySelector("#lightbox-next");
const toast = document.querySelector("#toast");

let activeCategory = "all";
let searchTerm = "";
let currentPhotoId = null;
let lastFocusedElement = null;
let toastTimer = null;

const categoryNames = {
  nature: "Nature",
  architecture: "Architecture",
  travel: "Travel",
  details: "Details"
};

function getVisiblePhotos() {
  return photos.filter((photo) => {
    const categoryMatch = activeCategory === "all" || photo.category === activeCategory;
    const searchable = `${photo.title} ${photo.location} ${photo.description} ${categoryNames[photo.category]}`.toLowerCase();
    return categoryMatch && searchable.includes(searchTerm);
  });
}

function renderGallery() {
  const visiblePhotos = getVisiblePhotos();
  grid.innerHTML = visiblePhotos.map((photo, index) => `
    <article class="photo-card" tabindex="0" role="button" aria-label="Open ${escapeHTML(photo.title)}" data-photo-id="${photo.id}" style="animation-delay:${Math.min(index * 35, 280)}ms">
      <div class="photo-image-wrap">
        <img class="photo-image" src="${photo.image}" alt="${escapeHTML(photo.alt)}" loading="lazy" />
        <span class="photo-open" aria-hidden="true">↗</span>
        <span class="photo-number">${String(photo.id).padStart(2, "0")} / ${String(photos.length).padStart(2, "0")}</span>
      </div>
      <div class="photo-meta">
        <div><h3 class="photo-title">${escapeHTML(photo.title)}</h3><p class="photo-location">${escapeHTML(photo.location)}</p></div>
        <span class="photo-category">${categoryNames[photo.category]}</span>
      </div>
    </article>
  `).join("");

  visibleCount.textContent = visiblePhotos.length;
  emptyState.hidden = visiblePhotos.length !== 0;

  grid.querySelectorAll(".photo-card").forEach((card) => {
    const open = () => openLightbox(Number(card.dataset.photoId));
    card.addEventListener("click", open);
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        open();
      }
    });
  });

  // A filtered list may change while the viewer is open, so keep its count in sync.
  if (lightbox.classList.contains("open")) updateLightboxCounter();
}

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[character]);
}

function setCategory(category) {
  activeCategory = category;
  filterButtons.forEach((button) => {
    const selected = button.dataset.filter === category;
    button.classList.toggle("active", selected);
    button.setAttribute("aria-pressed", String(selected));
  });
  renderGallery();
}

function openLightbox(photoId) {
  const photo = photos.find((item) => item.id === photoId);
  if (!photo) return;
  currentPhotoId = photoId;
  lastFocusedElement = document.activeElement;
  lightboxImage.src = photo.full;
  lightboxImage.alt = photo.alt;
  lightboxTitle.textContent = photo.title;
  lightboxCategory.textContent = `${categoryNames[photo.category]} / ${photo.location}`;
  lightboxDescription.textContent = photo.description;
  updateLightboxCounter();
  lightbox.classList.add("open");
  lightbox.setAttribute("aria-hidden", "false");
  document.body.classList.add("lock-scroll");
  closeButton.focus();
}

function updateLightboxCounter() {
  const visiblePhotos = getVisiblePhotos();
  const index = visiblePhotos.findIndex((photo) => photo.id === currentPhotoId);
  lightboxCurrent.textContent = String(index >= 0 ? index + 1 : 1).padStart(2, "0");
  lightboxTotal.textContent = String(visiblePhotos.length).padStart(2, "0");
}

function moveLightbox(direction) {
  const visiblePhotos = getVisiblePhotos();
  if (!visiblePhotos.length) return;
  let index = visiblePhotos.findIndex((photo) => photo.id === currentPhotoId);
  if (index < 0) index = 0;
  index = (index + direction + visiblePhotos.length) % visiblePhotos.length;
  const photo = visiblePhotos[index];
  currentPhotoId = photo.id;
  lightboxImage.src = photo.full;
  lightboxImage.alt = photo.alt;
  lightboxTitle.textContent = photo.title;
  lightboxCategory.textContent = `${categoryNames[photo.category]} / ${photo.location}`;
  lightboxDescription.textContent = photo.description;
  updateLightboxCounter();
}

function closeLightbox() {
  if (!lightbox.classList.contains("open")) return;
  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden", "true");
  document.body.classList.remove("lock-scroll");
  lightboxImage.src = "";
  if (lastFocusedElement && typeof lastFocusedElement.focus === "function") lastFocusedElement.focus();
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => toast.classList.remove("show"), 2200);
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => setCategory(button.dataset.filter));
});

searchInput.addEventListener("input", () => {
  searchTerm = searchInput.value.trim().toLowerCase();
  renderGallery();
});

resetButton.addEventListener("click", () => {
  searchInput.value = "";
  searchTerm = "";
  setCategory("all");
  showToast("All photographs are back.");
});

viewToggle.addEventListener("click", () => {
  const compact = grid.classList.toggle("compact");
  viewToggle.setAttribute("aria-pressed", String(compact));
  viewToggle.setAttribute("aria-label", compact ? "Switch to spacious gallery view" : "Toggle compact gallery view");
  showToast(compact ? "Compact view enabled." : "Spacious view enabled.");
});

closeButton.addEventListener("click", closeLightbox);
previousButton.addEventListener("click", () => moveLightbox(-1));
nextButton.addEventListener("click", () => moveLightbox(1));

lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) closeLightbox();
});

document.addEventListener("keydown", (event) => {
  if (!lightbox.classList.contains("open")) return;
  if (event.key === "Escape") closeLightbox();
  if (event.key === "ArrowLeft") moveLightbox(-1);
  if (event.key === "ArrowRight") moveLightbox(1);
});

renderGallery();

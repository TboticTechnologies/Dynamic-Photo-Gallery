// JavaScript functionality to cycle through gallery images using buttons and lightbox
const galleryImages = document.querySelector('.gallery-images');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.querySelector('.lightbox-image');
const closeButton = document.querySelector('.close-button');

let scrollAmount = 0;
const scrollStep = 220; // Adjust the scroll distance as needed

// Function to open the lightbox with the clicked image
function openLightbox(imageSrc) {
  lightboxImage.src = imageSrc;
  lightbox.style.display = 'block';
}

// Function to close the lightbox
function closeLightbox() {
  lightbox.style.display = 'none';
}

// Event listeners for gallery navigation buttons
nextButton.addEventListener('click', () => {
  scrollAmount += scrollStep;
  galleryImages.scrollLeft += scrollStep;
});

prevButton.addEventListener('click', () => {
  scrollAmount -= scrollStep;
  galleryImages.scrollLeft -= scrollStep;
});

// Event listener for clicking on an image to open the lightbox
galleryImages.addEventListener('click', (event) => {
  if (event.target.tagName === 'IMG') {
    openLightbox(event.target.src);
  }
});

// Event listener for closing the lightbox
closeButton.addEventListener('click', closeLightbox);

// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

const galleryEl = document.querySelector(".gallery");

const originalGalleryEl = galleryItems.map((image) => {
   return `<a class="gallery__item" href="${image.original}">
     <img
       class="gallery__image"
       src="${image.preview}"
       alt="${image.description}"
     />
   </a>
   `
}).join("");

galleryEl.insertAdjacentHTML('afterbegin', originalGalleryEl);

new SimpleLightbox('.gallery a', {
   captionsData: 'alt',
   captionDelay: 250,
 });

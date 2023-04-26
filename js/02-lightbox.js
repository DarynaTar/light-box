import { galleryItems } from './gallery-items.js';
// Change code below this line

const listGallery = document.querySelector('.gallery')

const itemGallery = galleryItems
.map(({preview, original, description}) => `<li class="gallery__item">
<a class="gallery__link" href="${original}">
   <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
</li>`)
.join('')
// console.log(itemGallery)
listGallery.insertAdjacentHTML('beforeend', itemGallery)


const lightboxOptions = {
  captions: true, // Enable image captions
  captionDelay: 250, // Delay showing the caption until 250ms after image is displayed
  captionPosition: 'bottom', // Set the caption position to bottom
  captionsData: 'alt',
};


// Initialize the lightbox with the gallery items and options
const lightbox = new SimpleLightbox('.gallery a', lightboxOptions);

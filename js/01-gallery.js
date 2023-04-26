import { galleryItems } from './gallery-items.js';
// Change code below this line
const listGallery = document.querySelector('.gallery')

const itemGallery = galleryItems
.map(({preview, original, description}) => `<li class="gallery__item">
<a class="gallery__link" href="${original}">
  <img
    class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"
  />
</a>
</li>`)
.join('')
// console.log(itemGallery)
listGallery.insertAdjacentHTML('beforeend', itemGallery)

listGallery.addEventListener('click', onHandleClickImage)

function onHandleClickImage(event) {
  event.preventDefault(); 
  const imgSrc = event.target.dataset.source;
  const instance = basicLightbox.create(`
    <img src="${imgSrc}" width="800" height="600">
  `);
  instance.show();
}
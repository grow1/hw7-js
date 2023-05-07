import { galleryItems } from './gallery-items.js';
// Change code below this line

const container = document.querySelector('.gallery');

const markup = galleryItems.map(
  ({ preview, original, description }) =>
    `<li class="gallery__item">
        <a class="gallery__link" href="${original}" onclick="event.preventDefault()">
            <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
            />
        </a>
    </li>`
);

container.insertAdjacentHTML('beforeend', markup.join(''));
container.addEventListener('click', onClick);

function onClick(event) {
  if (!event.target.classList.contains('gallery__image')) {
    return;
  }

  const instance = basicLightbox.create(`
      <img src="${event.target.dataset.source}">
  `);
  instance.show();
}

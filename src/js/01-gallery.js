import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const ulEl = document.querySelector(".gallery");

const liEls = galleryItems
    .map((image) => `<li class = "gallery__item">
    <a
    class = "gallery__link"
    href="${image.original}"
    >
    <img
    class="gallery__image"
    src="${image.preview}"
    alt="${image.description}">
    </a>
    </li>`)
    .join("");

    ulEl.insertAdjacentHTML("afterbegin", `${liEls}`);

var lightbox = new SimpleLightbox('.gallery a', {
captionsData: 'alt',
captionDelay: 250,
});

console.dir(liEls);

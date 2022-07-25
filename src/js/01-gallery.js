import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

// посилання на div з галереєю
const galleryRef = document.querySelector('.gallery');

// створення і рендер розмітки елементів галереї
const galleryElements = galleryItems.map(({ preview, original, description }) => `<a href="${original}"><img class="gallery__image" src="${preview}" alt="${description}"></a>`).join('');

galleryRef.insertAdjacentHTML('beforeend', galleryElements);


// бібліотека SimpleLightbox
const lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: '250' });
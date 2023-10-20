import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

let markUp = "";
galleryItems.forEach(
  ({ preview, original, description }) =>
    (markUp += `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
       <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>
 </li>
`)
);

const ul = document.querySelector(".gallery");

ul.innerHTML = markUp;

let gallery = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
console.log(gallery);

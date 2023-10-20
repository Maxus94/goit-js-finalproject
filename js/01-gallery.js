import { galleryItems } from "./gallery-items.js";
// Change code below this line

let markUp = "";
galleryItems.forEach(
  ({ preview, original, description }) =>
    (markUp += `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
       <img class="gallery__image" 
            src="${preview}" 
            data-source="${original}" 
            alt="${description}" />
    </a>
</li>
`)
);

const ul = document.querySelector(".gallery");

ul.innerHTML = markUp;
ul.addEventListener("click", clickHandler);

function clickHandler(evt) {
  evt.preventDefault();
  if (evt.target === evt.currentTarget) {
    return;
  }
  const options = {
    onShow: (instance) => {
      document.addEventListener("keydown", escHandler);
    },
    onClose: (instance) => {
      document.removeEventListener("keydown", escHandler);
    },
  };
  const instance = basicLightbox.create(
    `<div class="modal">
<img src="${evt.target.dataset.source}"
alt="${evt.target["alt"]}" />            
            
</div>`,
    options
  );
  instance.show();
  instance.element().addEventListener("click", () => instance.close());

  //const modal = document.querySelector(".modal");
  //modal.addEventListener("click", closeHandler);
  //document.addEventListener("keydown", escHandler);

  // function closeHandler(evt) {
  //   instance.close();
  //   document.removeEventListener("keydown", escHandler);
  // }
  function escHandler(evt) {
    if (evt.key === "Escape") {
      instance.close();
      document.removeEventListener("keydown", escHandler);
    }
  }
}

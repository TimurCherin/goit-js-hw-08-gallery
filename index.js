const galleryItems = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
]; 
const gallery = document.querySelector(".gallery")
const modalImg = document.querySelector(".lightbox__image")
const modal = document.querySelector(".lightbox")
let imageIndex;
const modalBtn = document.querySelector('button[data-action="close-lightbox"]')
const markup = galleryItems.map(({preview, original, description}, index) => `<li class="gallery__item">
  <a
    class="gallery__link"
    href="${original}"
  >
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      data-id="${index}"
      alt="${description}"
    />
  </a>
</li>`).join("")

gallery.insertAdjacentHTML("beforeend", markup)
gallery.addEventListener("click", onClick)

function onClick(e) {
  const currentImg = e.target 
  imageIndex = currentImg.dataset.id
    if (currentImg.nodeName !== "IMG") {
        return   
    }
    let imgUrl = currentImg.getAttribute("data-source")
    modal.classList.add("is-open")
    modalBtn
    modalImg.setAttribute("src", imgUrl)
}
modalBtn.addEventListener("click", closeModal)
function closeModal() {
  modal.classList.remove("is-open")
  modalImg.removeAttribute("src", imgUrl)
};

document.addEventListener("keydown", closeEsc)
function closeEsc(event) {
  if (event.code === "Escape") {
    modal.classList.remove("is-open")
    modalImg.removeAttribute("src", imgUrl)
  }
};

document.addEventListener("keydown", (e) => {
  e.preventDefault();
  if (e.code === "ArrowLeft") {
    imageIndex -= 1;
    if (imageIndex < 0) {
      imageIndex = galleryItems.length - 1;
    }
    let imageUrl = galleryItems[imageIndex].original;
    modalImg.setAttribute("src", imageUrl);
  }
  if (e.code === "ArrowRight") {
    imageIndex += 1;
    if (imageIndex > galleryItems.length - 1) {
      imageIndex = 0;
    }
    let imageUrl = galleryItems[imageIndex].original;
    modalImg.setAttribute("src", imageUrl);
  }
});
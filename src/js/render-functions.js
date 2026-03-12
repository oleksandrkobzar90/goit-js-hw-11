// createGallery(images);
// повинна приймати масив images, створювати HTML-розмітку для галереї, додавати її в
// контейнер галереї та викликати метод екземпляра SimpleLightbox refresh(). Нічого не повертає.

// clearGallery();
// Ця функція нічого не приймає та повинна очищати вміст контейнера галереї. Нічого не повертає.

// showLoader();
// Ця функція нічого не приймає, повинна додавати клас для відображення лоадера. Нічого не повертає.

// hideLoader();
// Ця функція нічого не приймає, повинна прибирати клас для відображення лоадера. Нічого не повертає.

// Розмітка для одного елемента

// Створення галереї поза DOM деревом

function imgTemplate(img) {
  const {
    webformatURL,
    largeImageURL,
    tags,
    likes,
    views,
    comments,
    downloads,
  } = img;
  const alt = tags;
  return `<li class="gallery-item">
  <a class="gallery-item__link" href="${largeImageURL}" title="${alt}">
    <img
      class="gallery-item__img"
      src="${webformatURL}"
      alt="${alt}"
      loading="lazy"
      width="640"
      height="360"
    />
    <div class="gallery-item__info">
      <span class="gallery-item__info-item">❤️ ${likes}</span>
      <span class="gallery-item__info-item">👁 ${views}</span>
      <span class="gallery-item__info-item">💬 ${comments}</span>
      <span class="gallery-item__info-item">⬇ ${downloads}</span>
    </div>
  </a>
</li>`;
}

// Розмітка для групи елементів
export function createGallery(images) {
  return images.map(imgTemplate).join('');
}

export function clearGallery() {
  const gallery = document.querySelector('.gallery-images');
  if (gallery) gallery.innerHTML = '';
}
export function showLoader() {}
export function hideLoader() {}

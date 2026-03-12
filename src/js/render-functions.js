import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

let lightbox;

// Створення розмітки галереї
export function createGallery(images) {
  const gallery = document.querySelector('.gallery');
  if (!gallery) return;

  const markup = images
    .map(img => {
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
  <a class="gallery-link" href="${largeImageURL}" title="${alt}">
    <img
      class="gallery-img"
      src="${webformatURL}"
      alt="${alt}"
      loading="lazy"
      width="640"
      height="360"
    />
    <div class="gallery-info">
      <span class="gallery-info-item">❤️ ${likes}</span>
      <span class="gallery-info-item">👁 ${views}</span>
      <span class="gallery-info-item">💬 ${comments}</span>
      <span class="gallery-info-item">⬇ ${downloads}</span>
    </div>
  </a>
</li>`;
    })
    .join('');

  gallery.innerHTML = markup;

  if (!lightbox) {
    lightbox = new SimpleLightbox('.gallery a', {
      captionsData: 'alt',
      captionDelay: 250,
    });
  } else {
    lightbox.refresh();
  }
}

// Очистка галереї перед створенням розмітки нових даних
export function clearGallery() {
  const gallery = document.querySelector('.gallery');
  if (gallery) gallery.innerHTML = '';
}

// Зявляється css-loader
export function showLoader() {
  document.querySelector('.loader').classList.remove('is-hidden');
}

// Прибирається css-loader
export function hideLoader() {
  document.querySelector('.loader').classList.add('is-hidden');
}

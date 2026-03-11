import { getImagesByQuery } from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions.js';

// Пошукове слово введене в input при submit передається у файл pixabay-api.js для пошуку на сервері відповідних зображень
form.addEventListener('submit', event => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const query = formData.get('search-text');

  //
  getImagesByQuery(query).then(data => {
    const markup = createGallery(data);
    ul.innerHTML = markup;
    form.insertAdjacentElement('afterend', ul);
  });
});

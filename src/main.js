// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

// Імпорт функцій з js
import { getImagesByQuery } from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions.js';

const form = document.querySelector('.form');

// Пошукове слово введене в input при submit передається у файл pixabay-api.js для пошуку на сервері відповідних зображень
form.addEventListener('submit', event => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const query = formData.get('search-text');

  // Перевірка на порожній пошуковий рядок
  if (!query) return;

  // Очистка галереї перед розміткою нових даних
  clearGallery();

  // Демонстрація завантажувача
  showLoader();

  // Пошук по ключовому слові на сервері. Без затримки не відображається css-loader
  setTimeout(() => {
    getImagesByQuery(query)
      .then(data => {
        if (data.hits.length === 0) {
          iziToast.error({
            position: 'topRight',
            message: `Sorry, there are no images matching your search query. Please try again!`,
          });
          return;
        }

        // Розмітка нових даних
        createGallery(data.hits);
      })
      .catch(err => console.error(err))
      .finally(() => hideLoader());
  }, 2000);

  event.target.reset();
});

console.log(divLoader);
console.log(document.querySelector('.loader'));

// getImagesByQuery(query);
// Ця функція повинна приймати один параметр query (пошукове слово, яке є рядком),
// здійснювати HTTP-запит і повертати значення властивості data з отриманої відповіді.

import axios from 'axios';

//Пошуковий запит на сервер звикористанням ключового слова переданого з input та одержання JSON
const baseUrl = 'https://pixabay.com/api/';
const apiKay = '54988014-84e46a9f0470ced10c87901a9';

export function getImagesByQuery(query) {
  const params = {
    key: apiKay,
    q: String(query).trim(),
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  };
  return axios
    .get(baseUrl, { params })
    .then(response => response.data.hits)
    .catch(err => console.error(err));
}

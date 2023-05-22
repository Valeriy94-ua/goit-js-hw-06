// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст щодо правильної кількості введених символів.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Please enter 6 symbols"
// />

// Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.

const inputText = document.querySelector("[data-length='6']");

const checkInput = event => {
  const inputElement = event.target;
  if (Number(inputElement.dataset.length) === inputElement.value.length) {
    inputElement.classList.add('valid');
  } else {
    inputElement.classList.add('invalid');
  }
  console.log(inputText.value.length);
  console.log(Number(inputText.dataset.length));
};
inputText.addEventListener('blur', checkInput);

// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

let counterValue = document.querySelector('#value');
counterValue.textContent = 0;
const btnIncrement = document.querySelector("[data-action='increment']");
btnIncrement.addEventListener('click', () => {
  counterValue.textContent = Number(counterValue.textContent) + 1;
});
const btnDecrement = document.querySelector("[data-action='decrement']");
btnDecrement.addEventListener('click', () => {
  counterValue.textContent = Number(counterValue.textContent) - 1;
});

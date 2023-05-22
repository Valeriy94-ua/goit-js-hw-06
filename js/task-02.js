const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.
//
let ingrList = [];
const addingDescrForIngredients = ingredients.forEach(ingredient => {
  // create "li" for el of ingredients
  const elementList = document.createElement('li');
  // add in li content
  elementList.textContent = ingredient;
  // cr class for li
  elementList.classList.add('item');

  // push list in massive
  ingrList.push(elementList);
});
// looking for ul
const ingredientElement = document.querySelector('#ingredients');
//add inside ul
ingredientElement.append(...ingrList);

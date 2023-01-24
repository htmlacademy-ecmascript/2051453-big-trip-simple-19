import Presenter from './presenter/trip-presenter.js';

new Presenter().init();

const friends = ['Joey', 'Chandler', 'Ross', 'Rachel', 'Monica', 'Phoebe'];

for (const s of friends) {
  console.log(`Hello, ${s}`);
}

// Для того, чтобы купить все эти товары,
// необязательно идти строго по порядку.
const groceriesToBuy = [
  'Огурцы',
  'Салат',
  'Лук',
  'Булочка',
  'Кунжут',
];

// Если хочется найти какой-то конкретный
// элемент, придётся или сначала перебрать
// весь список, чтобы найти его или запоминать
// номер, что неудобно.
const itemToFind = 'Лук';
let itemIndexInList = -1;

for (let i = 0; i < groceriesToBuy.length; i++) {
  const item = groceriesToBuy[i];
  if (item === itemToFind) {
    console.log(`Да, мне всё-таки нужно купить ${itemToFind}!`);
    itemIndexInList = i;
    break;
  }
}

const howManyOnionsShouldIBuy = groceriesToBuy['Лук'] || 0;

console.log(howManyOnionsShouldIBuy); // 1

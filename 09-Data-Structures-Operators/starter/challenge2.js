'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderRandom({
    starterIndex = 1,
    categoriesIndex = 0,
    mainIndex = 0,
    address = 'Miami',
    time = '1hour',
  }) {
    console.log(
      `Order recieved for ${this.starterMenu[starterIndex]} under ${this.categories[categoriesIndex]} category with ${this.mainMenu[mainIndex]}. Order should be sent to the address ${address}. Should be sent in ${time} time. Thank you`
    );
  },
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  // using the spread operator to order some pizza specifying the ingredients
  orderPizza: function (ingredient1, ingredient2, ingredient3) {
    console.log(
      `Order recieved! You orderd Pizza with ${ingredient1}, ${ingredient2} and ${ingredient3}`
    );
  },
};

console.log('------------ REST OPERATOR ---------');
const [a, b, ...others] = [1, 2, 3, 4, 5, 6];
console.log(a, b);

const [firstFood, , thirdFood, ...otherMenu] = [
  ...restaurant.mainMenu,
  restaurant.starterMenu,
];
console.log(firstFood, thirdFood, otherMenu);
// console.log('----------- DESTRUCTURING OBJECTS -------------');
// // const { name, categories, starterMenu } = restaurant;
// // console.log(name, categories, starterMenu);

// console.log('------- reassigning property names to different variables ------');
// const {
//   name: restaurantName,
//   categories: tags,
//   location: place,
//   starterMenu: morningDish,
//   openingHours: hours,
// } = restaurant;
// console.log(restaurantName, tags, place, morningDish, hours);

// console.log('------ Setting Default values ------');
// const { mainMenu = [], branch = [] } = restaurant;
// console.log(mainMenu, branch);

// console.log('---------- Mutating variables --------');
// let a = 101;
// let b = 120;
// const obj = { a: 10, b: 14, c: 12 };
// ({ a, b } = obj);

// console.log('---------- Nested Objects -------');
// const {
//   fri: { open = 0, close = 0, start = 0 },
// } = hours;

// console.log(open, close, start);

// console.log('----------- Practical Use -----------');
// restaurant.orderRandom({
//   starter: 1,
//   categoriesIndex: 0,
//   address: 'Lapaz',
//   time: '3:00hrs',
// });

// console.log('-------- ARRAY DESTRUCTURING -------');
// let [cat1, , , cat2] = restaurant.categories;
// console.log(cat1, cat2);

// console.log('--- switching variable ----');
// [cat2, cat1] = [cat1, cat2];
// console.log(cat1, cat2);

// console.log('------ destructuring from a function ------');
// // console.log(restaurant.order(2, 2));
// const [starter, main] = restaurant.order(2, 2);
// console.log(starter, main);

// console.log('-------- Nested Array ---------');
// const nested_arr = [1, 2, 3, [4, 9, 3]];
// const [, , , [x, y, z]] = nested_arr;
// console.log(x, y, z);

// console.log('------ Setting Default values for the variables ------');
// const [m, n, , [t = 0, r = 0, i = 0, l = 0]] = nested_arr;
// console.log(m, n, t, r, i, l);

// console.log('---------- Personal example -------');
// // function taking in two destructured array numbers and returning their sum
// const addition = function (n1, n2) {
//   console.log(n1 + n2);
// };

// const numbers = [2, 10, 12];
// const [xo, yo] = numbers;
// addition(xo, yo);

// const multiply = function (numbers) {
//   const [x, y] = numbers;
//   console.log(x * y);
// };

// multiply([4, 5]);

// const arrFunc = function (n1, n2) {
//   return [n1, n2];
// };

// const twoNums = arrFunc(2, 4);
// multiply(twoNums);

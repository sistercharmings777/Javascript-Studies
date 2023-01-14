'use strict';

const restaurant = {
  restaurantName: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
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
};

console.log('----------------- DESTRUCTURING OBJECTS ------------------');
// let { restaurantName, categories, starterMenu } = restaurant;
// console.log(
//   `The restaurant name is ${restaurantName}. It has ${categories} to be it categories and ${starterMenu} to it starter Menu`
// );

console.log('---------Setting Default Values -----------');
let { restaurantName = 'Prince Pice', categories = [], menu = [] } = restaurant;
console.log(restaurantName, categories, menu);

console.log('------------ Reassigning variable names -------------');
let {
  restaurantName: Name = 'Pizza Man',
  categories: tags = [],
  starterMenu: morningDish = [],
  menu: sideMenu = ['Fish Bone'],
} = restaurant;

console.log(
  ` The name of the restaurant is ${Name}. It has ${tags}, and serves ${morningDish} in the morning with a ${sideMenu}}`
);

console.log('------------- Mutating variables ---------');
let a = 10;
let b = 1200;
let c = 'ten';
const obj = { a: 7, b: 77, c: 'carbon' };
({ a, b } = obj);
({ c } = obj);
console.log(a, b, c);

console.log('-----------Nestes Objects-------');
// const { fri } = restaurant.openingHours;
// console.log(fri);
// console.log('-----further--');
// const {
//   fri: { open, close },
// } = restaurant.openingHours;
// console.log(open, close);

console.log('-----further');
const {
  fri: { open: o, close: cl },
} = restaurant.openingHours;
console.log(o, cl);

const { thu } = restaurant.openingHours;
console.log(thu);

const {
  thu: { open, close },
} = restaurant.openingHours;
console.log(`Open hours is ${open}:00 and closing hours is ${close}:00`);
////
///
////
////

// console.log('--------- Destructuring of Array -------------');
// //// Destructuring arrays ////
// const arrName = ['James', 'Jane', 'Jack', 'John', 'Jason'];
// console.log(arrName);

// console.log('----------- Destructuring the array --------');
// const [first, , second] = arrName;
// console.log(first, second);

// // getting the last element of the arrName
// const [, , , , lastName] = arrName;
// console.log(lastName);

// // varialbe mutation ///
// console.log('----------Variable Mutation ------------');
// let [, , third, fourth] = arrName;
// console.log(third, fourth);
// [third, fourth] = [fourth, third];
// console.log(third, fourth);

// console.log('------Destructuring Nested ------------');
// const nested = [1, [2, 3, 4], 5];
// const [a, [b, , d]] = nested;
// console.log(a, b, d);

// console.log('--------- setting Defaults-----------');
// const [q = 1, w = 2, e = 3, r = 4] = [8];
// console.log(`q:${q}, w:${w}, e:${e} and r:${r}`);
// const examination = [90, 95, 87, 91];
// const [math, science, social, literature] = examination;
// console.log(
//   `You had ${math} in mathematics, ${science} in science, ${social} in social studies and ${literature} in literature`
// );

// console.log('--------- Destructuring Emojis 🙃---------');
// const emojiShop = ['😀', '😁', '😆', '🥰', '🤩', '😇'];
// console.log(`Mr Emoji says ${emojiShop}`);
// const [, showteeth, , love, starStruck, smileHalo] = emojiShop;
// console.log(showteeth, starStruck);
// console.log(love, smileHalo);

// console.log('---------- using with a function -------');
// const emojiBay = function (obj) {
//   const [first, second, third = '😇'] = obj;
//   console.log(`first: ${first}! second: ${second}! third: ${third}!`);
// };

// const emoj = ['😂', '🤑', '🐙'];
// emojiBay(emoj);

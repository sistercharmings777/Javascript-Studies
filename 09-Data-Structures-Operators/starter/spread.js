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
  // using the spread operator to order some pizza specifying the ingredients
  orderPizza: function (ingredient1, ingredient2, ingredient3) {
    console.log(
      `Order recieved! You orderd Pizza with ${ingredient1}, ${ingredient2} and ${ingredient3}`
    );
  },
};

function divider(arrGiven) {
  const mutatedArr = [];
  for (let i = 0; i < arrGiven.length; i++) {
    mutatedArr.push(arrGiven[i] / 2);
  }
  //   console.log(mutatedArr);
  return mutatedArr;
}

console.log('----------SPREAD OPERATOR----------------');
const arrNum = [1, 2, 3, 4, 5, 6, 7];
const obstructedArr = divider([3, 4, 6, 7, 8, 9, 12]);

const newArrOld = [
  10,
  9,
  8,
  arrNum[6],
  arrNum[5],
  arrNum[4],
  arrNum[3],
  arrNum[2],
  arrNum[1],
  arrNum[0],
];
console.log(newArrOld);

const newArrNew = [10, 9, 8, ...arrNum];
console.log(newArrNew);

console.log('---------- Merging Two Arrays Together----');
console.log(obstructedArr);
const mergedArr = [...obstructedArr, ...arrNum];
console.log('new merged arrar is: ', mergedArr);

console.log('-------------- Create shallow copies of array -----------');
const newMenu = [...restaurant.mainMenu];
newMenu[1] = 'Gob3';
console.log(newMenu);
console.log(restaurant.mainMenu);

// Objects
console.log('-------Using the Spread Operator with Objects--------------');
const newRestaurant = {
  ...restaurant,
  founder: 'Prince and Diana',
  founded: 2007,
};

console.log(newRestaurant);
console.log(newRestaurant.founder);

console.log('--------------Using the spread operator with functions---------');
function addition(num1, num2, num3) {
  console.log(num1 + num2 + num3);
}

const x = [12, 23, 43];
addition(...x);

const myRequirement = ['Chicken', 'Salad', 'Malt'];
restaurant.orderPizza(...myRequirement);

console.log('--------- REST PATTERN AND PARAMETERS --------');
const [pizza, risotto, ...others] = [...restaurant.mainMenu];
console.log(pizza, risotto);

const [Italian, pizzeria, ...otherCat] = [...restaurant.categories];
console.log(Italian, pizzeria);
console.log(otherCat);

console.log('-----------REST with objects--------');
const { sat, ...otherWeekend } = { ...restaurant.openingHours };
console.log(sat);
console.log(otherWeekend);

console.log('--- a little destructuring here----');
const { open } = sat;
const { close: xoxo } = sat;
console.log(open);
console.log(xoxo);

console.log('----- using the rest operator with a function------');

const add = function (...obj) {
  let sum = 0;
  for (let i = 0; i < obj.length; i++) {
    sum += obj[i];
  }
  console.log(sum);
};

add(2, 3, 4, 5, 7);

const multiply = function (...obj) {
  const result = [];
  for (let i = 0; i < obj.length; i++) {
    let num = obj[i] * 2;
    result.push(num);
  }
  console.log(result);
  console.log(...result);
  let [x, y] = result;
  console.log(x, y);
};

multiply(2, 4);

'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const getCode = str => str.slice(0, 3).toUpperCase();

for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  console.log(
    `${type.startsWith('_Delayed') ? '🔴' : '🔵'}${type.replaceAll(
      '_',
      ' '
    )} from ${getCode(from)} to ${getCode(to)} ${time.replace(
      ':',
      'h'
    )}`.padStart(45)
  );
}

const weekdays = ['mon', 'tues', 'wed', 'thurs', 'fri', 'sat', 'sunday'];
const openingHours = {
  [weekdays[4 - 1]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};
// console.log(openingHours);
// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery({ starterIndex = 1, mainIndex = 2, address, time }) {
    console.log(
      `Oder received ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]}. Order will be delivered to ${address} at ${time}`
    );
  },
  // Enhanced Object Literal
  openingHours,
  orderPasta(ingredient1, ingredient2, ingredient3) {
    console.log(
      `Here is your delicious pasta with ${ingredient1}, ${ingredient2} and ${ingredient3}`
    );
  },
  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient, otherIngredients);
    console.log(
      `The main ingredient is ${mainIngredient} and the others include ${otherIngredients}😀`
    );
  },
};

///////////////////////////////////////
// Coding Challenge #4

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀

*/
// console.log('delayedDeparture    ✅✅✅✅✅'.length);
// const displayConvertedMessage = function (messages) {
//   const data = messages.entries();
//   for (const [x, y] of data) {
//     console.log(x);
//     console.log(`${y.padEnd(20)}${'✅'.repeat(x + 1)}`);
//   }
// };

// const dashedWordsConverter = function (words) {
//   const newJointWord = [];
//   for (const word of words) {
//     const letter = word.toLowerCase().trim().split('_');
//     const [firstWord, lastWord] = letter;
//     const lastWordUpper = lastWord.replace(
//       lastWord[0],
//       lastWord[0].toUpperCase()
//     );
//     const newWord = firstWord + lastWordUpper;
//     newJointWord.push(newWord);
//   }
//   return newJointWord;
// };

// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));

// // solution to challenge 4
// const btnEl = document.querySelector('button');
// btnEl.addEventListener('click', function () {
//   const text = document.querySelector('textarea').value;
//   const words = text.split('\n');
//   const dashedWord = dashedWordsConverter(words);
//   displayConvertedMessage(dashedWord);
// });

// console.log('------------ MAPS ------------------');
// const rest = new Map();
// rest.set('name', 'Classico Italiano');
// rest.set(1, 'Firenze, Italy');
// rest.set(2, 'Lisbon', 'Portugal');
// rest
//   .set('category', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
//   .set('open', 11)
//   .set('close', 23)
//   .set(true, 'We are open :D')
//   .set(false, 'We are closed :(');

// const time = 10;
// console.log(rest.get(true));
// console.log(rest.get('category'));
// console.log(rest.get(rest.get('open') > time && time < rest.get('close')));

// // Methods
// console.log(rest.has('category'));
// console.log(rest.size);
// console.log(delete 2);
// // console.log(rest.clear);

// // using arrays as keys
// const arr = [1, 2];

// rest.set(arr, 'Test');
// console.log(rest.get(arr));

// rest.set(document.querySelector('h1'), 'heading');

// console.log(rest);

// //// Another way of creating maps ///////////////
// const question = new Map([
//   ['question', 'What is the best programming language in the world'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'Javascript'],
//   ['correct', 3],
//   [true, 'Correct 🎉'],
//   [false, 'Try again 😥'],
// ]);
// console.log(question);

// // convert object to map
// console.log(Object.entries(openingHours));
// const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);

// // QUIZ APP
// console.log(question.get('question'));
// for (const [key, value] of question) {
//   if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
// }
// // const answer = Number(prompt('Your answer'));
// const answer = 3;
// console.log(answer);
// console.log(
//   question.get(question.get('question') ? answer === 3 : question.get(false))
// );
// // or
// console.log(question.get(question.get('correct') === answer));

// // convert map to array

// console.log(...question);
// console.log(...question.entries());
// console.log(...question.keys());
// console.log(...question.values());

// console.log('------------- STRINGS -------------- ');
// const airline = 'TAP Air Portugal';
// const plane = 'A320 TY';

// console.log(plane[0]);
// console.log(plane[1]);
// console.log(airline[0]);

// // string methods
// console.log(airline.length);
// console.log(airline.indexOf('P'));
// console.log(airline.lastIndexOf('r'));
// console.log(airline.indexOf('r'));
// console.log(plane.indexOf('TY'));

// // slice method
// console.log(plane.slice(2));
// console.log(airline.slice(4, 7));
// console.log(airline.slice(8));

// console.log(airline.slice(airline.indexOf('T'), airline.lastIndexOf(' ')));
// console.log(airline.slice(0, -4));
// console.log(airline.slice(0, airline.lastIndexOf('P')));
// console.log(airline.slice(airline.lastIndexOf(' ') + 1));

// const checkMiddleSeat = function (seat) {
//   // B and E are middle seats
//   const s = seat.slice(-1);
//   if (s === 'E' || s === 'B') console.log('You got the middle seat 😀');
//   else console.log('You got lucky 😛');
// };

// checkMiddleSeat('11B');
// checkMiddleSeat('23C');
// checkMiddleSeat('3E');

// const passenger = 'joNas';
// const passengerLower = passenger.toLowerCase();
// const passengerCorrect =
//   passengerLower[0].toUpperCase() + passengerLower.slice(1);
// console.log(passengerCorrect);

// // comparing emails
// const email = 'hello@prince.io';
// const loginEmail = ' Hello@Prince.io \n';

// // const lowerEmail = loginEmail.toLowerCase();
// // const rimmedEmail = lowerEmail.trim();
// // console.log(trimmedEmail);

// const normalizeEmail = loginEmail.toLowerCase().trim();
// console.log(normalizeEmail);
// console.log(email === normalizeEmail);

// // Replacing part of strings
// const priceGB = '288, 97E';
// const priceUs = priceGB.replace('E', '$').replace(',', '.');
// console.log(priceUs);

// const announcement =
//   'All passengers come to boarding door 23. Boarding door 23!';
// // console.log(announcement.replaceAll('door', 'gate'));
// // or regEx
// console.log(announcement.replace(/door/g, 'gate'));

// // Booleans
// const planex = 'Airbus A320neo';
// console.log(planex.includes('A320'));
// console.log(planex.includes('Boeing'));
// console.log(planex.startsWith('Airb'));

// if (planex.startsWith('Airbus') && planex.endsWith('neo')) {
//   console.log('Part of the NEW ARirbus family');
// }

// // Practice exercise
// const checkBaggage = function (items) {
//   const baggage = items.toLowerCase();
//   if (baggage.includes('knife') || baggage.includes('gun'))
//     console.log('You are not allowed aboard');
//   else {
//     console.log('You are welcome aboard');
//   }
// };

// checkBaggage('I have a laptop, some Food and a pocket knife');
// checkBaggage('Socks and camera');
// checkBaggage('Got some snacks and a gun for protection');

// // split() method
// console.log('a+very+tasty+diet'.split('+'));
// console.log('Prince Asante'.split(' '));
// console.log('School+resumes+on+the+seven'.split('+'));
// const [firstName, lastName] = 'Prince Asante'.split(' ');
// // join() method
// const newName = ['Mr', firstName, lastName.toUpperCase()].join(' ');
// console.log(newName);

// const capitalizeName = function (name) {
//   const names = name.split(' ');
//   console.log(names);
//   const namesUpper = [];
//   for (const n of names) {
//     // namesUpper.push(n[0].toUpperCase() + n.slice(1));
//     // console.log(n[0].toUpperCase() + n.slice(1));
//     namesUpper.push(n.replace(n[0].toUpperCase()));
//   }
//   console.log(namesUpper.join(' '));
// };

// capitalizeName('prince asante');
// capitalizeName('asare gideon');

// // padding
// const message = 'Go to gate 23';
// // console.log(message.length);
// console.log(message.padStart(20, '*').padEnd(30, '*'));

// const maskingNumber = function (number) {
//   const str = number + '';
//   const lastNums = str.slice(-4);
//   return lastNums.padStart(str.length, '*');
// };

// console.log(maskingNumber(123456789));

// const twoNamesConverter = function (name) {
//   const names = name.split(' ');
//   const [firstName, lastName] = names;
//   const firstNameCapital = firstName[0].toUpperCase() + firstName.slice(1);

//   console.log(firstNameCapital, lastName.toUpperCase());
// };

// twoNamesConverter('prince asante');
// twoNamesConverter('john de manso rissoto');

// const fullNameConverter = function (name) {
//   const names = name.split(' ');
//   const stressful =
//     names.length > 5
//       ? "shhhhh, that was a pretty long name you've got there 😥"
//       : 'done 😁';
//   const convertedName = [];
//   for (const n of names) {
//     const newName = n.replace(n[0], n[0].toUpperCase());
//     convertedName.push(newName);
//     // console.log(newName);
//   }
//   const upperCaseName = convertedName.join(' ');
//   console.log(upperCaseName);
//   console.log(stressful);
// };

// fullNameConverter('prince de grandy moush');
// fullNameConverter('daniel carson joel prince foster howdy de santos junior');

// // Repeat method
// const message2 = 'Bad weather... All Departures Delayed....';
// console.log(message2.repeat(5));

// const planeInLine = function (n) {
//   console.log(`There are ${n} planes in line ${'🛩️'.repeat(n)}`);
// };

// planeInLine(3);
// planeInLine(5);
// planeInLine(10);
// //console.log('--------------- SETS ------------------');
///////////// SETS //////////////////
// const orderSet = new Set([
//   'Garlic Bread',
//   'Potato chips',
//   'Waakye and Beef',
//   'Pear cake',
// ]);

// // console.log(typeof orderSet);
// console.log(orderSet.has('Waakye and Beef'));
// console.log(orderSet.add('Rissoto'));
// console.log(orderSet.delete('Rissoto'));
// // console.log(orderSet.clear());
// console.log(orderSet);

// //// practical example ////////////////
// const staff = ['chef', 'waitress', 'waitress', 'chef', 'Manager'];

// const staffUnique = [...new Set(staff)];
// console.log(staffUnique);

// /// finding the unique size of the array
// console.log(new Set(staff).size);
// console.log(new Set('Prince').size);
// console.log('----------------------optional chaining---------------------');
// /////////////// Optional Chaining ///////////////////////////
// before
// if (restaurant.openingHours.mon) {
//   console.log(restaurant.openingHours.mon.open);
// }

// using the optional chaining
// console.log(restaurant.openingHours.mon?.open ?? 'Does not exists');
// console.log(restaurant.openingHours?.mon?.open ?? 'Does not exists');

// // Example
// const days = ['mon', 'tues', 'wed', 'thurs', 'fri', 'sat', 'sunday'];

// for (const day of days) {
//   // console.log(day);
//   const open = restaurant.openingHours[day]?.open ?? 'closed';
//   console.log(`On ${day} we are open at ${open}`);
// }

// // With Methods
// console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
// console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

// // with Arrays
// const users = [{ name: 'Prince', email: 'example@example.com' }];
// console.log(users[0]?.name ?? 'User does not exists');

// ////////////////////// LOOPING OBJECTS KEYS, VALUES AND ENTRIES ////////////////
// // PROPERTY NAME
// const properties = Object.keys(openingHours);
// // console.log(properties);

// let openstr = `We are open on ${properties.length} days: `;
// for (const day of properties) {
//   openstr += `${day}, `;
// }
// console.log(openstr);
// // PROPERTY VALUES
// const values = Object.values(openingHours);
// console.log(values);
// // for (const open of values) {
// //   console.log(open['close']);
// // }

// // ENTIRE OBJECT
// const entire = Object.entries(openingHours);
// console.log(entire);

// for (const [key, { open, close }] of entire) {
//   console.log(`On ${key}, We open at ${open} and close at ${close}`);
// }

// console.log('---------------------------------------');
// ////////////////// oBJECTS DESTRUCTURING//////////////////////

// destructuring objects in functions
// restaurant.orderDelivery({
//   address: 'Lapaz SNIT Building',
//   mainIndex: 2,
//   starterIndex: 2,
//   time: '21:02',
// });

// restaurant.orderDelivery({
//   address: 'Ablekuma Junction',
//   time: '4:00 GMT',
// });

// restaurant.orderPizza('carrot', 'ginger', 'pepper', 'mango');

// const { name, categories, openingHours } = restaurant;
// console.log(name, categories, openingHours);

// // changing properties name to different variable
// const {
//   name: restaurantName,
//   categories: tags,
//   openingHours: hours,
// } = restaurant;
// console.log(restaurantName, tags, hours);

// // Defaults
// const { menu = [], categories: grouping = [] } = restaurant;
// console.log(menu, grouping);

// // Mutation while destructuring objects
// let a = 10;
// let b = 12;
// const obj = { a: 7, b: 17, c: 12 };
// let separator = 4;
// ({ a, b } = obj);

// console.log(a, b);

////////////// ARRAY DESTRUCTURING /////////////////
// const arr = [2, 3, 4];
// const [x, y, z] = arr;
// console.log(x);

// // selecting specific items
// let [first, , third] = restaurant.categories;
// console.log(first, third);

// // Switching elements(variables)
// [first, third] = [third, first];
// console.log(first, third);

// const [starter, main] = restaurant.order(2, 0);
// console.log(starter, main);

// // Nested Destructing
// const nested = [2, 3, [5, 6]];
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// // Default values
// const [q = 1, n = 1, m = 1] = [8];
// console.log(q, n, m);

// 3 THE SPREAD OPERATOR
// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[9]];
// console.log(badNewArr);

// const newArr = [1, 2, ...arr];
// console.log(newArr);
// console.log(...newArr);

// const NewMenu = [...restaurant.mainMenu, 'waakye'];
// console.log(NewMenu);

// Two use cases of spread operator
// 1 copy array
// const mainMenuCopy = [...restaurant.mainMenu];
// console.log(mainMenuCopy);

// 2 Join two arrays
// const main = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(main);

// // Iterables
// const str = 'Jonas';
// const letters = [...str, ' ', 'S.'];
// console.log(letters);
// console.log(...str);

// Real world Example
// const ingredients = [
//   prompt("Let's make pasta! Ingredient 1?"),
//   prompt("Let's make pasta! Ingredient 2?"),
//   prompt("Let's make pasta! Ingredient 3?"),
// ];
// console.log(ingredients);
// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// restaurant.orderPasta(...ingredients);

// Objects //////////////////
// const newRestaurant = { ...restaurant };
// console.log(newRestaurant);

// const newRestaurantCopy = { founder: 'Guissippe', ...restaurant };
// newRestaurantCopy.name = 'Black Chcken Spices';
// console.log(newRestaurantCopy.name);
// console.log(newRestaurant.name);

// Destructuring
// const arr = [1, 2, ...[3, 4]];

// // REST, because on LEFT side of =
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

// const [pizza, , risotto, ...othersFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];

// console.log(pizza, risotto, othersFood);

// // OBjects
// const { sat, ...otherDays } = restaurant.openingHours;
// console.log(sat, otherDays);

// // Functions///////////
// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
//   console.log(sum);
// };

// add(2, 3);
// add(1, 2, 4, 5);

// const x = [12, 4, 4];
// add(...x);

// console.log('-------------------- OR -------------');
//////// Short circuting ////////
// console.log(3 || 'jonas');
// console.log('' || 'Jonas');
// console.log('' || 4);
// console.log(true || 0);
// console.log(undefined || null);

// console.log(undefined || 0 || '' || 'Hello' || 23 || null);

//restaurant.numGuest = 23;
// const guest1 = restaurant.numGuest ? restaurant.numGuest : 10;
// // console.log(guest1);

// const guest2 = restaurant.numGuest || 12;

// // console.log(guest2);

// // console.log('-----------------------AND------------');
// // console.log('John' && 10);
// // console.log(null && 12);
// // console.log('killer' && 'bean' && 72 && 'awaga');
// // Practical example
// if (restaurant.orderPasta) {
//   restaurant.orderPizza('Chicken', 'Oil', 'Fish', 'Cream');
// } // =>
// restaurant.orderPizza &&
//   restaurant.orderPizza('Chicken', 'Oil', 'Fish', 'Cream', 'Goat shit');

// ///////// Nulliah Coalescing ////////////
// ////// NB: => Nullish: null and undefined (NOT 0 or '') //////
// restaurant.numGuests = null;
// const guest3 = restaurant.numGuest ?? 50;
// // console.log(guest3);

// //////// Logical Assignment Operator //////////
// ///// OR LOGICAL OPERATOR ////////
// const rest1 = {
//   name: 'La Piazza',
//   owner: 'Giovanni Rossi',
// };

// const rest2 = {
//   name: 'Capri',
//   numGuests: 20,
// };

// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// using the logical 'or' assignment operator
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// Nullish Assignment Operator
// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

// // Logical '&& Operator' ///////////
// // rest1.owner = rest1.owner && '<ANONYMOUS>';
// // rest2.owner = rest2.owner && '<ANONYMOUS>';

// rest1.owner &&= '<ANONYMOUS>';
// rest2.owner &&= '<ANONYMOUS>';

// // console.log(rest1);
// // console.log(rest2);

// // FOR LOOP OPERATOR
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menu) console.log(item);

// // using .entries and destructuring
// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1}: ${el}`);
// }

// console.log(...menu.entries());

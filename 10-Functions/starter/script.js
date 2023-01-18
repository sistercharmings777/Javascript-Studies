'use strict';

const bookings = [];

console.log('---------- DEFAULT ARGUMENTS ---------');

const createBooking = function (
  flightNum = 'ASH71',
  numPassengers = 40,
  price = 1 * 2
) {
  // ES5 way of setting default parameters
  // numPassengers = numPassengers || 1;
  // price = price || 199
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('11AS', 50, 500);
createBooking();
createBooking('PO123', undefined, 70);

// PASSING ARGUMENTS TO FUNCTIONS
console.log('-------------- Passing Arguments to Functions ----------');
const flight = 'LH234';
const jonas = {
  name: 'Jonas Asante',
  passport: 139404034940,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr.' + passenger.name;

  if (passenger.passport === 139404034940) {
    alert('Checked In');
  } else {
    alert('Wrong Passport');
  }
};

// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 100000);
// };

// newPassport(jonas);
// checkIn(flight, jonas);

console.log('---- Functions accepting functions -------');

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// Higher order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

transformer('Javascript is the best', upperFirstWord);
transformer('Python is so simple', oneWord);

const high5 = function () {
  console.log('👋');
};

document.body.addEventListener('click', high5);

['jonas', 'mata', 'adam'].forEach(high5);

// Practical example from me
const calculator = function (n1, n2, fn) {
  return fn(n1, n2);
};

const addition = function (n1, n2) {
  return n1 + n2;
};

const substraction = function (n1, n2) {
  return n2 - n1;
};

const multiplication = function (n1, n2) {
  return n1 * n2 * 1;
};

const selectTwoNumbers = function (...numbers) {
  const [n1, , n3, ...otherNum] = numbers;

  return [n1, n3];
};

const [n1, n2] = selectTwoNumbers(2, 1, 3, 4, 5, 7, 8);

console.log(n1, n2);
const result = calculator(n1, n2, addition);
const result1 = calculator(n1, n2, substraction);
const result2 = calculator(n1, n2, multiplication);
console.log(result, result1, result2);

console.log('------- Functions returning Functions ---------');

const greeting = function (greet) {
  return function (name) {
    console.log(`${greet}, ${name}`);
  };
};

const greeter = greeting('Good morning');
greeter('Prince');
// or
greeting('Hey')('Carson');

// challenge (arrow function)
// const pleasantries = greet => {
//   return function person_name(person_name) {
//     console.log(`${person_name} says ${greet}`);
//   };
// };

// pleasantries('Good day')('Ronald');    // wrong but it worked the same way

const greetArr = greeting => name => console.log(`${greeting}, ${name}`);
greetArr('Hey')('Paul');

console.log('------- The call and apply methods --------');

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(123, 'Prince Asante');
lufthansa.book(625, 'Carson Joel');
console.log(lufthansa.bookings);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

// Does Not work
// book(23, 'Sarah Williams')

// call method
book.call(eurowings, 120, 'Adlen Shade');
console.log(eurowings);

const swiss = {
  airline: 'Swiss',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 404, 'GET');
console.log(swiss);

// apply method()
console.log('---------- Apply method ------');
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);

console.log('-------- Bind method ---------');
const bookEW = book.bind(eurowings);
bookEW(717, 'Gerald Moreno');
console.log(eurowings);

const bookEW23 = book.bind(eurowings, 23);
bookEW23('Jonathan Herbal');
bookEW23('Taylor Hamilton');

// With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlanes = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlanes.bind(lufthansa));

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

// Partial application
const addVATGH = addTax.bind(null, 0.1);
console.log(addVATGH(210));
console.log(addVATGH(140));

// Challenge
const addTax2 = function (value) {
  return function addVATPT(rate) {
    console.log(value + value * rate);
  };
};

const tax2 = addTax2(200)(0.1);
console.log(tax2);

///////////////////////////////////////
// Coding Challenge #1

/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  answers: new Array(4).fill(0),
};

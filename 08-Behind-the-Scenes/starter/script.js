'use strict';

// function calcAge(birthyear) {
//   const age = 2022 - birthyear;
//   // console.log(firstName);

//   function printAge() {
//     let output = `You are ${age}, born in ${birthyear}`;
//     console.log(output);

//     if (birthyear >= 1981 && birthyear <= 1996) {
//       var millenial = true;

//       // creating new variable with same name as outer scope's variable
//       const firstName = 'Mark';

//       // reassgining outer scope's variable
//       output = 'New OUTPUT';

//       const str = `Oh, and you're a millenial, ${firstName}`;
//       console.log(str);
//     }

//     function add(a, b) {
//       return a + b;
//     }
//     // console.log(str)     // Reference error because const is block scope
//     console.log(millenial); // will print true because  var is function scoped
//     console.log(add(2, 4));
//   }

//   printAge();
//   //   console.log(add(2, 5));       // add() function is block scoped so it returns reference error ( only in strict mode )

//   return age;
// }

// const firstName = 'Jane';
// calcAge(1993);

// Variable Hoisting
// console.log(firstName);
// console.log(lastName);
// console.log(middleName);

// var firstName = 'Prince';
// let middleName = 'Asare';
// const lastName = 'Johnan';

// function Hoisting
// console.log(addDecl(2, 4));
// console.log(addExpr(2, 4));
// console.log(addArr(2, 4));

// function addDecl(a, b) {
//   return a + b;
// }

// const addExpr = function (a, b) {
//   return a + b;
// };

// var addArr = (a, b) => a + b; // undefined(a, b)

// // Example
// //console.log(numProducts);
// if (!numProducts) deleteShoppingCart();

// var numProducts = 10;

// //console.log(numProducts);

// function deleteShoppingCart() {
//   console.log('All Products Deleted');
// }

// var x = 1;
// const y = 2;
// let z = 3;

// // console.log(x === window.x);
// // console.log(y === window.y);
// // console.log(y === window.y);

// /////////////// this keyword //////////
// console.log(this);

// function calcAge(birthyear) {
//   console.log(this);
//   console.log(2022 - birthyear);
// }

// calcAge(1998);

// const calcAgeArrow = birthyear => {
//   console.log(this);
//   console.log(2022 - birthyear);
// };

// console.log('arrow');
// calcAgeArrow(1996);

// const jonas = {
//   year: 1980,
//   calcAge: function () {
//     console.log(this);
//     console.log(2022 - this.year);
//   },
// };

// // jonas.calcAge();

// // method borrowing
// const matilda = {
//   year: 2000,
// };

// matilda.calcAge = jonas.calcAge;
// matilda.calcAge();

///////////// Regular fucntions vs arrow functions ///////////////////

// const jonas2 = {
//   firstName: 'Jonas',
//   year: 1991,
//   calcAge: function () {
//     console.log(this);
//     console.log(2037 - this.year);
//   },

//   greet: () => {
//     console.log(this);
//     console.log(`Hey ${this.firstName}`);
//   },
// };

// jonas2.greet(); //👉 undefined

// const jonas2 = {
//   firstName: 'Jonas',
//   year: 1991,
//   calcAge: function () {
//     console.log(this);
//     console.log(2037 - this.year);

//     // solution 1
//     // const self = this; // self or that
//     // const isMillenial = function () {
//     //   console.log(self);
//     //   console.log(self.year >= 1981 && self.year <= 1996);
//     //   // console.log(this.year >=y 1981 && this.year <= 1996)   //> year is undefined
//     //};
//     //isMillenial();

//     // solution 2
//     const isMillenial = () => {
//       console.log(this);
//       console.log(this.year >= 1981 && this.year <= 1996);
//     };
//     isMillenial();
//   },

//   greet: () => {
//     console.log(this);
//     console.log(`Hey ${this.firstName}`);
//   },
// };

// jonas2.greet(); //👉 undefined
// jonas2.calcAge();

// // arguments keyword
// const addExpr = function (a, b) {
//   console.log(arguments);
//   return a + b;
// };

// addExpr(2, 3);
// addExpr(2, 3, 4, 5, 6);

// var addArrow = (a, b) => {
//   return a + b;
// };

//addArrow(12, 3);
//addArrow(12, 3, 5, 6); // return Reference error

/////////////// Primitive and Objects ///////////////

// let lastName = 'Williams';
// let oldLastName = lastName;
// lastName = 'Davi';

// console.log(lastName, oldLastName);

// // Reference types
// const jessica = {
//   firstName: 'Jessica',
//   lastName: 'Williams',
//   age: 27,
// };

// const marriedJessica = jessica;
// marriedJessica.lastName = 'Davis';
// console.log('Before marriage: ', jessica);
// console.log('After marriage: ', marriedJessica);

// // copying objects
// const jessica2 = {
//   firstName: 'Jessica',
//   lastName: 'Williams',
//   age: 27,
// };

// const jessicaCopy = Object.assign({}, jessica2);
// jessicaCopy.lastName = 'Asante';

// console.log('Before marriage:', jessica2);
// console.log('After marraiage: ', jessicaCopy);

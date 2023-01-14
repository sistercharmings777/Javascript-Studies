"use stric";

// function logger() {
//   console.log("My name is Paul");
// }

// // Calling / running / invoking function
// // logger();
// // logger();
// // logger();

// function fruitProcessor(apples, oranges) {
//   //   console.log(apples, oranges);
//   const juice = `Juice made with ${apples} apples and ${oranges} oranges`;
//   return juice;
// }

// fruitProcessor(10, 5);
// const fruitJuice = fruitProcessor(4, 7);
// console.log(fruitJuice);
// // or
// console.log(fruitProcessor(2, 9));

// // Built in funcitons
// const num1 = Number("23");
// const num2 = String(12);
// console.log(typeof num1);
// console.log(typeof num2);
// // and others

// function Declarations and Expression
// Declaration
// function calAge1(birthyear) {
//   return 2037 - birthyear;
// }

// const age1 = calAge1(2020);
// console.log(age1);

// // Expressions
// const calAge2 = function (birthyear) {
//   return 2036 - birthyear;
// };
// const age2 = calAge2(1999);
// console.log(age2);

// // Arrow Functions
// const calAge = (birthyear) => 2015 - birthyear;
// const age3 = calAge(1991);
// console.log(age3);

// const doubleScore = (num) => num ** 2;
// const toDouble = doubleScore(4);
// console.log(toDouble);

// // Arrow functions with multiple params
// const yearsUntilRetirement = (firstname, birthyear) => {
//   const age = 2022 - birthyear;
//   const retirement = 65 - age;
//   return `${firstname} has ${retirement} years until retirement`;
// };

// console.log(yearsUntilRetirement("Howdy", 1993));
// const retirementAge = yearsUntilRetirement("Mark", 1996);
// console.log(retirementAge);

// // adding two numbers
// const addition = (num1, num2) => {
//   const sum = num1 + num2;
//   return `The sum of ${num1} and ${num2} is = ${sum}`;
// };
// console.log(addition(4, 7));

// // Functions calling Functions

// function fruitCutPieces(fruit) {
//   return fruit * 4;
// }

// function fruitProcessor(apples, orange) {
//   const applePieces = fruitCutPieces(apples);
//   const orangePieces = fruitCutPieces(orange);

//   return `Fruit juice made with ${applePieces} pieces of apples and ${orangePieces} pieces of orange  `;
// }

// console.log(fruitProcessor(3, 2));

// function remainderFunc(num) {
//   return num % 2;
// }

// function multiplyNum(num) {
//   const multi1 = num * 15;
//   const remainder = remainderFunc(multi1);
//   return remainder;
// }

// function divider(number) {
//   const divide1 = number / 2;
//   const multi = multiplyNum(divide1);
//   return multi;
// }

// function numAdder(num1, num2) {
//   const firstNumber = divider(num1);
//   const secondNumber = divider(num2);

//   return `The sum of ${firstNumber} and ${secondNumber} is ${
//     firstNumber + secondNumber
//   }`;
// }

// const result = numAdder(3, 7);
// console.log(result);

// Arrays
// const friend1 = "Carson";
// const friend2 = "james";
// const friend3 = "howdy";

// const friends = ["carson", "james", "howdy"];
// // or
// const years = new Array(1967, 2020, 2021, 1978);

// // Accessing the elements of an array
// console.log(friends[0]);
// console.log(friends[1]);
// console.log(friends[2]);
// // accessing the last element of the array
// console.log(friends[friends.length - 1]);

// // changing the elements of an array
// friends[2] = "Ronald";
// friends[0] = "Joel";
// friends[1] = "Asiamah";
// console.log(friends);

// // arrays can contain other arrays
// const firstName = "Prince";
// const prince = [firstName, 2020 - 2015, "Lapaz", friends];
// console.log(prince);
// console.log(prince.length);
// console.log(prince[prince.length - 1][0]);

// // Exercise
// const calAge = function (birthyear) {
//   return 2037 - birthyear;
// };

// const yearsOf = [1990, 1967, 2002, 2010, 2018];

// const age1 = calAge(yearsOf[0]);
// const age2 = calAge(yearsOf[1]);
// const age3 = calAge(yearsOf[2]);
// const age4 = calAge(yearsOf[3]);
// const age5 = calAge(yearsOf[yearsOf.length - 1]);
// console.log(age1, age2, age3, age4, age5);

// // storing them in an array
// const ages = [
//   calAge(yearsOf[0]),
//   calAge(yearsOf[1]),
//   calAge(yearsOf[yearsOf.length - 1]),
// ];
// console.log(ages);

// ARRAY METHODS
// const friends = ["carson", "james", "bernard"];

// // Add methods
// friends.unshift("Diego"); // add element to the beginning of an array
// console.log(friends);
// //push
// friends.push("Linda"); // add element to the beginning of an array
// console.log(friends);

// // Removing method
// const popped = friends.pop();
// console.log(popped);
// console.log(friends);
// // shift
// friends.shift();
// console.log(friends);

// // indexOf() and includes()
// // indexOf()
// console.log(friends.indexOf("bernard"));
// console.log(friends.indexOf("carson"));
// //includes()
// console.log(friends.includes("carson"));
// console.log(friends.includes("howdy"));

// if (friends.includes("Peter")) {
//   console.log("Hi Peter, what's your name");
// } else {
//   console.log("Hi there, what's your name");
// }

// Objects
// const jonas = {
//   firstName: "Jonas",
//   lastName: "Robertson",
//   age: 2035 - 2020,
//   job: "teacher",
//   friends: ["Prince", "Paul", "James", "Carson", "Ronald"],
// };

// accessing objects properties
// console.log(jonas.firstName);
// console.log(jonas["lastName"]);

// const nameKey = "Name";
// console.log(jonas["first" + nameKey]);
// console.log(jonas["last" + nameKey]);

// const interestedIn = prompt(
//   "What do you want to know about Prince? Choose between firstName, lastName, // Choose between age, job and friends"
// );

// console.log(jonas.interestedIn); // Evaluate to undefined
// console.log(jonas[interestedIn]);

// if (jonas[interestedIn]) {
//   console.log(jonas[interestedIn]);
// } else {
//   console.log("Wrong request. Choose between age, job and friends");
//}

// adding properties
// jonas.location = "Portugal";
// jonas["twitter"] = "@twitbotswiss";

// // Challenge
// // Jonas has 3 friends, and his best friend is called micheal
// console.log(
//   `${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas["friends"][0]}`
// );

// const jonas = {
//   firstName: "Jonas",
//   lastName: "Robertson",
//   birthyear: 1979,
//   job: "teacher",
//   friends: ["Prince", "Paul", "James", "Carson", "Ronald"],
//   hadDriversLicense: true,
//   //   calAge: function (birthyear) {
//   //     return 2035 - birthyear;
//   //   },
//   //   calAge: function () {
//   //     //console.log(this);
//   //     return 2035 - this.birthyear;
//   // },
//   calAge: function () {
//     this.age = 2035 - this.birthyear;
//     return this.age;
//   },
//   getSummary: function () {
//     if (this.hadDriversLicense) {
//       return `${
//         jonas.firstName
//       } is a ${this.calAge()} years old man who has a driver's license`;
//     } else {
//       return `${jonas.firstName} is a ${this.age} years old man who has no driver's license`;
//     }
//   },
// };

// jonas.calAge();
// // console.log(jonas["calAge"](1994));

// console.log(jonas.age);
// console.log(jonas.age);
// console.log(jonas.age);
// console.log(jonas.getSummary());

// ///////////////////////////////////////////
// //Iterations
// console.log("---Iteration-----");
// for (let rep = 1; rep <= 30; rep++) {
//   console.log(`Lifting weights repetition ${rep}`);
// }

// ///////////////////////////////////////////
// // for loops
// const jonas = [
//   "jonas",
//   "Asante",
//   2037 - 1991,
//   "teacher",
//   ["Michael", "Trevor", "Steven"],
//   true,
// ];

// const types = [];

// // for (let i = 0; i < jonas.length; i++) {
// //   console.log(jonas[i], typeof jonas[i]);

// //   types[i] = typeof jonas[i];
// // }

// for (let i = 0; i < jonas.length; i++) {
//   console.log(jonas[i], typeof jonas[i]);

//   types.push(typeof jonas[i]);
// }

// console.log(types);

// const years = [2021, 2022, 1954, 1957, 1990];
// const ages = [];
// const agex = [];

// for (let i = 0; i < years.length; i++) {
//   ages.push(2035 - years[i]);
//   agex[i] = 2035 - years[i];
// }
// console.log(ages);
// console.log(agex);

// ///////////////////////////////////////
// // Continue and Break statement
// console.log("-----Strings-------");

//////////////////////////////////
// Backwards looping
// const jonas = ["jonas", "Peter", "paul", "Ginger", "pineapple"];

// for (let i = jonas.length - 1; i >= 0; i--) {
//   console.log(i, jonas[i]);
// }

// //////////////////////////////////////
// // Loops within loops
// for (let exercise = 1; exercise < 4; exercise++) {
//   console.log(`---------starting Exercise ${exercise}---------------`);
//   for (let rep = 1; rep < 6; rep++)
//     [console.log(`Exercise ${1}: Lifting weight repetitiion ${rep} 🏋️🏋️🏋️🏋️`)];
// }

/////////////////////////////////
// while loop

let rep = 1;
while (rep <= 10) {
  console.log("Here I come 😂😂");
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) [console.log("Loop is about to die out")];
}

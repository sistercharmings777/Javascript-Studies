//let js = "amazing";
// if (js === "amazing") alert("Javascript is Fun!");
// console.log(40 + 10 + 8);

// const PI = 22 / 7;
// let $firstName = "John";
// let _secondName = "Asare";

// Arthmetic Operators
// const now = 2037;
// const ageJonas = now - 1998;
// const ageSarah = now - 2001;
// console.log(ageJonas, ageSarah);
// console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

// Assignment Operators
//let x = 10 + 5; // 15
//x += 10;
//console.log(x);

// Comparison operators
// > < >= <=

// String Concatenation and Template Literals
// const firstName = "Prince";
// const job = "Lecturer";
// const birthYear = 2034;
// const year = 2042;
// // Old way
// const text =
//   "My name is " +
//   firstName +
//   " I'm a " +
//   job +
//   ". I am " +
//   (year - birthYear) +
//   " of age.";

// // Using Template Literal
// const text2 = `My name is ${firstName} and I a ${job}. I am ${
//   year - birthYear
// } of age`;
// console.log(text2);
// console.log(text);

// Control Structure
// const age = 15;

// if (age >= 18) {
//   `Sarah can have a driving license`;
// } else {
//   const yearsLeft = 18 - age;
//   console.log(
//     `Sarah is too young to drive. Wait for ${yearsLeft} more years to own a license`
//   );
// }

// const birthYear = 1990;
// let centuray;
// if (birthYear <= 2000) {
//   centuray = 20;
// } else {
//   centuray = 21;
// }

// console.log(centuray);

// Type conversion
// const inputYear = "1991";
// console.log(Number(inputYear));
// console.log(typeof inputYear);

// console.log(Number("Jonas"));
// console.log(typeof NaN);

// console.log(String(23), 23);

// // Type coercion
// console.log("I am " + 23 + " years of age");
// console.log("23" - 4);
// console.log("23" / 2);
// console.log("23" * 3);

// let n = "1" + 1;
// n = n - 1;
// console.log(n);
// console.log(2 * " ");

// 5 falsey values: 0, ' ', undefined, null, NaN

// switch statement

// const day = "friday";
// switch (day) {
//   case "monday":
//     console.log("I will go for lectures");
//     break;
//   case "tuesday":
//     console.log("I will go for coding meetups");
//     break;
//   case "wednesday":
//   case "thursday":
//     console.log("I will be going for Tech World Meeting");
//     break;
//   case "friday":
//     console.log("I will skip lectures and code");
//     break;
//   case "saturday":
//     console.log("Chill with the boys🥶🥶");
//     break;
//   case "sunday":
//     console.log("Will go to church");
//     break;
//   default:
//     console.log("Sleeping is on the menu");
// }

// if (day === "monday") {
//   console.log("Today is monday");
// } else if (day === "tuesday") {
//   console.log("Today is Tuesday");
// } else if (day === "wednesday" || day === "thursday") {
//   console.log("Chilling with the boys");
// } else if (day === "thursday") {
//   console.log("Aha, who said we will go to class today");
// } else if (day === "friday") {
//   console.log("It's weekend boys, let's go get some pizza🍕🍕");
// } else if (day === "saturday") {
//   console.log("It's saturday. Tech World it is bro 🖥️🖥️");
// } else if (day === "sunday") {
//   console.log("Hurray!, Go to church today⛪⛪");
// } else {
//   console.log("Invalid day");
// }

// // emoji game
// const emoji = "😁";
// switch (emoji) {
//   case "😃":
//     console.log("😃😃😃😃😃");
//     break;
//   case "🤣":
//     console.log("🤣🤣🤣🤣🤣🤣");
//     break;
//   case "😁":
//     console.log("😁😁😁😁😁😁");
//     break;
// }

const age = 14;
age >= 18
  ? console.log("I like to drink wine🍷")
  : console.log("I like to drike water 🌊");

const drink = age >= 18 ? "Wine🍷" : "water🌊";
console.log(drink);
console.log(`I like to drink ${age >= 18 ? "wine" : "water"}`);

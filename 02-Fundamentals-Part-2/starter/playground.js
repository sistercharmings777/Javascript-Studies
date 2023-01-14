"use strict";

// Function Declaration
function addNum(x, y) {
  return `The addition of ${x} and ${y} is ${x + y}`;
}

const addition = addNum(5, 7);
console.log(addition);

// Function Expression
const multiplyNum = function (x, y) {
  return `The multiplication of ${x} and ${y} is = ${x * y}`;
};

const multiplication = multiplyNum(23, 6);
console.log(multiplication);

// switch
const favoriteFruit = "Kiwi";
switch (favoriteFruit) {
  case "Banana":
    console.log(`Yay, I we Love Bananas🍌🍌🍌🍌`);
    break;
  case "Peach":
    console.log("Oww, those peaches are really riped🍑🍑🍑🍑");
    break;
  case "Watermelon":
    console.log("I love watermelons🍉🍉🍉🍉🍉");
    break;
  case "Kiwi":
    console.log("Among all fruits, Kiwi is my favorite🥝🥝🥝🥝🥝");
    break;
  default:
    console.log("Hmmm, it is a fruit? 🤔🤔🤔🤔🤔🤔🤔");
}

// IF ELSE STATEMENT
const firstName = "John";

if (firstName === "Joseph") {
  console.log("Joseph loves kiwi 🥝🥝🥝🥝");
} else if (firstName === "John") {
  console.log("John loves Mangoes 🥭🥭🥭🥭");
} else if (firstName === "James") {
  console.log("James is a lover of peaches 🍑🍑🍑🍑🍑");
} else {
  console.log("The rest I don't know pls");
}

function fruitSelecter(firstName) {
  if (firstName === "Paul") {
    console.log("Paul loves mangoes🥭🥭🥭🥭");
  } else {
    console.log("Go and sit down pls");
  }
  return "Done";
}

const johnChoice = fruitSelecter("Paul");
console.log(johnChoice);

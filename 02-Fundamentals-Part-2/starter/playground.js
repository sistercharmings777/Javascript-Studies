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
    console.log(`Yay, I we Love Bananasππππ`);
    break;
  case "Peach":
    console.log("Oww, those peaches are really ripedππππ");
    break;
  case "Watermelon":
    console.log("I love watermelonsπππππ");
    break;
  case "Kiwi":
    console.log("Among all fruits, Kiwi is my favoriteπ₯π₯π₯π₯π₯");
    break;
  default:
    console.log("Hmmm, it is a fruit? π€π€π€π€π€π€π€");
}

// IF ELSE STATEMENT
const firstName = "John";

if (firstName === "Joseph") {
  console.log("Joseph loves kiwi π₯π₯π₯π₯");
} else if (firstName === "John") {
  console.log("John loves Mangoes π₯­π₯­π₯­π₯­");
} else if (firstName === "James") {
  console.log("James is a lover of peaches πππππ");
} else {
  console.log("The rest I don't know pls");
}

function fruitSelecter(firstName) {
  if (firstName === "Paul") {
    console.log("Paul loves mangoesπ₯­π₯­π₯­π₯­");
  } else {
    console.log("Go and sit down pls");
  }
  return "Done";
}

const johnChoice = fruitSelecter("Paul");
console.log(johnChoice);

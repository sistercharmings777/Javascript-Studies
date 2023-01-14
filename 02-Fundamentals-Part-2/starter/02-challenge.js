"use strict";

const testBills = [125, 555, 44];
// let arrTip1 = [];
// let arrtip2 = [];
// let arrtip3 = [];
const totalbills = [];

const calcTip = function (bill) {
  if (bill <= 300 && bill >= 50) {
    return bill * 0.15;
  } else {
    return bill * 0.2;
    // return bill * 0.2;
  }
};

const tip = calcTip(100);
console.log(tip);

const tips = [
  calcTip(testBills[0]),
  calcTip(testBills[1]),
  calcTip(testBills[2]),
];

const total = [
  tips[0] + testBills[0],
  tips[1] + testBills[1],
  tips[2] + testBills[2],
];
console.log(testBills, tips, total);

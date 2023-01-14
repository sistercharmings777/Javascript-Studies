// Coding Challenge #1
// BMI = mass / height **2 = mass / (height * height)

// Test data 1
// Mark data
const markHeight = 1.69;
const markMass = 78;

// John data
const johnHeight = 1.95;
const johnMass = 92;

// Test data 2
// Mark Data 2
const markHeight2 = 95;
const markMass2 = 1.88;

// John Data 2
const johnHeight2 = 1.76;
const johnMass2 = 85;

const markBMI = markMass / (markHeight * markHeight);
// console.log(markBMI);

const johnBMI = johnMass / (johnHeight * johnHeight);
//console.log(johnBMI);

const markBMI2 = markMass2 / (markHeight2 * markHeight2);
// console.log(markBMI2);

const johnBMI2 = johnMass2 / (johnHeight2 * johnHeight2);
// console.log(johnBMI2);

const markHigherBMI = markBMI > johnBMI;
//console.log(markHigherBMI);

const johnHigherBMI = johnBMI2 < markBMI2;
//console.log(johnHigherBMI);
// console.log(markBMI, johnBMI);
// if (markBMI > johnBMI) {
//   console.log(`Mark's BMI (${markBMI}) is greater than John's (${johnBMI})`);
// } else {
//   console.log(`John's BMI (${johnBMI}) is greather than Mark's (${markBMI})`);
// }

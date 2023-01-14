'use strict';

///////////////////////////////////////
// Using Google, StackOverflow and MDN

// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// - What is temp amplitude? Answer: difference between highest and lowest temp
// - How to compute max and min temperatures?
// - What's a sensor error? And what do do?

// 2) Breaking up inot sub-problems
// - How to ignore erros
// - Find max value in temperature array
//  Find min value in temperature array
// - Substract min from max to get amplittude

// const calcTempAmplitude = function (temp) {
//   let max = temp[0];
//   let min = temp[0];
//   for (let i = 0; i < temp.length; i++) {
//     const curTemp = temp[i];
//     if (typeof curTemp !== 'number') continue;
//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };

// const amplitude = calcTempAmplitude(temperatures);
// console.log(amplitude);

// PROBLEM 2
// FUNTION SHOULD NOW RECEIVE TWO ARRAYS OF TEMP

// 1) Understanding the problem

// Breaking into subproblems
// - With 2 arrays, should we implement functionality twice?
// Just merge two arrays

// const calcTempAmplitudeNew = function (temp1, temp2) {
//   const array1 = ['a', 'b', 'c', 'd'];
//   const array2 = ['e', 'f', 'g', 'h'];
//   const array3 = array1.concat(array2);

//   let max = temp1[0];
//   let min = temp2[0];

//   const temp = temp1.concat(temp2);

//   for (let i = 0; i < temp.length; i++) {
//     const curTemp = temp[i];
//     if (typeof curTemp !== 'number') continue;
//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };

// const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
// console.log(amplitudeNew);

/////////////////////////////////////
// DEBUGGING

const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',

    // C) FIX THE BUG
    value: Number(prompt('Degree Celsius: ')),
  };
  //console.log(measurement);

  // IDENTIFY THE BUG
  console.table(measurement);

  //console.log(measurement.value);
  //   console.warn(measurement.value);
  //   console.error(measurement.value);
  //   debugger;
  const kelvin = measurement.value + 273;
  return kelvin;
};
// A) Identify the bug
console.log(measureKelvin());

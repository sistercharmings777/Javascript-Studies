//////////////////////////
// Solution
// 1) create the function
// 2) Sort the array according in ascending
// 3) loop throught the given array
// 4) print the array out

const testData1 = [17, 21, 23];
const testData2 = [12, 5, -5, 0, 4];

function comparedNumbers(a, b) {
  return a - b;
}

function printForecast(arr) {
  const sortedarr = arr.sort((a, b) => a - b);
  let message = `...`;
  for (let i = 0; i < sortedarr.length; i++) {
    // console.log(i, arr[i]);
    message += `${sortedarr[i]}°C in ${i + 1} days...`;
  }
  console.log(message);
}

printForecast(testData1);
printForecast(testData2);

// const numb = [12, 4, 5, 76, 7];
// numb.sort(function (a, b) {
//   return a - b;
// });

// console.log(numb);

// const num2 = [12, 4, 5, 5, 7];
// num2.sort((a, b) => a - b);
// console.log(num2);

// 'use strict';

// const firstName = 'Ben';

// function logger(arg) {
//   console.log(arg);
// }

// function calcAge(birthyear) {
//   const age = 2017 - birthyear;

//   function printAge() {
//     const output = `${firstName}, you are ${age}, born in ${birthyear}`;
//     console.log(output);

//     if (birthyear >= 1981 && birthyear <= 1996) {
//       const str = `Oh, and you're a millenial, ${firstName}`;
//       console.log(str);

//       logger(str);
//     }
//   }

//   printAge();

//   return age;
// }

// calcAge(1995);

const myName = 'Jonas';

function first() {
  const age = 30;

  if (age >= 30) {
    const decade = 3;
    var millenial = true;
  }

  function second() {
    const job = 'teacher';
    console.log(`${myName} is a ${age} old ${job}`);
    console.log(millenial);
  }
  second();
}
first();

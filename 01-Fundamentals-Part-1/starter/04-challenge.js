const bill = 430;
// My version of the Challenge
const final =
  bill >= 50 && bill <= 300
    ? `The bill was ${bill}, the tip was ${
        bill * (15 / 100)
      }, and the total value ${bill * (15 / 100) + bill}`
    : `The bill was ${bill}, the tip was ${
        bill * (20 / 100)
      }, and the total value ${bill * (20 / 100) + bill}`;

console.log(final);

// Lecturer

const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value was ${
    bill + tip
  }`
);

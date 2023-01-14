const mark = {
  firstName: "Mark",
  lastName: "Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};

const john = {
  firstName: "John",
  lastName: "Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.BMI = this.mass / (this.height * this.height);
    return this.BMI;
  },
};

// mark.calcBMI();
// console.log(mark.BMI);

// john.calcBMI();
// console.log(john.BMI);

if (mark.calcBMI() === john.calcBMI()) {
  console.log(`Both have the same BMI of ${mark.BMI}`);
}
if (mark.calcBMI() > john.calcBMI()) {
  console.log(
    `${mark.firstName}'s BMI (${mark.BMI}) is higher than ${john.firstName}'s BMI (${john.BMI})!`
  );
} else {
  console.log(
    `${john.firstName}'s BMI (${john.calcBMI()}) is higher than ${
      mark.firstName
    }'s BMI (${mark.calcBMI()})!`
  );
}

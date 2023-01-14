"strict mode";

///////// values and variables ///////////
let countryPopulation = 23_000_000;
let continent = 100_000_000_000;

//////////////// Data Types /////////////
isIsland = false;
const language = "Twi";

//////////// Basic Operators/////////////
countryPopulation = countryPopulation / 2 + 1;

const FinlandPopulation = 6_000_000_000;

const isMore = countryPopulation > FinlandPopulation;

let randomCountry = 33_000_000_000;

const ismyCountryPopulation = countryPopulation < randomCountry;

const description =
  "Portugal is in Europe, and its 11 million people speak portuguese";

console.log(countryPopulation, continent, isIsland, language);
console.log(isMore);
console.log(ismyCountryPopulation);
console.log(description);

///////// Strings Template Literals /////////
description = `Portugal is in Europe, and its 11 million people speak portuguese`;

/////// Taking Decisions: if / else statement
if (countryPopulation > randomCountry) {
  console.log("Portugal's population is 22 million below average");
} else {
  ("Portugal's population is");
}

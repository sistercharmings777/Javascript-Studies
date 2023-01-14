'use strict';

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const averageFinder = function (gameOdds) {
  let sum = 0;
  for (const [, value] of gameOdds) {
    sum += value;
  }
  const average = Math.floor(sum / gameOdds.length);
  // console.log(sum);
  // console.log(average);
  return `The average odd is : ${average}`;
};

// CHALLENGE2 SOLUTION =>
for (const [index, player] of game.scored.entries()) {
  // console.log(index, player);
  console.log(`Goal ${index + 1}: ${player}`);
}

// calculate the average odd and log it to the console.
const gameOdds = Object.entries(game.odds);
console.log(gameOdds);
const averageOdd = averageFinder(gameOdds);
console.log(averageOdd);

// Print the 3 odds to the console
for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'draw' : `Victory for ${game[team]}`;
  console.log(`Odd of ${teamStr} ${odd}`);
  // console.log(Object.entries(game.odds));
}
// console.log(Object.values(game.odds));
// console.log(Object.keys(game.odds));
// creating an object called scorers

const scorers = {};
// for (const player of game.scored) {
//   scorers[player] ? scorers[player]++ : (scorers[player] = 1);
// }

for (const player of game.scored) {
  if (scorers[player]) {
    scorers[player]++;
  } else {
    scorers[player] = 1;
  }
}
console.log(scorers);

// SOLUTION =>

// // 1
// // const [[...players1], [...players2]] = game.players;
// const [players1, players2] = game.players;
// // console.log(player3, player4);
// console.log(players1, players2);

// // 2
// const [gk, ...fieldPlayers] = players1;
// // console.log(gk);
// // console.log(fieldPlayers);

// // 3
// const allPlayers = [...players1, ...players2];
// // console.log(allPlayers);

// // 4
// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// // console.log(players1Final);

// // 5
// // const { team1, x: draw, team2 } = game.odds;
// const {
//   odds: { team1, x: draw, team2 },
// } = game;
// // console.log(team1, draw, team2);

// // 6
// const printGoals = function (...scorers) {
//   let numberOfgoals = 0;
//   for (let i = 0; i < scorers.length; i++) {
//     console.log(scorers[i]);
//     numberOfgoals += 1;
//   }
//   console.log(`Number of Goals scored is ${numberOfgoals}`);
// };

// // printGoals('Davies', 'Muller', 'Lewandowski', 'Kimich');
// // printGoals(...game.scored);

// // 7
// team1 < team2 && console.log('Team 1 is more likely to win');
// team2 < team1 && console.log('Team 2 is more likely to win');

//// CHALLENGE 3

//////////////////////////////////////
// Coding Challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

// SOLUTION
// 1)
// const eventValues = Object.values(gameEvents);
// console.log(eventValues);
// console.log(gameEvents.values());
const events = [...new Set(gameEvents.values())];
console.log(events);

// 2)
gameEvents.delete(64);
console.log(gameEvents);

// 3)
console.log(
  `An event happened, on average, every ${92 / gameEvents.size} minutes`
);

// 4)
for (const [time, event] of gameEvents) {
  let firstHalf, secondHalf;
  firstHalf = '[FIRST HALF]';
  secondHalf = '[SECOND HALF]';
  console.log(
    time <= 45
      ? `${firstHalf} ${time}: ${event}`
      : `${secondHalf} ${time}: ${event}`
  );
  // or
  const half = time <= 45 ? 'FIRST' : 'SECOND';
  console.log(`[${half} HALF] ${time}: ${event}`);
  // console.log(key, value);
}

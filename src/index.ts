import { FootballCsvFileReader } from "./Inheritance/FootballCsvFileReader";
import { MatchResult } from "./helpers/MatchResult";
import { CCsvFileReader } from "./Composition/CCsvFileReader";

import { CFootballCsvFileReader } from "./Composition/CFootballCsvFileReader";

// Using Inheritance refactoring
const footballCsvFileReader = new FootballCsvFileReader('football.csv');
footballCsvFileReader.read();

// Using Composition Refactor
// Create a tuple to define types into match row
const cFootballCsvFileReader = new CFootballCsvFileReader('football.csv');
const cCsvFileReader = new CCsvFileReader(cFootballCsvFileReader);
console.log(cCsvFileReader.data);
cCsvFileReader.load()

// 2) Analyze How many times Man United Team Win
let manUnitedWin = 0;
for(let match of footballCsvFileReader.data) {
  if(match[1] === "Man United" && match[5]=== MatchResult.HomeWin) {
    manUnitedWin++;
  } else if (match[2] === "Man United" && match[5]=== MatchResult.AwayWin) {
    manUnitedWin++;
  }
}

console.log(`Man United won ${manUnitedWin} games`);



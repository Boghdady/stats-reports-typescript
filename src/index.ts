import { FootballCsvFileReader } from "./FootballCsvFileReader";
import { MatchResult } from "./MatchResult";


const footballCsvFileReader = new FootballCsvFileReader('football.csv');
footballCsvFileReader.read();

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



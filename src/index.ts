import { CsvFileReader } from "./CsvFileReader";
import { MatchResult } from "./MatchResult";


const csvFileReader = new CsvFileReader('football.csv');
csvFileReader.read();

console.log(csvFileReader.data[0][0])
// 2) Analyze How many times Man United Team Win

let manUnitedWin = 0;

for(let match of csvFileReader.data) {
  if(match[1] === "Man United" && match[5]=== MatchResult.HomeWin) {
    manUnitedWin++;
  } else if (match[2] === "Man United" && match[5]=== MatchResult.AwayWin) {
    manUnitedWin++;
  }
}

console.log(`Man United won ${manUnitedWin} games`);



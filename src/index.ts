import { CsvFileReader } from "./CsvFileReader";


const csvFileReader = new CsvFileReader('football.csv');
csvFileReader.read();


// 2) Analyze How many times Man United Team Win
enum MatchResult {
  HomeWin = 'H',
  AwayWin = 'A',
  Draw = 'D'
};
let manUnitedWin = 0;

for(let match of csvFileReader.data) {
  if(match[1] === "Man United" && match[5]=== MatchResult.HomeWin) {
    manUnitedWin++;
  } else if (match[2] === "Man United" && match[5]=== MatchResult.AwayWin) {
    manUnitedWin++;
  }
}

console.log(`Man United won ${manUnitedWin} games`);



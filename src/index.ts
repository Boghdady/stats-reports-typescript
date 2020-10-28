import fs from 'fs';

// 1) Load and Parse data from csv file
const matches: string[][] = fs.readFileSync('football.csv',{
  encoding:'utf-8'
})
.split('\n')
.map((row: string): string[] => row.split(',') );


// 2) Analyze How many times Man United Team Win
let manUnitedWin = 0;

for(let match of matches) {
  if(match[1] === "Man United" && match[5]=== 'H') {
    manUnitedWin++;
  } else if (match[2] === "Man United" && match[5]=== 'A') {
    manUnitedWin++;
  }
}

console.log(`Man United won ${manUnitedWin} games`);



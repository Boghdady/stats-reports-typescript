"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FootballCsvFileReader_1 = require("./FootballCsvFileReader");
var MatchResult_1 = require("./MatchResult");
var footballCsvFileReader = new FootballCsvFileReader_1.FootballCsvFileReader('football.csv');
footballCsvFileReader.read();
// 2) Analyze How many times Man United Team Win
var manUnitedWin = 0;
for (var _i = 0, _a = footballCsvFileReader.data; _i < _a.length; _i++) {
    var match = _a[_i];
    if (match[1] === "Man United" && match[5] === MatchResult_1.MatchResult.HomeWin) {
        manUnitedWin++;
    }
    else if (match[2] === "Man United" && match[5] === MatchResult_1.MatchResult.AwayWin) {
        manUnitedWin++;
    }
}
console.log("Man United won " + manUnitedWin + " games");

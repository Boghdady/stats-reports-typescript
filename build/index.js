"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FootballCsvFileReader_1 = require("./Inheritance/FootballCsvFileReader");
var MatchResult_1 = require("./helpers/MatchResult");
var CCsvFileReader_1 = require("./Composition/CCsvFileReader");
var CFootballCsvFileReader_1 = require("./Composition/CFootballCsvFileReader");
// Using Inheritance refactoring
var footballCsvFileReader = new FootballCsvFileReader_1.FootballCsvFileReader('football.csv');
footballCsvFileReader.read();
// Using Composition Refactor
// Create a tuple to define types into match row
var cFootballCsvFileReader = new CFootballCsvFileReader_1.CFootballCsvFileReader('football.csv');
var cCsvFileReader = new CCsvFileReader_1.CCsvFileReader(cFootballCsvFileReader);
console.log(cCsvFileReader.data);
cCsvFileReader.load();
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

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FootballCsvFileReader_1 = require("./inheritance/FootballCsvFileReader");
var CCsvFileReader_1 = require("./composition/CCsvFileReader");
var CFootballCsvFileReader_1 = require("./composition/CFootballCsvFileReader");
var WinsAnalysis_1 = require("./reports/analyzers/WinsAnalysis");
var Summary_1 = require("./reports/Summary");
var ConsoleReport_1 = require("./reports/reportTarget/ConsoleReport");
// 1) Load Data from csv file
// Using Inheritance refactoring
var footballCsvFileReader = new FootballCsvFileReader_1.FootballCsvFileReader('football.csv');
footballCsvFileReader.read();
// Using Composition Refactor
// Create a tuple to define types into match row
var cFootballCsvFileReader = new CFootballCsvFileReader_1.CFootballCsvFileReader('football.csv');
var cCsvFileReader = new CCsvFileReader_1.CCsvFileReader(cFootballCsvFileReader);
cCsvFileReader.load();
// 2) Make analysis and build report depend on this analysis
var winsAnalysis = new WinsAnalysis_1.WinsAnalysis('Man United');
var consoleReport = new ConsoleReport_1.ConsoleReport();
var summary = new Summary_1.Summary(winsAnalysis, consoleReport);
summary.buildAndPrintReport(cCsvFileReader.data);

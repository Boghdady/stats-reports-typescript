"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FootballCsvFileReader_1 = require("./inheritance/FootballCsvFileReader");
var CCsvFileReader_1 = require("./composition/CCsvFileReader");
var CFootballCsvFileReader_1 = require("./composition/CFootballCsvFileReader");
var WinsAnalysis_1 = require("./reports/analyzers/WinsAnalysis");
var Summary_1 = require("./reports/Summary");
var HtmlReport_1 = require("./reports/reportTarget/HtmlReport");
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
var summary = new Summary_1.Summary(new WinsAnalysis_1.WinsAnalysis('Man United'), 
// new ConsoleReport()
new HtmlReport_1.HtmlReport('report.html'));
summary.buildAndPrintReport(cCsvFileReader.data);

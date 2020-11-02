import { FootballCsvFileReader } from "./inheritance/FootballCsvFileReader";
import { MatchResult } from "./helpers/MatchResult";
import { CCsvFileReader } from "./composition/CCsvFileReader";

import { CFootballCsvFileReader } from "./composition/CFootballCsvFileReader";
import { RowMatchType } from "./helpers/RowRypes";
import { WinsAnalysis } from "./reports/analyzers/WinsAnalysis";
import { Summary } from "./reports/Summary";
import { ConsoleReport } from "./reports/reportTarget/ConsoleReport";

// 1) Load Data from csv file
// Using Inheritance refactoring
const footballCsvFileReader = new FootballCsvFileReader('football.csv');
footballCsvFileReader.read();

// Using Composition Refactor
// Create a tuple to define types into match row
const cFootballCsvFileReader = new CFootballCsvFileReader('football.csv');
const cCsvFileReader = new CCsvFileReader<RowMatchType>(cFootballCsvFileReader);
cCsvFileReader.load();

// 2) Make analysis and build report depend on this analysis
const winsAnalysis = new WinsAnalysis('Man United');
const consoleReport = new ConsoleReport();

const summary = new Summary(winsAnalysis, consoleReport);
summary.buildAndPrintReport(cCsvFileReader.data);


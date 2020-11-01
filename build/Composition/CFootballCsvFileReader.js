"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CFootballCsvFileReader = void 0;
var fs_1 = __importDefault(require("fs"));
var utils_1 = require("../helpers/utils");
var CFootballCsvFileReader = /** @class */ (function () {
    function CFootballCsvFileReader(filename) {
        this.filename = filename;
        this.data = [];
    }
    // 1) Load and Parse data from csv file
    CFootballCsvFileReader.prototype.read = function () {
        this.data = fs_1.default.readFileSync(this.filename, {
            encoding: 'utf-8'
        })
            .split('\n')
            .map(function (row) { return row.split(','); }).map(this.mapRowConversion);
    };
    CFootballCsvFileReader.prototype.mapRowConversion = function (row) {
        return [
            utils_1.stringDateToDate(row[0]),
            row[1],
            row[2],
            parseInt(row[3]),
            parseInt(row[4]),
            row[5],
            row[6]
        ];
    };
    return CFootballCsvFileReader;
}());
exports.CFootballCsvFileReader = CFootballCsvFileReader;

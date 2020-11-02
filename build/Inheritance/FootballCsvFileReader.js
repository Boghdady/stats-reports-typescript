"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.FootballCsvFileReader = void 0;
var utils_1 = require("../helpers/utils");
var CsvFileReader_1 = require("./CsvFileReader");
// Create a tuple to define types into match row
var FootballCsvFileReader = /** @class */ (function (_super) {
    __extends(FootballCsvFileReader, _super);
    function FootballCsvFileReader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FootballCsvFileReader.prototype.mapRowConversion = function (row) {
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
    return FootballCsvFileReader;
}(CsvFileReader_1.CsvFileReader));
exports.FootballCsvFileReader = FootballCsvFileReader;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringDateToDate = void 0;
exports.stringDateToDate = function (date) {
    // '10/08/2018'
    var dateParts = date.split('/')
        .map(function (part) { return parseInt(part); });
    var day = dateParts[0];
    var month = dateParts[1] - 1;
    var year = dateParts[2];
    return new Date(year, month, day);
};

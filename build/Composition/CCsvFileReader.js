"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CCsvFileReader = void 0;
var CCsvFileReader = /** @class */ (function () {
    function CCsvFileReader(reader) {
        this.reader = reader;
        this.data = [];
    }
    // set matches(value: T[]) {
    //   value = value;
    // }
    CCsvFileReader.prototype.load = function () {
        this.reader.read();
        this.data = this.reader.data;
    };
    return CCsvFileReader;
}());
exports.CCsvFileReader = CCsvFileReader;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Summary = void 0;
var Summary = /** @class */ (function () {
    function Summary(analyzer, outputTarget) {
        this.analyzer = analyzer;
        this.outputTarget = outputTarget;
    }
    Summary.prototype.buildAndPrintReport = function (data) {
        var output = this.analyzer.run(data);
        this.outputTarget.print(output);
    };
    return Summary;
}());
exports.Summary = Summary;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WinsAnalysis = void 0;
var MatchResult_1 = require("../../helpers/MatchResult");
var WinsAnalysis = /** @class */ (function () {
    function WinsAnalysis(teamName) {
        this.teamName = teamName;
    }
    WinsAnalysis.prototype.run = function (matches) {
        // Analyze How many times Man United Team Win
        var winsNumber = 0;
        for (var _i = 0, matches_1 = matches; _i < matches_1.length; _i++) {
            var match = matches_1[_i];
            if (match[1] === this.teamName && match[5] === MatchResult_1.MatchResult.HomeWin) {
                winsNumber++;
            }
            else if (match[2] === this.teamName && match[5] === MatchResult_1.MatchResult.AwayWin) {
                winsNumber++;
            }
        }
        return "Team " + this.teamName + " won " + winsNumber + " games";
    };
    return WinsAnalysis;
}());
exports.WinsAnalysis = WinsAnalysis;

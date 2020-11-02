import { MatchResult } from "../../helpers/MatchResult";
import { RowMatchType } from "../../helpers/RowRypes";
import { Analyzer } from "../Summary";

export class WinsAnalysis implements Analyzer {
  constructor(public teamName: string){}

  run(matches: RowMatchType[]): string {
    // Analyze How many times Man United Team Win
    let winsNumber = 0;
    for(let match of matches) {
      if(match[1] === this.teamName && match[5]=== MatchResult.HomeWin) {
        winsNumber++;
      } else if (match[2] === this.teamName && match[5]=== MatchResult.AwayWin) {
        winsNumber++;
      }
    }
    return `Team ${this.teamName} won ${winsNumber} games`;
  }
}
import { RowMatchType } from "../../helpers/RowRypes";
import { Analyzer } from "../Summary";

export class AverageGoalsAnalysis implements Analyzer {
  constructor(public teamName: string){}

  //TODO: Do implementation here
  run(data: RowMatchType[]): string {
    return '';
  }
}
import { RowMatchType } from "../helpers/RowRypes";

export interface Analyzer {
  run(data: RowMatchType[]): string;
}

export interface OutputTarget {
  print(report: string) : void;
}

export class Summary {
  constructor(public analyzer: Analyzer, public outputTarget: OutputTarget){}

  buildAndPrintReport(data : RowMatchType[]): void{
    const output = this.analyzer.run(data);
    this.outputTarget.print(output);
  }
}
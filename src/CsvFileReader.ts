import fs from 'fs';
import { stringDateToDate } from './utils';
import { MatchResult } from "./MatchResult";

// Create a tuple to define types into match row
type RowType = [Date, string , string, number, number, MatchResult, string];
export class CsvFileReader {
   data: RowType[] = [];
   constructor(public filename: string){}

  //  Load and Parse data from csv file
   read(): void {
    this.data = fs.readFileSync(this.filename,{
      encoding:'utf-8'
    })
    .split('\n')
    .map((row: string): string[] => row.split(','))
    .map((row : string[]) : RowType => {
      return [
        stringDateToDate(row[0]),
        row[1],
        row[2],
        parseInt(row[3]),
        parseInt(row[4]),
        row[5] as MatchResult,
        row[6]
      ];
    });
   }
}
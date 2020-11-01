import fs from 'fs';
import { MatchResult } from '../helpers/MatchResult';
import { stringDateToDate } from '../helpers/utils';
import {ICsvFileReader} from './CCsvFileReader';
// Create a tuple to define types into match row
type RowDataType = [Date, string , string, number, number, MatchResult, string];

export  class CFootballCsvFileReader implements ICsvFileReader<RowDataType> {
  
  constructor(public filename: string){}
  data: RowDataType[] = [];

  // 1) Load and Parse data from csv file
   read(): void {
    this.data = fs.readFileSync(this.filename,{
      encoding:'utf-8'
    })
    .split('\n')
    .map((row: string): string[] => row.split(',')).map(this.mapRowConversion);
   }

   mapRowConversion(row: string[]): RowDataType {
    return [
      stringDateToDate(row[0]),
      row[1],
      row[2],
      parseInt(row[3]),
      parseInt(row[4]),
      row[5] as MatchResult,
      row[6]
    ];
  }

}
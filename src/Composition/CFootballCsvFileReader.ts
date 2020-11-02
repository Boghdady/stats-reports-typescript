import fs from 'fs';
import { MatchResult } from '../helpers/MatchResult';
import { RowMatchType } from '../helpers/RowRypes';
import { stringDateToDate } from '../helpers/utils';
import { ICsvFileReader } from './CCsvFileReader';

export  class CFootballCsvFileReader implements ICsvFileReader<RowMatchType> {
  
  constructor(public filename: string){}
  data: RowMatchType[] = [];

  // 1) Load and Parse data from csv file
   read(): void {
    this.data = fs.readFileSync(this.filename,{
      encoding:'utf-8'
    })
    .split('\n')
    .map((row: string): string[] => row.split(',')).map(this.mapRowConversion);
   }

   mapRowConversion(row: string[]): RowMatchType {
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
import fs from 'fs';
import { stringDateToDate } from './utils';
import { MatchResult } from "./MatchResult";

export abstract class CsvFileReader<T> {
   data: T[] = [];
   constructor(public filename: string){}

  // 1) Load and Parse data from csv file
  // This part will be constant for every csv file we want to read it
   read(): void {
    this.data = fs.readFileSync(this.filename,{
      encoding:'utf-8'
    })
    .split('\n')
    .map((row: string): string[] => row.split(','))
    .map(this.mapRowConversion);
   }

  // 2) Make conversion into row depend on file data types
  // This part will defined in child class because it will change from csv file to other
   abstract mapRowConversion(row: string[]) : T;
}
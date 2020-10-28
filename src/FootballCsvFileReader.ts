import { CsvFileReader } from "./CsvFileReader";
import { MatchResult } from "./MatchResult";
import { stringDateToDate } from "./utils";

// Create a tuple to define types into match row
type RowDataType = [Date, string , string, number, number, MatchResult, string];

export class FootballCsvFileReader extends CsvFileReader<RowDataType> {
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
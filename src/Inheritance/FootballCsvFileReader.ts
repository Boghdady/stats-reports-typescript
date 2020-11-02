import { MatchResult } from "../helpers/MatchResult";
import { stringDateToDate } from "../helpers/utils";
import { RowMatchType } from "../helpers/RowRypes";
import { CsvFileReader } from "./CsvFileReader";

// Create a tuple to define types into match row

export class FootballCsvFileReader extends CsvFileReader<RowMatchType> {
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
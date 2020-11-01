export interface ICsvFileReader<T>{
  data: T[];
  read(): void;
}

export class CCsvFileReader<T> {
  data: T[] = [];
  constructor(public reader: ICsvFileReader<T>){}

  // set matches(value: T[]) {
  //   value = value;
  // }
  load(): void{
    this.reader.read();
    this.data = this.reader.data;
  }

  //  get matches():T[] {
  //   return this.matches;
  // }
}
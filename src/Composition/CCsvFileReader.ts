export interface ICsvFileReader<T>{
  data: T[];
  read(): void;
}

export class CCsvFileReader<T> {
  data: T[] = [];
  constructor(public reader: ICsvFileReader<T>){}

  load(): void{
    this.reader.read();
    this.data = this.reader.data;
  }
}
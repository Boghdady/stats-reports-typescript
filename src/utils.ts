export const stringDateToDate = (date: string) : Date =>{
  // '10/08/2018'
  const dateParts: number[] = date.split('/')
  .map(part => parseInt(part));

  const day = dateParts[0];
  const month = dateParts[1] - 1;
  const year = dateParts[2];

  return new Date(year, month, day);
}
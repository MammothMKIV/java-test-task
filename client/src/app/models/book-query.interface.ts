export interface IBookQuery {
  keywords?: string,
  readAlready?: boolean,
  yearFrom?: number,
  yearTo?: number,
  page: number,
  perPage: number
}

import { ISort } from "./sort.interface";

export interface IBookListFilterPanelValues {
  readAlready?: boolean,
  yearFrom?: number,
  yearTo?: number,
  sort?: ISort,
  keywords?: string
}

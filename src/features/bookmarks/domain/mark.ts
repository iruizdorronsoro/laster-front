import {Type} from "./type";

export interface Mark {
  id: number
  folder: number
  title: string
  link: string
  type: Type
  tags: string[]
  description: string
  date: Date
}

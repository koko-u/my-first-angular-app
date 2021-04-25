import { Heading } from './heading.model';

export type Product = {
  _id: string
  name: string
  coverImage: string
  price: number
  description?: string
  heading: Heading[]
};

import { Heading } from './heading.model';

export type Product = {
  id: number
  name: string
  coverImage: string
  price: number
  description?: string
  heading: Heading[]
};

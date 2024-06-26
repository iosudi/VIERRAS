import { Category } from './category';

export interface Products {
  sold: number;
  images: string[];
  subcategory: SubCategory[];
  rating: number;
  id: string;
  title: string;
  slug: string;
  description: string;
  quantity: number;
  price: number;
  imageCover: string;
  category: Category;
  brand: Brand;
  ratingsAverage: number;
  reviews: Review[];
}

interface SubCategory {
  name: string;
  slug: string;
  category: string;
  id: string;
}

interface Brand {
  name: string;
  slug: string;
  image: string;
  id: string;
}

export interface Review {
  name: string;
  email: string;
  title: string;
  reviewBody: string;
}

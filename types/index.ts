export type Category = 'Electronics' | 'Clothing' | 'Home';

export interface Product {
  id: string;
  title: string;
  price: number;
  category: Category;
  image: string;
  description: string;
  rating: number;
}

export interface CartItemType extends Product {
  quantity: number;
}

export type BasketItems = Record<
  string,
  { productId: string; quantity: number }
>;

export interface Product {
  productId: string;
  description: string;
}

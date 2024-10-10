import { Product } from "@/types/products";

export const returnListOfProducts = (data: Product[], quantity: number) => {
  return data.slice(0, quantity);
};

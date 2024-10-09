import { Product } from "@/types/products";

export const returnFirstFiveProducts = (data: Product[]) => {
  return data.slice(0, 5);
}
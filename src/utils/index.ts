import axios from 'axios';
import { Product } from "@/types/products";

export const returnListOfProducts = (data: Product[], quantity: number) => {
  return data.slice(0, quantity);
};

export async function fetchProducts() {
  let productsData = [];
  try {
    const res = await axios("http://localhost:3001/products");
    productsData = res.data;
  } catch (error) {
    console.error("Error fetching products data:", error);
  }
  return productsData;
}

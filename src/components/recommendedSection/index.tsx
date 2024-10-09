import React from "react";
import { Product } from "@/types/products";
import ProductCard from "../productCard";
import { returnListOfProducts } from "@/utils";
import { MAX_FIVE_PRODUCTS, RECOMMENDED_SECTION } from "./constants";

interface RecommendedSectionProps {
  data: Product[];
}

const { TITLE, SEE_ALL } = RECOMMENDED_SECTION;

export default function RecommendedSection({ data }: RecommendedSectionProps) {
  const firstFive = returnListOfProducts(data, MAX_FIVE_PRODUCTS);
  return (
    <section className="py-10">
      <div className="mx-6 my-10 flex justify-between">
        <h2 className="text-2xl font-light uppercase tracking-widest">
          {TITLE}
        </h2>
        <span className="py-6 text-xs uppercase underline">{SEE_ALL}</span>
      </div>
      <div className="grid grid-cols-2 gap-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {firstFive.map((product) => (
          <ProductCard key={product.code} product={product} />
        ))}
      </div>
    </section>
  );
}

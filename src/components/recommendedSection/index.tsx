import React from "react";
import { Product } from "@/types/products";
import {
  RECOMMENDED_SECTION_SEE_ALL,
  RECOMMENDED_SECTION_TITLE,
} from "./constants";
import ProductCard from "../productCard";
import { returnFirstFiveProducts } from "@/utils";

interface RecommendedSectionProps {
  data: Product[];
}

export default function RecommendedSection({ data }: RecommendedSectionProps) {
  const firstFive = returnFirstFiveProducts(data);
  return (
    <section className="py-10">
      <div className="mx-6 my-10 flex justify-between">
        <h2 className="text-2xl font-light uppercase tracking-widest">
          {RECOMMENDED_SECTION_TITLE}
        </h2>
        <span className="py-6 text-xs uppercase underline">
          {RECOMMENDED_SECTION_SEE_ALL}
        </span>
      </div>
      <div className="grid grid-cols-2 gap-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {firstFive.map((product) => (
          <ProductCard key={product.code} product={product} />
        ))}
      </div>
    </section>
  );
}

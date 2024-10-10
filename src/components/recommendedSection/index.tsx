import React from "react";
import { Product } from "@/types/products";
import ProductCard from "../productCard";
import { returnListOfProducts } from "@/utils";
import Link from "next/link";
import { MAX_PRODUCTS_TO_SHOW, RECOMMENDED_SECTION } from "./constants";

interface RecommendedSectionProps {
  data: Product[];
}

const { TITLE, SEE_ALL } = RECOMMENDED_SECTION;

export default function RecommendedSection({ data }: RecommendedSectionProps) {
  const products = returnListOfProducts(data, MAX_PRODUCTS_TO_SHOW);
  return (
    <section className="py-10">
      <div className="mx-6 my-10 flex justify-between">
        <h2 className="text-2xl font-light uppercase tracking-widest">
          {TITLE}
        </h2>
        <Link href="/c/sapatos/sandalias">
          <span className="py-6 text-xs uppercase underline">{SEE_ALL}</span>
        </Link>
      </div>
      <div className="grid grid-cols-2 gap-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {products.map((product) => (
          <ProductCard key={product.code} product={product} />
        ))}
      </div>
    </section>
  );
}

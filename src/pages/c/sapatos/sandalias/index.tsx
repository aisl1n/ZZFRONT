import React from "react";
import Image from "next/image";
import { fetchProducts } from "@/utils";
import { Product } from "@/types/products";
import {
  BREADCRUMB_DATA,
  BUTTON_LABEL,
  CATEGORY_DATA,
} from "@/pages/c/sapatos/sandalias/constants";
import ProductCard from "@/components/productCard";
import CategoryCard from "@/components/categoryCard";
import { CATEGORY_CARD_DATA } from "@/components/categoryCard/constants";

const { HOME, SAPATOS, SANDALIAS } = BREADCRUMB_DATA;
const { TITLE, DESCRIPTION } = CATEGORY_DATA;
const { FILTER, SEE_MORE } = BUTTON_LABEL;

interface SandaliasProps {
  productsData: Product[];
}

export async function getServerSideProps() {
  const productsData = await fetchProducts();

  return {
    props: {
      productsData,
    },
  };
}

export default function Sandalias({ productsData }: SandaliasProps) {
  return (
    <div>
      <div className="flex gap-1 px-8 py-4 text-xs uppercase">
        <p className="text-zinc-500">{`${HOME} | ${SAPATOS}`}</p>
        <span className="font-bold">{`| ${SANDALIAS}`}</span>
      </div>

      <div className="mx-4 my-8 flex gap-4 overflow-x-auto py-4 md:justify-center">
        {CATEGORY_CARD_DATA.map((category) => (
          <CategoryCard key={category.title} category={category} />
        ))}
      </div>
      <div className="flex gap-4 border-b border-t border-zinc-400 px-4 py-7">
        <div className="flex w-fit flex-col items-center justify-center">
          <button className="flex justify-center gap-4 rounded-full border border-zinc-500 px-12 py-2">
            <Image
              src="/assets/filter.svg"
              width={24}
              height={24}
              alt="icone de filtrar"
            />
            {FILTER}
          </button>
        </div>
        <div className="flex flex-col px-4">
          <h2 className="text-2xl font-light uppercase tracking-widest">
            {TITLE}
          </h2>
          <span className="text-xs text-zinc-400">{DESCRIPTION}</span>
        </div>
      </div>
      <div className="mx-4 mt-4 grid gap-1 sm:grid-cols-1 md:m-0 md:grid-cols-2 lg:grid-cols-3">
        {productsData.map((product) => (
          <ProductCard key={product.code} product={product} isPDC />
        ))}
      </div>
      <div className="flex flex-col items-center justify-center py-8">
        <button className="rounded-full border border-zinc-500 px-4 py-4">
          {SEE_MORE}
        </button>
      </div>
    </div>
  );
}

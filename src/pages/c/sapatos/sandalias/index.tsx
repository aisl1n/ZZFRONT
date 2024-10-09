import React from "react";
import CategoryCard from "@/components/categoryCard";
import { CATEGORY_CARD_DATA } from "@/components/categoryCard/constants";
import Image from "next/image";
import { fetchProducts } from "@/utils";
import { Product } from "@/types/products";
import ProductCard from "@/components/productCard";

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
        <p className="text-zinc-500">home | sapatos</p>
        <span className="font-bold">| sandálias</span>
      </div>

      <div className="flex items-center justify-center gap-8 overflow-auto px-8 py-4">
        {CATEGORY_CARD_DATA.map((category) => (
          <CategoryCard key={category.title} category={category} />
        ))}
      </div>

      <div className="flex gap-8 border-b border-t border-zinc-400 px-8 py-7">
        <button className="flex items-center justify-center space-x-2 border border-gray-500 px-4 py-0.5 md:rounded-full md:py-2">
          <Image
            src="/assets/filter.svg"
            width={24}
            height={24}
            alt="icone de filtrar"
          />
          <span className="capitalize">filtrar</span>
        </button>

        <div className="">
          <h2 className="text-2xl font-light uppercase tracking-widest">
            sandálias
          </h2>
          <span className="text-xs text-zinc-400">
            Peça-chave do guarda-roupa, as sandálias femininas da Arezzo
            traduzem e valorizam o estilo da mulher contemporânea.
          </span>
        </div>
      </div>
      <div className="flex-col gap-2 justify-center">
        <div className="grid md:m-0 m-8 sm:grid-cols-1 gap-1 md:grid-cols-2 lg:grid-cols-3">
          {productsData.map((product) => (
            <ProductCard key={product.code} product={product} />
          ))}
        </div>
        <button className="border border-gray-500 px-4 py-0.5 rounded-full md:py-2">
          Veja mais produtos
        </button>
      </div>
    </div>
  );
}

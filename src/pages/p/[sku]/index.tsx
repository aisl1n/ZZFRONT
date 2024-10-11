import React, { useState } from "react";
import { fetchProducts } from "@/utils";
import { Product } from "@/types/products";
import { BREADCRUMB_DATA } from "./constants";
import Image from "next/image";
import DividerLine from "@/components/dividerLine";

const { HOME, SAPATOS, SANDALIAS } = BREADCRUMB_DATA;

interface ParamsProps {
  params: {
    sku: string;
  };
}

interface PdpProps {
  product: Product;
}

export async function getStaticPaths() {
  const paths = await fetchProducts().then((products) =>
    products.map((product: Product) => ({
      params: { sku: product.code },
    })),
  );
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: ParamsProps) {
  const productsData = await fetchProducts();
  const product = productsData.find(
    (product: Product) => product.code === params.sku,
  );

  return {
    props: {
      product,
    },
  };
}

export default function Pdp({ product }: PdpProps) {
  const [selectedSize, setSelectedSize] = useState<number | null>(null);

  const toggleSelectedSize = (index: number) => {
    setSelectedSize(index === selectedSize ? null : index);
  };

  // const isSizeSelected = ;

  return (
    <>
      <div className="gap-1 px-8 py-4 text-xs uppercase md:flex">
        <p className="text-zinc-500">{`${HOME} | ${SAPATOS} | ${SANDALIAS}`}</p>
        <span className="max-w-xs truncate text-ellipsis font-bold">{`| ${product.name}`}</span>
      </div>
      <div className="md:flex md:flex-row">
        {/* Sessao grid de imagens */}
        <div className="flex overflow-x-auto md:grid md:grid-cols-2 md:gap-6 md:pb-10 md:pl-8 md:pr-5">
          {product.images.map((img, index) => (
            <div key={index}>
              <Image
                src={img.url}
                alt={product.name}
                className="object-contain"
                width={1000}
                height={300}
                sizes="100vh"
              />
            </div>
          ))}
        </div>
        {/* Sessao infos do produto */}
        <div className="flex flex-col gap-2 px-8 py-8 md:w-1/2 md:py-0">
          <div className="flex">
            <h1 className="text-lg">{product.name}</h1>
            <Image
              className="ml-4"
              src="/assets/heart.svg"
              alt="icone de favorito"
              width={24}
              height={24}
            />
          </div>
          <span className="font-bold">{product.price.formattedValue}</span>
          <DividerLine />
          <h2>Tamanho</h2>
          <div className="flex justify-center gap-2 px-4 py-2">
            {product.sizesAvailabilityInfo.map((size, index) => (
              <button
                onClick={() => toggleSelectedSize(index)}
                key={index}
                className={`h-12 w-12 ${selectedSize === index ? "rounded-full border border-black" : ""}`}
              >
                {size.size}
              </button>
            ))}
          </div>
          <DividerLine />
          <div className="flex flex-col gap-2 text-sm">
            <button className="w-full rounded-full border border-black py-4 uppercase">
              adicionar à sacola
            </button>
            <button className="w-full rounded-full bg-emerald-600 py-4 uppercase text-white">
              comprar agora
            </button>
          </div>
          <DividerLine />
          <div className="flex flex-col gap-2">
            <span>Por que apostar?</span>
            <p className="text-xs">
              Com uma pegada urbana e descolada, os sapatos tratorados são
              tendência na estação e prometem modernizar qualquer look.
            </p>
          </div>
          <DividerLine />
          <div className="flex flex-col gap-2">
            <span>Datalhes do produto</span>
            <div className="text-xs">
              <p>
                <span className="font-bold">Material:</span> Couro com elástico
                na lateral e solado de borracha
              </p>
              <p>
                <span className="font-bold">Cor:</span> {product.colorName}
              </p>
              <p>
                <span className="font-bold">Tamanho do Salto:</span> 5 cm
              </p>
              <p className="py-6">
                <span className="font-bold">Descrição:</span>{" "}
                {product.description}
              </p>
              <p>
                <span className="font-bold">Referência:</span>{" "}
                {product.legacySKU}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

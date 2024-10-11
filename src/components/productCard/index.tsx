import { Product } from "@/types/products";
import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  product: Product;
  isPDC?: boolean;
}

export default function ProductCard({ product, isPDC }: ProductCardProps) {
  return (
    <Link href={`/p/${product.code}`} className="w-full max-w-full pb-8">
      <div className="relative aspect-[390/545] w-full">
        {isPDC && (
          <div className="absolute right-0 top-0 z-10">
            <div className="flex gap-2 p-6">
              <Image
                src="/assets/bag.svg"
                width={24}
                height={24}
                alt="icone de sacola na pdc"
              />
              <Image
                src="/assets/heart.svg"
                width={24}
                height={24}
                alt="icone de favorito na pdc"
              />
            </div>
          </div>
        )}
        <Image
          className="object-cover"
          src={product.images[1].url}
          alt={product.name}
          fill
          sizes="100vw"
        />
      </div>
      <div className="flex items-center justify-between gap-2 px-4 py-4">
        <h3 className="truncate text-ellipsis text-xs">{product.name}</h3>
        <p className="text-nowrap text-xs font-bold">
          {product.price.formattedValue}
        </p>
      </div>
    </Link>
  );
}

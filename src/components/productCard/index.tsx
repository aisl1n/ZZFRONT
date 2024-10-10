import { Product } from "@/types/products";
import Image from "next/image";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="w-full max-w-[391px]">
      <div className="relative aspect-[390/545] w-full">
        <Image
          className="object-cover"
          src={product.images[1].url}
          alt={product.name}
          fill
          sizes="100vw"
        />
      </div>
      <div className="mx-4 flex items-center justify-between py-4">
        <h3 className="max-w-[60%] truncate text-ellipsis text-center text-xs">
          {product.name}
        </h3>
        <p className="text-center text-xs font-bold">
          {product.price.formattedValue}
        </p>
      </div>
    </div>
  );
}

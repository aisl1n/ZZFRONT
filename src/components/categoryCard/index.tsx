import { Category } from "@/types/products";
import Image from "next/image";

interface CategoryCardProps {
  category: Category;
}

export default function CategoryCard({ category }: CategoryCardProps) {
  return (
    <div className="flex flex-shrink-1 flex-col items-center rounded-md border-2 p-4">
      <div className="relative h-36 w-32">
        <Image
          src={category.imageUrl}
          alt={category.title}
          fill
          className="object-contain"
        />
      </div>
      <h3 className="mt-1 text-center font-light uppercase tracking-widest text-gray-600">
        {category.title}
      </h3>
    </div>
  );
}

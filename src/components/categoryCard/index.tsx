import { Category } from "@/types/products";
import Image from "next/image";

interface CategoryCardProps {
  category: Category;
}

export default function CategoryCard({ category }: CategoryCardProps) {
  return (
    <div>
      <div>
        <Image
          className="object-cover"
          src={category.imageUrl}
          alt={category.title}
          width={100}
          height={100}
        />
      </div>
      <div className="mx-4 flex items-center justify-between py-4">
        <h3 className="text-center text-xs uppercase font-light">{category.title}</h3>
      </div>
    </div>
  );
}

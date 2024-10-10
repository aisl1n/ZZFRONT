import Image from "next/image";
import React from "react";

interface FilterButtonProps {
  onclick: () => void;
  label: string;
  iconSrc: string;
  iconAlt: string;
  className: string;
}

export default function FilterButton({
  onclick,
  label,
  iconSrc,
  iconAlt,
  className,
}: FilterButtonProps) {
  return (
    <>
      <button
        className="flex cursor-pointer items-center justify-between"
        onClick={() => onclick()}
      >
        <span className="py-2">{label}</span>
        <Image
          src={iconSrc}
          alt={iconAlt}
          width={24}
          height={24}
          className={className}
        />
      </button>
    </>
  );
}

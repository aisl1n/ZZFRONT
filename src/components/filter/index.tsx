import Image from "next/image";
import { useState } from "react";
import { Product } from "@/types/products";
import DividerLine from "../dividerLine";
import FilterBadge from "../filterBadge";
import FilterButton from "../filterButton";
import { FILTER } from "./constants";

const { LABEL, BUTTON_OPEN_LABEL, BUTTON_CLOSE_LABEL, BUTTON_OPEN_ALT } =
  FILTER;
const { CATEGORY, SIZE } = BUTTON_OPEN_LABEL;

interface FilterProps {
  toggleFilterOpen: () => void;
  productsData: Product[];
  showSideBar?: boolean;
}

export default function Filter({
  toggleFilterOpen,
  productsData,
  showSideBar,
}: FilterProps) {
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  const toggleAccordionOpen = (accordion: string) => {
    setOpenAccordion(openAccordion === accordion ? null : accordion);
  };

  return (
    <div
      className={`absolute left-0 z-20 h-screen w-2/3 bg-white shadow-md transition-transform duration-300 md:w-1/4 ${showSideBar ? "translate-x-0" : "-translate-x-full"}`}
    >
      <div className="px-8 py-4">
        <div className="flex justify-between">
          <span className="pb-2">{LABEL}</span>
          <button onClick={toggleFilterOpen}>
            <Image
              src="/assets/close.svg"
              width={24}
              height={24}
              alt={BUTTON_CLOSE_LABEL}
            />
          </button>
        </div>
        <DividerLine />
        <div className="flex flex-col">
          <FilterButton
            label={CATEGORY}
            iconSrc="/assets/arrow.svg"
            iconAlt={BUTTON_OPEN_ALT}
            onclick={() => toggleAccordionOpen("category")}
            className={`${openAccordion === "category" ? "rotate-180 duration-300" : "rotate-0 duration-300"}`}
          />
          {openAccordion === "category" && (
            <div className="flex flex-wrap gap-2 py-4">
              {productsData[0].categories.map((category, index) => (
                <FilterBadge key={index} label={category.code ?? ""} />
              ))}
            </div>
          )}
        </div>
        <DividerLine />
        <div className="flex flex-col">
          <FilterButton
            label={SIZE}
            iconSrc="/assets/arrow.svg"
            iconAlt={BUTTON_OPEN_ALT}
            onclick={() => toggleAccordionOpen("size")}
            className={`${openAccordion === "size" ? "rotate-180 duration-300" : "rotate-0 duration-300"}`}
          />
          {openAccordion === "size" && (
            <div className="flex flex-wrap gap-2 py-4">
              {productsData[0].sizesAvailabilityInfo.map((size, index) => (
                <FilterBadge key={index} label={size.size} />
              ))}
            </div>
          )}
        </div>
        <DividerLine />
      </div>
    </div>
  );
}

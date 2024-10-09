import React from "react";
import { PROMO } from "./constants";

const { HEADER, MESSAGE } = PROMO;

export default function BannerPromotion() {
  return (
    <div className="flex min-h-10 w-full items-center justify-center bg-black text-xs uppercase text-white">
      <p className="text-center">
        <span className="m-1 font-bold">{HEADER}</span>
        {MESSAGE}
      </p>
    </div>
  );
}

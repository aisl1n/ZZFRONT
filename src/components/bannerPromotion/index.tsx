import React from "react";
import { PROMO_HEADER, PROMO_MESSAGE } from "./constants";

export default function BannerPromotion() {
  return (
    <div className="flex min-h-10 w-full items-center justify-center bg-black text-xs uppercase text-white">
      <p className="text-center">
        <span className="m-1 font-bold">{PROMO_HEADER}</span>
        {PROMO_MESSAGE}
      </p>
    </div>
  );
}

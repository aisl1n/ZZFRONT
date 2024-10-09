import Image from "next/image";
import { BANNER, BANNER_BUTTON_LABEL } from "./constants";

export default function BannerCarousel() {
  return (
    <>
      <div className="relative h-screen w-screen">
        <Image
          src={BANNER.imageUrl}
          alt={BANNER.alt}
          fill
          className="object-cover"
        />
        <button className="absolute bottom-4 left-1/2 my-6 -translate-x-1/2 transform rounded-full border px-4 py-4 text-white">
          {BANNER_BUTTON_LABEL}
        </button>
      </div>
    </>
  );
}

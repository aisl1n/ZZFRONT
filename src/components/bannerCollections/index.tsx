import Image from "next/image";
import {
  BANNER,
  BANNER_LIVIAAREZZO,
  COLLECTION_BUTTON_LABEL,
  COLLECTION_HASHTAG,
  COLLECTION_INFO,
  COLLECTION_TITLE,
} from "./constants";

export default function BannerCollections() {
  return (
    <div className="mx-10 my-10 h-auto w-fit justify-center gap-1 md:mx-20 lg:flex">
      <div className="flex max-h-full flex-col">
        <div className="flex-1">
          <p className="text-xs">{COLLECTION_TITLE}</p>
          <h2 className="text-2xl">{COLLECTION_HASHTAG}</h2>
        </div>
        <div className="relative h-[330px] w-[300px] md:h-[400px] md:w-[438px]">
          <Image
            src={BANNER_LIVIAAREZZO.imageUrl}
            alt={BANNER_LIVIAAREZZO.alt}
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="relative h-[330px] w-[300px] md:h-[592px] md:w-[437px]">
        <Image
          src={BANNER.imageUrl}
          alt={BANNER.alt}
          fill
          className="object-cover"
        />
      </div>

      <div className="my-4 md:mx-4 md:flex">
        <div className="flex flex-col justify-end gap-4">
          <p>{COLLECTION_INFO}</p>
          <div>
            <button className="none flex w-auto rounded-full bg-black p-4 capitalize text-white">
              {COLLECTION_BUTTON_LABEL}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

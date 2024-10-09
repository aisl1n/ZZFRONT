import Image from "next/image";
import { BANNER, BANNER_LIVIAAREZZO, COLLECTION } from "./constants";

const { TITLE, HASHTAG, INFO, BUTTON_LABEL } = COLLECTION;

export default function BannerCollections() {
  return (
    <div className="mx-20 my-16 grid gap-2 md:mx-36 lg:grid-cols-[1fr_1fr_auto]">
      <div className="flex flex-col justify-between gap-4">
        <div>
          <p className="text-xs">{TITLE}</p>
          <h2 className="text-2xl">{HASHTAG}</h2>
        </div>
        <div className="relative aspect-[438/400] w-full">
          <Image
            src={BANNER_LIVIAAREZZO.imageUrl}
            alt={BANNER_LIVIAAREZZO.alt}
            fill
            className="object-cover"
          />
        </div>
      </div>
      <div className="relative aspect-[437/592] w-full">
        <Image
          src={BANNER.imageUrl}
          alt={BANNER.alt}
          fill
          className="object-cover"
        />
      </div>
      <div className="flex max-w-full flex-col items-start justify-end gap-4">
        <p className="whitespace-normal">{INFO}</p>
        <button className="w-fit rounded-full bg-black p-4 capitalize text-white">
          {BUTTON_LABEL}
        </button>
      </div>
    </div>
  );
}

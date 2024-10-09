import BannerCarousel from "@/components/bannerCarousel";
import BannerCollections from "@/components/bannerCollections";
import BannerPromotion from "@/components/bannerPromotion";

export default function Home() {
  return (
    <main>
      <BannerCarousel />
      <BannerPromotion />
      <section>
        <BannerCollections />
      </section>
    </main>
  );
}

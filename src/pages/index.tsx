import BannerCarousel from "@/components/bannerCarousel";
import BannerCollections from "@/components/bannerCollections";
import BannerPromotion from "@/components/bannerPromotion";
import RecommendedSection from "@/components/recommendedSection";
import { Product } from "@/types/products";
import { fetchProducts } from "@/utils";

interface HomeProps {
  productsData: Product[];
}

export default function Home({ productsData }: HomeProps) {
  return (
    <main>
      <BannerCarousel />
      <BannerPromotion />
      <section>
        <BannerCollections />
      </section>
      <RecommendedSection data={productsData} />
    </main>
  );
}

export async function getServerSideProps() {
  const productsData = await fetchProducts();

  return {
    props: {
      productsData,
    },
  };
}

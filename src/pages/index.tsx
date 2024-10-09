import BannerCarousel from "@/components/bannerCarousel";
import BannerCollections from "@/components/bannerCollections";
import BannerPromotion from "@/components/bannerPromotion";
import RecommendedSection from "@/components/recommendedSection";
import axios from "axios";

interface HomeProps {
  productsData: any[]; // Adjust the type according to your data structure
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

export async function getStaticProps() {
  let productsData = [];
  try {
    const res = await axios("http://localhost:3001/products");
    productsData = await res.data;
  } catch (error) {
    console.error("Error fetching products data:", error);
  }
  return {
    props: {
      productsData,
    },
  };
}

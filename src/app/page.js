import Banner from "@/components/banner/Banner";
import Featured from "@/components/featured/Featured";
import Hero from "@/components/hero/Hero";
import Latest from "@/components/latest/Latest";
import WhyUs from "@/components/why-us/WhyUs";
import HomeProduct from "@/components/productRender/HomeProduct";
import Banners from "@/components/banners/Banners";
export default function Home() {
  return (
    <>
      <Hero />
      <Banners />
      <HomeProduct />
      <Banner />
      <WhyUs />
      <Latest />
      <Featured />
    </>
  );
}

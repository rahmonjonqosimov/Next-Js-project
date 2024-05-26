import Banner from "@/components/banner/Banner";
import Featured from "@/components/featured/Featured";
import Hero from "@/components/hero/Hero";
import Latest from "@/components/latest/Latest";
import Products from "@/components/products/Products";
import WhyUs from "@/components/why-us/WhyUs";
import { getData } from "@/fetch";

export default async function Home() {
  const data = await getData(`/products?limit=8`);

  return (
    <>
      <Hero />
      <Products data={data} />
      <Banner />
      <WhyUs />
      <Latest />
      <Featured />
    </>
  );
}

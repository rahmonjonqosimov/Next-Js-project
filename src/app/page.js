import Hero from "@/components/hero/Hero";
import Products from "@/components/products/Products";
import { getData } from "@/fetch";

export default async function Home() {
  const data = await getData(`/products?limit=8`);

  return (
    <>
      <Hero />
      <Products data={data} />
    </>
  );
}

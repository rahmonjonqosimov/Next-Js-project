"use client";
import Banner from "@/components/banner/Banner";
import Featured from "@/components/featured/Featured";
import Hero from "@/components/hero/Hero";
import Latest from "@/components/latest/Latest";
import WhyUs from "@/components/why-us/WhyUs";
import HomeProduct from "@/components/productRender/HomeProduct";
import Banners from "@/components/banners/Banners";
import { PageWrapper } from "./page-wrapper";
import { ToastContainer } from "react-toastify";
export default function Home() {
  return (
    <>
      <PageWrapper>
        <Hero />
        <Banners />
        <HomeProduct />
        <Banner />
        <WhyUs />
        <Latest />
        <Featured />
      </PageWrapper>
    </>
  );
}

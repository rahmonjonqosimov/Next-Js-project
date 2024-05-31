"use client";
import React, { memo } from "react";
import star from "@/assets/images/star.svg";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
import { useGetProductsQuery } from "@/lib/productApi";
import Link from "next/link";
const Featured = () => {
  const { data } = useGetProductsQuery({ params: "?limit=20", path: "" });

  return (
    <section className="featured">
      <div className="container">
        <h1 className="featured__title">FEATURED PRODUCTS</h1>
        <Swiper
          slidesPerView={10}
          spaceBetween={10}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          // pagination={{
          //   clickable: true,
          // }}
          breakpoints={{
            300: {
              slidesPerView: 1.5,
              spaceBetween: 20,
            },
            400: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          {data?.map((el) => (
            <SwiperSlide key={el.id}>
              <div className="featured__card">
                <Link href={`/product/${el.id}`}>
                  <Image
                    alt="Buts"
                    style={{ objectFit: "contain" }}
                    width={154}
                    height={154}
                    src={el.image}
                  />
                </Link>
                <div className="text">
                  <h4 title={el.title} className="ell">
                    {el.title}
                  </h4>
                  <Image alt="Star" width={"100%"} height={"100%"} src={star} />
                  <div className="price">
                    <h3>${el.price}</h3>
                    <span>${el.price + 100}</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="featured__wrapper"></div>
        <div className="search">
          <input type="text" placeholder="Search query..." required />
          <button>Search</button>
        </div>
      </div>
    </section>
  );
};

export default memo(Featured);

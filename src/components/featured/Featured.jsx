"use client";
import React from "react";
import img from "@/assets/images/buts.svg";
import star from "@/assets/images/star.svg";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination } from "swiper/modules";
import img1 from "@/assets/images/home-banner-1.png";
import img2 from "@/assets/images/home-banner-2.png";
import img3 from "@/assets/images/home-banner-3.png";

const Featured = () => {
  const item = [
    {
      id: 1,
      title: "FS - QUILTED MAXI CROSS BAG",
      url: img1,
      price: 499,
    },
    {
      id: 2,
      title: "FS - Nike Air Max 270 React...",
      url: img2,
      price: 199,
    },
    {
      id: 3,
      title: "Blue Swade Nike Sneakers",
      url: img3,
      price: 299,
    },
    {
      id: 4,
      title: "Blue Swade Nike Sneakers",
      url: img1,
      price: 399,
    },
    {
      id: 5,
      title: "FS - QUILTED MAXI CROSS BAG",
      url: img1,
      price: 499,
    },
  ];

  return (
    <section className="featured">
      <div className="container">
        <h1 className="featured__title">FEATURED PRODUCTS</h1>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          loop={true}
          autoplay={{
            delay: 2500,
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
          {item?.map((el) => (
            <SwiperSlide key={el.id}>
              <div className="featured__card">
                <Image alt="Buts" width={154} height={154} src={el.url} />
                <div className="text">
                  <h4>{el.title}</h4>
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

export default Featured;

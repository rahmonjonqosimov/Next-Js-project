"use client";
import React, { memo, useState } from "react";
import bannerImage from "@/assets/images/banner image.png";
import Image from "next/image";

const Banner = () => {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <section className="banner">
      <div className="container">
        <div className="banner__content">
          <div className="banner__text">
            <h1 className="banner__title">Adidas Men Running Sneakers</h1>
            <p className="banner__desc">
              Performance and design. Taken right to the edge.
            </p>
            <a href="">ShOP NOW</a>
          </div>
          <Image
            alt="Banner image"
            width={600}
            height={600}
            src={bannerImage}
            className={`${isLoading ? "img_loading" : "img_loading_disabled"}`}
            onLoadingComplete={() => setIsLoading(false)}
            priority={true}
          />
        </div>
      </div>
    </section>
  );
};

export default memo(Banner);

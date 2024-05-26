import React from "react";
import bannerImage from "@/assets/images/banner image.png";
import Image from "next/image";

const Banner = () => {
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
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;

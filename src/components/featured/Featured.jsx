import React from "react";
import img from "@/assets/images/buts.svg";
import star from "@/assets/images/star.svg";
import Image from "next/image";

const Featured = () => {
  const item = {
    id: 1,
    title: "Blue Swade Nike Sneakers",
    url: img,
  };

  return (
    <section className="featured">
      <div className="container">
        <h1 className="featured__title">FEATURED PRODUCTS</h1>
        <div className="featured__wrapper">
          {Array(3)
            .fill("")
            .map((_, inx) => (
              <div className="featured__card">
                <Image alt="Buts" width={154} height={154} src={item.url} />
                <div className="text">
                  <h4>{item.title}</h4>
                  <Image alt="Star" width={"100%"} height={"100%"} src={star} />
                  <div className="price">
                    <h3>$499</h3>
                    <span>$599</span>
                  </div>
                </div>
              </div>
            ))}
        </div>
        <div className="search">
          <input type="text" placeholder="Search query..." required />
          <button>Search</button>
        </div>
      </div>
    </section>
  );
};

export default Featured;

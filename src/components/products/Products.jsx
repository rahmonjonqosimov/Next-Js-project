"use client";
import Image from "next/image";
import React from "react";
import { FaStar, FaRegStar } from "react-icons/fa";
import {
  IoCart,
  IoCartOutline,
  IoHeartOutline,
  IoHeartSharp,
} from "react-icons/io5";
import Link from "next/link";

const Products = ({ data }) => {
  const product = data?.map((el) => (
    <div key={el.id} className="product__card">
      <div className="product__img">
        <Link href={`/product/${el.id}`}>
          <Image alt={el.title} width={300} height={270} src={el.image} />
        </Link>
        <div className="wishes--cart">
          <button>
            <IoHeartOutline />
            {/* <IoHeartSharp /> */}
          </button>
          <button>
            <IoCartOutline />
            {/* <IoCart /> */}
          </button>
        </div>
      </div>
      <div className="product__about">
        <h3 title={el.title} className="product__title">
          {el.title}
        </h3>
        <div className="product__rating">
          {Array(5)
            .fill("")
            .map((_, inx, arr) => {
              if (arr.length <= Math.round(el.rating.rate)) {
                return <FaStar key={inx} className="product__star" />;
              }
              return <FaRegStar key={inx} className="product__star" />;
            })}
        </div>
        <div className="product__price">
          <h4>${el.price}</h4>
          <span> ${Math.round(el.price * 1.24)}</span>
          <p>24 % Off</p>
        </div>
      </div>
    </div>
  ));

  return (
    <section className="product">
      <div className="container">
        <div className="product__wrapper">{product}</div>
      </div>
    </section>
  );
};

export default Products;

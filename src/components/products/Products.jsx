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
import { IoEyeOutline } from "react-icons/io5";

import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { incLimit } from "@/lib/features/limit/limitSlice";
import Skeleton from "../skeleton/Skeleton";
import { toggleHeart } from "@/lib/features/heart/heartSlice";
import { cetegorySort } from "@/lib/features/product-category/productCategorySlice";

import { addToCart } from "@/lib/features/cart/cartSlice";

const Products = ({ data, isLoading, title, btn, category, url }) => {
  const dispatch = useDispatch();
  const wishes = useSelector((s) => s.heart.value);
  const cart = useSelector((s) => s.cart.value);
  const product = data?.map((el) => (
    <div key={el.id} className="product__card">
      <div className="product__img">
        <Link href={`/product/${el.id}`}>
          <Image alt={el.title} width={300} height={270} src={el.image} />
        </Link>
        <div className="wishes--cart">
          <button onClick={() => dispatch(toggleHeart(el))}>
            {wishes.some((item) => item.id === el.id) ? (
              <IoHeartSharp style={{ color: "#40bfff" }} />
            ) : (
              <IoHeartOutline />
            )}
          </button>
          <button onClick={() => dispatch(addToCart(el))}>
            {cart.some((item) => item.id === el.id) ? (
              <IoCart style={{ color: "#40bfff" }} />
            ) : (
              <IoCartOutline />
            )}
          </button>
          <button>
            <Link href={`/product/${el.id}`}>
              <IoEyeOutline />
            </Link>
          </button>
        </div>
      </div>
      <div className="product__about">
        <Link href={`/product/${el.id}`}>
          <h3 title={el.title} className="product__title">
            {el.title}
          </h3>
        </Link>
        <div className="product__rating">
          {Array(Math.round(el.rating.rate))
            .fill("")
            .map((_, inx) => (
              <FaStar key={inx} className="product__star" />
            ))}
          {Array(5 - Math.round(el.rating.rate))
            .fill("")
            .map((_, inx) => (
              <FaRegStar key={inx} className="product__star" />
            ))}
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
        <h2 className="title">{title}</h2>
        {url ? (
          <div className="horizontal-menu">
            <div className="btns">
              <button onClick={() => dispatch(cetegorySort("all"))}>All</button>
              {category?.map((el, inx) => (
                <button key={inx} onClick={() => dispatch(cetegorySort(el))}>
                  {el[0].toUpperCase() + el.slice(1)}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <></>
        )}
        <div className="product__wrapper">{product}</div>
        {isLoading ? <Skeleton /> : <></>}
        {btn ? (
          <div className="see__more">
            <button onClick={() => dispatch(incLimit(1))}>
              {isLoading ? "Loading..." : "Load More"}
            </button>
          </div>
        ) : (
          <></>
        )}
      </div>
    </section>
  );
};

export default Products;

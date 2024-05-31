"use client";
import Image from "next/image";
import React, { useEffect } from "react";
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
import { motion } from "framer-motion";
import { PageWrapper } from "@/app/page-wrapper";
import { toast } from "react-toastify";
const variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const images = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const Products = ({ data, isLoading, title, btn, category, url }) => {
  const productCategory = useSelector((state) => state.category.value);

  // WISHES //////////////////////////
  let wishlist = useSelector((state) => state.heart.value);
  let cart = useSelector((state) => state.cart.value);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(addToCart(JSON.parse(localStorage.getItem("cart")) || []));
    dispatch(toggleHeart(JSON.parse(localStorage.getItem("wishlist")) || []));
  }, []);
  const handleLike = (product) => {
    let index = wishlist.findIndex((el) => el.id === product.id);
    let result = null;
    if (index < 0) {
      result = [...wishlist, product];
    } else {
      result = wishlist.filter((el) => el.id !== product.id);
    }
    dispatch(toggleHeart(result));
    localStorage.setItem("wishlist", JSON.stringify(result));
  };
  /////////////////////////////////////////////

  // ////////   CART ///////////////////

  const handleCart = (product) => {
    let index = cart.findIndex((el) => el.id === product.id);
    let result = cart;
    if (index < 0) {
      result = [...cart, { ...product, quantity: 1 }];
    }
    dispatch(addToCart(result));
    localStorage.setItem("cart", JSON.stringify(result));
  };

  ///////////////////////////

  // const dispatch = useDispatch();
  // const wishes = useSelector((s) => s.heart.value);
  // const cart = useSelector((s) => s.cart.value);
  const product = data?.map((el) => (
    <motion.div variants={images} key={el.id} className="product__card">
      <div className="product__img">
        <Link href={`/product/${el.id}`}>
          <Image alt={el.title} width={300} height={270} src={el.image} />
        </Link>
        <div className="wishes--cart">
          <button onClick={() => handleLike(el)}>
            {wishlist.some((item) => item.id === el.id) ? (
              <IoHeartSharp style={{ color: "#40bfff" }} />
            ) : (
              <IoHeartOutline />
            )}
          </button>
          <button
            disabled={cart.some((item) => item.id === el.id)}
            onClick={() => {
              handleCart(el), toast.success("Add to Cart");
            }}
          >
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
    </motion.div>
  ));

  return (
    <>
      <section className="product">
        <div className="container">
          <h2 className="title">{title}</h2>
          {url ? (
            <div className="horizontal-menu">
              <div className="btns">
                <button
                  style={{
                    color: "all" === productCategory ? "#41BFFF" : "#22262A",
                  }}
                  onClick={() => dispatch(cetegorySort("all"))}
                >
                  All
                </button>
                {category?.map((el, inx) => (
                  <button
                    key={inx}
                    style={{
                      color: el === productCategory ? "#41BFFF" : "#22262A",
                    }}
                    onClick={() => dispatch(cetegorySort(el))}
                  >
                    {el[0].toUpperCase() + el.slice(1)}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <></>
          )}
          <PageWrapper>
            <motion.div
              variants={variants}
              initial="hidden"
              animate="show"
              className="product__wrapper"
            >
              {product}
            </motion.div>
          </PageWrapper>
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
    </>
  );
};

export default Products;

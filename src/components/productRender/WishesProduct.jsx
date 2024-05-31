"use client";
import React, { memo } from "react";
import Products from "../products/Products";
import { useSelector } from "react-redux";
import EmptyCart from "../empty-cart/EmptyCart";
import img from "@/assets/images/heart-bubble.svg";

const WishesProduct = () => {
  const wishes = useSelector((s) => s.heart.value);
  return (
    <>
      {wishes.length ? (
        <Products data={wishes} title={"Wishlist"} btn={false} />
      ) : (
        <EmptyCart title={"No favorite products."} img={img} />
      )}
    </>
  );
};

export default memo(WishesProduct);

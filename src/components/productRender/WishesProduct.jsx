"use client";
import React from "react";
import Products from "../products/Products";
import { useSelector } from "react-redux";

const WishesProduct = () => {
  const wishes = useSelector((s) => s.heart.value);
  return (
    <div>
      <Products data={wishes} title={"Wishlist"} btn={false} />
    </div>
  );
};

export default WishesProduct;

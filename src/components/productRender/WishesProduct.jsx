"use client";
import React, { memo } from "react";
import Products from "../products/Products";
import { useSelector } from "react-redux";
import EmptyCart from "../empty-cart/EmptyCart";
import img from "@/assets/images/heart-bubble.svg";
import Link from "next/link";

const WishesProduct = () => {
  const wishes = useSelector((s) => s.heart.value);
  console.log(wishes);
  return (
    <>
      <div className="path">
        <div className="url">
          <Link href={"/"}>Home / </Link>
          <Link style={{ color: "#262626" }} href={"/wishlist"}>
            Wishlist
          </Link>
        </div>
      </div>
      {wishes.length ? (
        <Products data={wishes} title={"Wishlist"} btn={false} />
      ) : (
        <EmptyCart title={"No favorite products."} img={img} />
      )}
    </>
  );
};

export default memo(WishesProduct);

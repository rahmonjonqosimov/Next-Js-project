"use client";
import React, { memo, useEffect } from "react";
import Products from "../products/Products";
import { useDispatch, useSelector } from "react-redux";
import EmptyCart from "../empty-cart/EmptyCart";
import img from "@/assets/images/heart-bubble.svg";
import Link from "next/link";
import { toggleHeart } from "@/lib/features/heart/heartSlice";

const WishesProduct = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(toggleHeart(JSON.parse(localStorage.getItem("wishlist")) || []));
  }, []);
  const wishes = useSelector((s) => s.heart.value);
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

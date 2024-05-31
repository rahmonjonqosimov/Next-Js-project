"use client";
import Image from "next/image";
import React, { useEffect, useState, memo } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { useSelector, useDispatch } from "react-redux";
import {
  incrementCart,
  decrementCart,
  removeFromCart,
  addToCart,
} from "@/lib/features/cart/cartSlice";
import { AiOutlineDelete, AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { toggleHeart } from "@/lib/features/heart/heartSlice";
import Checkout from "../checkout/Checkout";

const CartContent = () => {
  const [checkout, setCheckout] = useState(false);

  const dispatch = useDispatch();
  // WISHES //////////////////////////
  let wishlist = useSelector((state) => state.heart.value);
  const cart = useSelector((s) => s.cart.value);

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

  //////////////////////////////////
  const removeCart = (product) => {
    let result = cart.filter((i) => i.id !== product.id);
    dispatch(removeFromCart(result));
    localStorage.setItem("cart", JSON.stringify(result));
  };
  //////////////////////////////

  const inc = (product) => {
    let index = cart.findIndex((el) => el.id === product.id);
    let result = cart;
    result = cart.map((item, inx) =>
      inx === index ? { ...item, quantity: item.quantity + 1 } : item
    );
    dispatch(incrementCart(result));
    localStorage.setItem("cart", JSON.stringify(result));
  };
  ////////////////////////////////////////////
  const dec = (product) => {
    let index = cart.findIndex((el) => el.id === product.id);
    let result = cart;
    result = cart.map((item, inx) =>
      inx === index ? { ...item, quantity: item.quantity - 1 } : item
    );
    dispatch(decrementCart(result));
    localStorage.setItem("cart", JSON.stringify(result));
  };
  ///////////////////////////////////////////
  const total = cart.reduce(
    (sum, el) => sum + el.quantity * Math.round(el.price),
    0
  );
  const cartItem = cart?.map((el) => (
    <div key={el.id}>
      <div className="hr"></div>
      <div className="cart__wrapper">
        <div className="products__item">
          <button onClick={() => removeCart(el)}>
            <IoCloseOutline />
          </button>
          <Image alt={el.title} width={140} height={94} src={el.image} />
          <h4 title={el.title}>{el.title}</h4>
        </div>
        <div className="price">${Math.round(el.price) * el.quantity}</div>
        <div className="media">
          <div className="media__cart">
            <h4 title={el.title}>{el.title}</h4>
            <div className="buttons">
              <button onClick={() => handleLike(el)}>
                {wishlist.some((item) => item.id === el.id) ? (
                  <AiFillHeart style={{ color: "#40bfff" }} />
                ) : (
                  <AiOutlineHeart />
                )}
              </button>
              <button onClick={() => removeCart(el)}>
                <AiOutlineDelete />
              </button>
            </div>
          </div>

          <div className="bottom">
            <p className="narx">${Math.round(el.price) * el.quantity}</p>
            <div className="qty">
              <button disabled={el.quantity <= 1} onClick={() => dec(el)}>
                -
              </button>
              <span>{el.quantity}</span>
              <button disabled={el.quantity >= 10} onClick={() => inc(el)}>
                +
              </button>
            </div>
          </div>
        </div>
        <div className="unit__price">${Math.round(el.price)}</div>
      </div>
    </div>
  ));
  useEffect(() => {
    checkout
      ? (document.querySelector("body").style.overflow = "hidden")
      : (document.querySelector("body").style.overflow = "auto");
  }, [checkout]);
  return (
    <>
      {cart ? (
        <div className="cart">
          <div className="container">
            <div className="cart__path">
              <h2 className="title">PRODUCT</h2>
              <h2 className="price">PRICE</h2>
              <h2 className="qty">QTY</h2>
              <h2 className="unit__price">UNIT PRICE</h2>
            </div>
            {cartItem}
            <div className="hr"></div>
            <div className="check">
              <div className="vaucher">
                <input placeholder="Voucher code" type="text" name="" id="" />
                <button>Redeem</button>
              </div>
              <div className="checkout">
                <div className="row">
                  <p>Subtotal</p>
                  <p>${total}</p>
                </div>
                <div className="row">
                  <p>Shipping fee</p>
                  <p>{total ? "$20" : "$0"}</p>
                </div>
                <div className="row">
                  <p>Coupon</p>
                  <p>$0</p>
                </div>
                <div className="hr"></div>
                <div className="row">
                  <h3>TOTAL</h3>
                  <h3>${total ? total + 20 : "0"}</h3>
                </div>
                <button onClick={() => setCheckout(true)}>Check out</button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}

      {checkout ? (
        <>
          <Checkout setCheckout={setCheckout} />
          <div
            onClick={() => setCheckout(false)}
            className="cart__owerley"
          ></div>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default memo(CartContent);

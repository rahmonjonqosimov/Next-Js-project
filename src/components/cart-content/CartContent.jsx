"use client";
import Image from "next/image";
import React, { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { useSelector, useDispatch } from "react-redux";
import {
  incrementCart,
  decrementCart,
  removeFromCart,
} from "@/lib/features/cart/cartSlice";
import { AiOutlineDelete, AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { toggleHeart } from "@/lib/features/heart/heartSlice";
import Checkout from "../checkout/Checkout";

const CartContent = () => {
  const [checkout, setCheckout] = useState(false);
  const dispatch = useDispatch();
  const cart = useSelector((s) => s.cart.value);
  const wishes = useSelector((s) => s.heart.value);
  const total = cart.reduce(
    (sum, el) => sum + el.quantity * Math.round(el.price),
    0
  );
  const cartItem = cart?.map((el) => (
    <div key={el.id}>
      <div className="hr"></div>
      <div className="cart__wrapper">
        <div className="products__item">
          <button onClick={() => dispatch(removeFromCart(el))}>
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
              <button onClick={() => dispatch(toggleHeart(el))}>
                {wishes.some((item) => item.id === el.id) ? (
                  <AiFillHeart style={{ color: "#40bfff" }} />
                ) : (
                  <AiOutlineHeart />
                )}
              </button>
              <button onClick={() => dispatch(removeFromCart(el))}>
                <AiOutlineDelete />
              </button>
            </div>
          </div>

          <div className="bottom">
            <p className="narx">${Math.round(el.price) * el.quantity}</p>
            <div className="qty">
              <button
                disabled={el.quantity <= 1}
                onClick={() => dispatch(decrementCart(el))}
              >
                -
              </button>
              <span>{el.quantity}</span>
              <button
                disabled={el.quantity >= 10}
                onClick={() => dispatch(incrementCart(el))}
              >
                +
              </button>
            </div>
          </div>
        </div>
        <div className="unit__price">${Math.round(el.price)}</div>
      </div>
    </div>
  ));
  checkout
    ? (document.querySelector("body").style.overflow = "hidden")
    : (document.querySelector("body").style.overflow = "auto");
  return (
    <>
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

export default CartContent;

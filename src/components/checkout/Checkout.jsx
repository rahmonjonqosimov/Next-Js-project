"use client";
import React, { useState, memo } from "react";
import { MdClose } from "react-icons/md";
import { GoArrowLeft } from "react-icons/go";
import { deleteAllCart } from "@/lib/features/cart/cartSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
const initialState = {
  fname: "",
  lname: "",
  email: "",
  address: "",
  check: "",
  tel: "",
};

const BOT__TOKEN = "7176373143:AAFDmSo4--gn27ZOZTTY9ASyFr0SPuAC3mQ";

//  https://api.telegram.org/bot[your_token]/getUpdates
// https://api.telegram.org/bot[your_token]/sendMessage?chat_id=[your chat_id]
const CHAT__ID = "-4221355956";
const USER__ID = "5980648858";

const Checkout = ({ setCheckout, data }) => {
  const dispatch = useDispatch();
  const [user, setUser] = useState(initialState);
  const handleSubmit = (e) => {
    e.preventDefault();

    if (user.address.trim() && user.fname.trim() && user.tel.trim()) {
      let text = "User %0A%0A";
      text += `Fisrt Name: ${user.fname} %0A`;
      text += `Last Name: ${user.lname} %0A`;
      text += `Email: ${user.email} %0A`;
      text += `Address: ${user.address} %0A`;
      text += `Tel: ${user.tel} %0A%0A`;

      data?.map((el, inx) => {
        text += `Product ${inx + 1} %0A`;
        text += `Title: ${el.title} %0A`;
        text += `Quantity: ${el.quantity} %0A`;
        text += `Price: $${el.price} %0A%0A`;
      });

      const total = data?.reduce((sum, el) => sum + el.quantity * el.price, 0);
      text += `Total price: $${total} %0A%0A`;

      let url = `https://api.telegram.org/bot${BOT__TOKEN}/sendMessage?chat_id=${USER__ID}&text=${text}`;
      let api = new XMLHttpRequest();
      api.open("GET", url, true);
      api.send();
      setUser(initialState);
      toast.success("Adminga malumotlar jo'natildi!");
      setCheckout(false);
      dispatch(deleteAllCart());
      localStorage.removeItem("cart");
    } else {
      toast.warning("Formani to'ldiring");
    }
  };
  return (
    <div className="checkout__content">
      <div className="container">
        <form className="checkout__form">
          <div className="checkout__hero">
            <button type="button">
              <GoArrowLeft />
            </button>
            <button type="button" onClick={() => setCheckout(false)}>
              <MdClose />
            </button>
          </div>
          <h3>Make Payment</h3>
          <div className="checkout__inputs">
            {/* <div className="left__inputs inp"> </div> */}
            <input
              value={user.fname}
              onChange={(e) =>
                setUser((p) => ({ ...p, fname: e.target.value }))
              }
              required
              placeholder="First Name"
              type="text"
              name=""
              id=""
            />
            <input required placeholder="Last Name" type="text" name="" id="" />
            <input
              value={user.email}
              onChange={(e) =>
                setUser((p) => ({ ...p, email: e.target.value }))
              }
              required
              placeholder="Email Address"
              type="email"
              name=""
              id=""
            />
            <textarea
              value={user.address}
              onChange={(e) =>
                setUser((p) => ({ ...p, address: e.target.value }))
              }
              required
              placeholder="Address for Delivery"
              name=""
              rows={4}
              id=""
            ></textarea>
            <div className="check">
              <h2>Select Method of Payment</h2>
              <div className="row">
                <p>Credit Card Or Debit</p>
                <input
                  value={user.check}
                  onChange={(e) =>
                    setUser((p) => ({ ...p, check: e.target.value }))
                  }
                  required
                  type="radio"
                  name="radio"
                  id="card"
                />
              </div>
              <div className="row">
                <p>Paypal</p>
                <input required type="radio" name="radio" id="Paypal" />
              </div>
              <div className="row">
                <p>Bank Transfer</p>
                <input required type="radio" name="radio" id="Bank-Transfer" />
              </div>
            </div>
            {/* <div className="rigth__inputs inp"> </div> */}
            <input
              value={user.tel}
              onChange={(e) => setUser((p) => ({ ...p, tel: e.target.value }))}
              required
              placeholder="Mobile Phone"
              type="tel"
            />
          </div>
          <button type="submit" className="payment__btn" onClick={handleSubmit}>
            Go to Payment
          </button>
        </form>
      </div>
    </div>
  );
};

export default memo(Checkout);

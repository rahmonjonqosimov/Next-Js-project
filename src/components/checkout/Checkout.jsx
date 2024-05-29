"use client";
import React from "react";
import { MdClose, MdOutlineClose } from "react-icons/md";

import { GoArrowLeft } from "react-icons/go";

const Checkout = ({ setCheckout }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
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
              required
              placeholder="First Name"
              type="text"
              name=""
              id=""
            />
            <input required placeholder="Last Name" type="text" name="" id="" />
            <input
              required
              placeholder="Email Address"
              type="email"
              name=""
              id=""
            />
            <textarea
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
                <input required type="radio" name="radio" id="card" />
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
            <input required placeholder="Mobile Phone" type="tel" />
          </div>
          <button type="submit" className="payment__btn" onClick={handleSubmit}>
            Go to Payment
          </button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;

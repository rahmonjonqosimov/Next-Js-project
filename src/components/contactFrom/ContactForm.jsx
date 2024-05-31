"use client";
import Link from "next/link";
import React, { useState, memo } from "react";
import { toast } from "react-toastify";
const initialState = {
  fullname: "",
  email: "",
  message: "",
};
const BOT__TOKEN = "7176373143:AAFDmSo4--gn27ZOZTTY9ASyFr0SPuAC3mQ";

//  https://api.telegram.org/bot[your_token]/getUpdates
// https://api.telegram.org/bot[your_token]/sendMessage?chat_id=[your chat_id]
const CHAT__ID = "-4221355956";
const USER__ID = "5980648858";

const ContactForm = () => {
  const [user, setUser] = useState(initialState);
  console.log(user);
  const handleSubmit = (e) => {
    e.preventDefault();
    let text = "About %0A%0A";
    text += `Full-Name: ${user.fullname} %0A`;
    text += `Email: ${user.email} %0A`;
    text += `Message: ${user.message} %0A`;
    let url = `https://api.telegram.org/bot${BOT__TOKEN}/sendMessage?chat_id=${USER__ID}&text=${text}`;
    let api = new XMLHttpRequest();
    api.open("GET", url, true);
    api.send();
    setUser(initialState);
    toast.success("Adminga malumotlar jo'natildi!");
  };
  return (
    <section className="contact__form">
      <div className="path">
        <div className="url">
          <Link href={"/"}>Home / </Link>
          <Link style={{ color: "#262626" }} href={"/contact"}>
            Contact
          </Link>
        </div>
      </div>
      <div className="container">
        <div className="contact__form__content">
          <div className="about__contact">
            <h3>Get in touch</h3>
            <p>contact@e-comm.ng</p>
            <p>+234 4556 6665 34</p>
            <p>20 Prince Hakerem Lekki Phase 1, Lagos.</p>
          </div>
          <form onSubmit={handleSubmit} className="contact__form" action="">
            <label htmlFor="full-name">Fullname</label>
            <input
              required
              value={user.fullname}
              onChange={(e) =>
                setUser((p) => ({ ...p, fullname: e.target.value }))
              }
              type="text"
              name="full-name"
              id="full-name"
              placeholder="James Doe"
            />
            <label htmlFor="email">Email</label>
            <input
              required
              value={user.email}
              onChange={(e) =>
                setUser((p) => ({ ...p, email: e.target.value }))
              }
              type="email"
              name="email"
              id="email"
              placeholder="jamesdoe@gmail.com"
            />
            <label htmlFor="message">Message</label>
            <textarea
              required
              value={user.message}
              onChange={(e) =>
                setUser((p) => ({ ...p, message: e.target.value }))
              }
              rows={6}
              name="message"
              id="message"
              placeholder="Type your message"
            ></textarea>
            <button>Send</button>
          </form>
        </div>
        <div className="search">
          <input type="text" placeholder="Search query..." required />
          <button>Search</button>
        </div>
      </div>
    </section>
  );
};

export default memo(ContactForm);

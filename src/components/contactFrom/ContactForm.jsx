"use client";
import Link from "next/link";
import React from "react";
const ContactForm = () => {
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
          <form className="contact__form" action="">
            <label htmlFor="full-name">Fullname</label>
            <input
              type="text"
              name="full-name"
              id="full-name"
              placeholder="James Doe"
            />
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="jamesdoe@gmail.com"
            />
            <label htmlFor="message">Message</label>
            <textarea
              rows={6}
              name="message"
              id="message"
              placeholder="Type your message"
            ></textarea>
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

export default ContactForm;

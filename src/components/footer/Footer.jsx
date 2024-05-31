"use client";
import Image from "next/image";
import React, { useState, memo } from "react";
import logo from "@/assets/images/logo.svg";
import brand1 from "@/assets/images/brand1.svg";
import brand2 from "@/assets/images/brand2.svg";
import brand3 from "@/assets/images/brand3.svg";
import brand4 from "@/assets/images/brand4.svg";
import { IoMdClose } from "react-icons/io";

const Footer = () => {
  const item = [
    {
      id: 1,
      title: "Infomation",
    },
    {
      id: 2,
      title: "Service",
    },
    {
      id: 3,
      title: "My Account",
    },
    {
      id: 4,
      title: "Our Offers",
    },
  ];
  const [footer, setFooter] = useState(new Array(item.length).fill(false));
  const toggleLinks = (index) => {
    setFooter((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };
  const footerLinks = item?.map((el, index) => {
    const linkStyle = {
      display: footer[index] ? "block" : "none",
      transition: "opacity 0.2s ease-in-out",
    };

    const buttonStyle = {
      transform: footer[index] ? "rotate(0deg)" : "rotate(45deg)",
      transition: "transform 0.2s ease-in-out",
    };
    return (
      <ul key={el.id}>
        <h3>{el.title}</h3>
        <button
          onClick={() => toggleLinks(index)}
          style={buttonStyle}
          className={`footer__item`}
        >
          <IoMdClose />
        </button>
        <div style={linkStyle} className={`ul__item`}>
          <li>About Us</li>
          <li>Information</li>
          <li>Privacy Policy</li>
          <li>Terms & Conditions</li>
        </div>
      </ul>
    );
  });
  return (
    <section className="footer">
      <div className="container">
        <div className="footer__top">
          <div style={{ maxWidth: "221px" }} className="col">
            <Image alt="Logo" width={"100%"} height={"100%"} src={logo} />
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever.Since the 1500s, when an unknown printer.
            </p>
          </div>
          <div style={{ maxWidth: "200px" }} className="col">
            <h4>Follow Us</h4>
            <p>
              Since the 1500s, when an unknown printer took a galley of type and
              scrambled.
            </p>
          </div>
          <div style={{ maxWidth: "150px" }} className="col">
            <h4>Contact Us</h4>
            <p>E-Comm , 4578 Marmora Road, Glasgow D04 89GR</p>
          </div>
        </div>
        <div className="footer__center">{footerLinks}</div>
        <div className="footer__bottom">
          <div className="line"></div>
          <div className="bottom">
            <p>© 2018 Ecommerce theme by www.bisenbaev.com</p>
            <div className="brands">
              <Image alt="Brand" width={38} height={25} src={brand1} />
              <Image alt="Brand" width={38} height={25} src={brand2} />
              <Image alt="Brand" width={38} height={25} src={brand3} />
              <Image alt="Brand" width={38} height={25} src={brand4} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(Footer);

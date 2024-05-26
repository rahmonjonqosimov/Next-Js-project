import Image from "next/image";
import React from "react";
import logo from "@/assets/images/logo.svg";
import brand1 from "@/assets/images/brand1.svg";
import brand2 from "@/assets/images/brand2.svg";
import brand3 from "@/assets/images/brand3.svg";
import brand4 from "@/assets/images/brand4.svg";

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
  const footerLinks = item?.map((el) => (
    <ul key={el.id}>
      <h3>{el.title}</h3>
      <li>About Us</li>
      <li>Information</li>
      <li>Privacy Policy</li>
      <li>Terms & Conditions</li>
    </ul>
  ));
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

export default Footer;

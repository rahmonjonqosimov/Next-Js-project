import React from "react";
import img1 from "@/assets/images/shipping.svg";
import img2 from "@/assets/images/support.svg";
import img3 from "@/assets/images/Group 12.svg";
import Image from "next/image";

const WhyUs = () => {
  const item = [
    {
      id: 1,
      title: "FREE SHIPPING",
      img: img1,
    },
    {
      id: 2,
      title: "100% REFUND",
      img: img2,
    },
    {
      id: 3,
      title: "SUPPORT 24/7",
      img: img3,
    },
  ];
  const whyUseItems = item?.map((el) => (
    <div key={el.id} className="why__us__card">
      <Image alt={el.title} width={"100%"} height={"100%"} src={el.img} />
      <h4>{el.title}</h4>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>
    </div>
  ));
  return (
    <div className="why__us">
      <div className="container">
        <div className="why__us__content">{whyUseItems}</div>
      </div>
    </div>
  );
};

export default WhyUs;

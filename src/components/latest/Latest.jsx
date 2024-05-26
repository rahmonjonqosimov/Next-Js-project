import React from "react";
import img1 from "@/assets/images/Nike.svg";
import img2 from "@/assets/images/figma.svg";
import img3 from "@/assets/images/kronos.svg";
import Image from "next/image";

const Latest = () => {
  const item = [
    {
      id: 1,
      url: img1,
      title: "Fashion Industry",
    },
    {
      id: 2,
      url: img2,
      title: "Best Design Tools",
    },
    {
      id: 3,
      url: img3,
      title: "Best Design Tools",
    },
  ];
  const latestItems = item?.map((el) => (
    <div className="latest__card" key={el.id}>
      <Image alt={el.title} width={"100%"} height={"100%"} src={el.url} />
      <div className="latest__text">
        <span>01 Jan, 2015</span>
        <h4>{el.title}</h4>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>
    </div>
  ));
  return (
    <section className="latest">
      <div className="container">
        <h2 className="latest__title">LATEST NEWS</h2>
        <div className="latest__wrapper">{latestItems}</div>
      </div>
    </section>
  );
};

export default Latest;

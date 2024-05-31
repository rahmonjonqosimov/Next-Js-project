import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";

const EmptyCart = ({ img, title }) => {
  const router = useRouter();
  return (
    <div className="container">
      <div className="empty__cart">
        <Image src={img} width={294} height={295} alt="Empty Basket" />
        <h2>{title}</h2>
        <button onClick={() => router.push("/")}>Home</button>
      </div>
    </div>
  );
};

export default EmptyCart;

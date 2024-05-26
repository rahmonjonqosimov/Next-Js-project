import React from "react";
import { getData } from "@/fetch";
import Image from "next/image";

const Detail = async ({ params: { id } }) => {
  const data = await getData(`/products/${id}`);
  console.log(data);
  return (
    <div>
      <Image alt={data.title} src={data.image} width={200} height={200} />
    </div>
  );
};

export default Detail;

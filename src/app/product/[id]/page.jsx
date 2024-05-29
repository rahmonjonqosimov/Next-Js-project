import React from "react";
import { getData } from "@/fetch";
import SingleRoute from "@/components/single-route/SingleRoute";
import HomeProduct from "@/components/productRender/HomeProduct";

const Detail = async ({ params: { id } }) => {
  const data = await getData(`/products/${id}`);
  return (
    <>
      <SingleRoute data={data} />
      <HomeProduct />
    </>
  );
};

export default Detail;

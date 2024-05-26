import React from "react";
import { getData } from "@/fetch";
import SingleRoute from "@/components/single-route/SingleRoute";
import Products from "@/components/products/Products";

const Detail = async ({ params: { id } }) => {
  const data = await getData(`/products/${id}`);
  const products = await getData(`/products?limit=4`);
  return (
    <>
      <SingleRoute data={data} />
      <Products data={products} />
    </>
  );
};

export default Detail;

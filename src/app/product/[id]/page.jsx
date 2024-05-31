import React from "react";
import { getData } from "@/fetch";
import SingleRoute from "@/components/single-route/SingleRoute";
import HomeProduct from "@/components/productRender/HomeProduct";
import { PageWrapper } from "@/app/page-wrapper";

const Detail = async ({ params: { id } }) => {
  // const data = await getData(`/products/${id}`);
  return (
    <>
      <PageWrapper>
        <SingleRoute id={id} />
        <HomeProduct />
      </PageWrapper>
    </>
  );
};

export default Detail;

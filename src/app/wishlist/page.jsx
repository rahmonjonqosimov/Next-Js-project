import WishesProduct from "@/components/productRender/WishesProduct";
import React from "react";
import { motion } from "framer-motion";
import { PageWrapper } from "../page-wrapper";

const Wishlist = () => {
  return (
    <>
      <PageWrapper>
        <WishesProduct />
      </PageWrapper>
    </>
  );
};

export default Wishlist;

"use client";
import React, { memo } from "react";
import Products from "../products/Products";
import { useSelector } from "react-redux";
import {
  useGetProductsQuery,
  useGetProductsCategoryQuery,
} from "@/lib/productApi";

const HomeProduct = () => {
  const productLimit = useSelector((s) => s.limit.value);
  const productCategory = useSelector((s) => s.category.value);
  const { data: category } = useGetProductsCategoryQuery("/categories");
  const { data, isLoading } = useGetProductsQuery({
    params: `?limit=${productLimit * 4}`,
    path: productCategory !== "all" ? `/category/${productCategory}` : "",
  });
  return (
    <>
      <Products
        category={category}
        data={data}
        title={"BEST SELLER"}
        isLoading={isLoading}
        btn={true}
        url={true}
      />
    </>
  );
};

export default memo(HomeProduct);

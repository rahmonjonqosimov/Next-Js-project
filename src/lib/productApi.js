import { api } from "./api";

export const productApi = api.injectEndpoints({
  endpoints: (build) => ({
    // Get request
    getProducts: build.query({
      query: ({ params, path }) => ({
        url: `/products${path}${params}`,
        method: "GET",
      }),
      providesTags: ["Product"],
    }),
    getProductsCategory: build.query({
      query: (path) => ({
        url: `/products${path}`,
      }),
      providesTags: ["Product"],
    }),
    getProductDetail: build.query({
      query: (id) => ({
        url: `/products/${id}`,
      }),
      providesTags: ["Product"],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductsCategoryQuery,
  useGetProductDetailQuery,
} = productApi;

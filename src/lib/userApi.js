import { api } from "./api";

export const userApi = api.injectEndpoints({
  endpoints: (build) => ({
    userSignIn: build.mutation({
      query: (body) => ({
        url: `/auth/login`,
        body,
        method: "POST",
      }),
      invalidatesTags: ["User"],
    }),
  }),
});

export const { useUserSignInMutation } = userApi;

// getProducts: build.query({
//     query: (params) => ({
//       url: '/',
//       params
//     }),
//     providesTags:["Product"]
//   }),

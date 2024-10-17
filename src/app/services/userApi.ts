import { api } from "./api"
import { User } from "../types"

export const userApi = api.injectEndpoints({
     endpoints: (builder) => ({
          login: builder.mutation<
               { token: string },
               { login: string; password: string }
          >({
               query: (userData) => ({
                    url: "user/login",
                    method: "POST",
                    body: userData,
               }),
          }),

          register: builder.mutation<
               {
                    login: string
                    password: string
                    name: string
               },
               {
                    login: string
                    password: string
                    name: string
               }
          >({
               query: (userData) => ({
                    url: "user/register",
                    method: "POST",
                    body: userData,
               }),
          }),
          current: builder.query<User, void>({
               query: () => ({
                    url: "user/check",
                    method: "GET",
               }),
          }),

          // getUserById: builder.query<User, string>({
          //      query: (id) => ({
          //           url: `/users/${id}`,
          //           method: "GET",
          //      }),
          // }),

          // updateUser: builder.mutation<User, { userData: FormData; id: string }>({
          //      query: ({ userData, id }) => ({
          //           url: `/users/${id}`,
          //           method: "PUT",
          //           body: userData,
          //      }),
          // }),
     }),
})

export const {
     useRegisterMutation,
     useLoginMutation,
     useCurrentQuery,
     useLazyCurrentQuery,
     // useGetUserByIdQuery,
     // useLazyGetUserByIdQuery,
     // useUpdateUserMutation,
} = userApi

export const { endpoints: { login, register, current } } = userApi

// getUserById, updateUser 
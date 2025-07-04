import type { Book,  IBookMutationType, ISingleBookMutationType } from "@/toolkits/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const bookSlice = createApi({
  reducerPath: "books",
  baseQuery: fetchBaseQuery({ baseUrl: "https://backend-library-management-system.vercel.app/api" }),
  tagTypes: ["Book"],
  endpoints: (builder) => ({

    getSingleBook: builder.query<ISingleBookMutationType, string>({
      query: (id) => `/books/${id}`,
      providesTags: ["Book"]
    }),

    getBooks: builder.query<IBookMutationType, void>({
      query: () => "/books",
      providesTags: ["Book"],
    }),

    addBook: builder.mutation<IBookMutationType, Partial<Book>>({
      query: (newBook) => ({
        url: "/books",
        method: "POST",
        body: newBook,
      }),
      invalidatesTags: ["Book"],
    }),

    updateBook: builder.mutation<
      IBookMutationType,
      { id: string; data: Partial<Book> }
    >({
      query: ({ id, data }) => ({
        url: `/books/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Book"],
    }),

    deleteBook: builder.mutation<{ success: boolean; id: string, message:string}, string>({
      query: (id) => ({
        url: `/books/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Book"],
    }),

    
  }),
});

export const {
  useGetSingleBookQuery,
  useGetBooksQuery,
  useAddBookMutation,
  useUpdateBookMutation,
  useDeleteBookMutation,
} = bookSlice;

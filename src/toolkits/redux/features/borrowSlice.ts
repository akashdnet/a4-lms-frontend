import type { IBorrowField } from "@/app/borrow-book/formDataList";
import type { IBorrowBookResponse, IBorrowSummaryResponse } from "@/toolkits/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";




export const borrowSlice = createApi({
  reducerPath: "borrow",
  baseQuery: fetchBaseQuery({ baseUrl: "https://backend-library-management-system.vercel.app/api" }),
  tagTypes: ["Borrow", "Book"],
  endpoints: (builder) => ({

     getBorrowSummary: builder.query<IBorrowSummaryResponse, void>({
      query: () => "/borrow",
      providesTags: ["Borrow"],
    }),


    borrowBook: builder.mutation<IBorrowBookResponse, IBorrowField>({
      query: (borrowData) => ({
        url: "/borrow",
        method: "POST",
        body: {book:borrowData.bookId, quantity:borrowData.quantity, dueDate:borrowData.dueDate},
      }),
      invalidatesTags: [ "Borrow", "Book"],
    }),

   
  }),
});

export const {
  useBorrowBookMutation,
  useGetBorrowSummaryQuery
} = borrowSlice;

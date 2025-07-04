import type { IBookWithQuantity2 } from "@/app/borrow";

export type ErrorResponse = {
  success?: boolean
  message?: string
}


export interface Book {
  _id: string;
  title: string;
  author: string;
  genre: string;
  isbn: string;
  description: string;
  copies: number;
  available: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface BorrowSummary {
  bookTitle: string;
  isbn: string;
  totalQuantityBorrowed: number;
}

export interface IBookMutationType {
  success: boolean;
  message: string;
  length: number;
  data: Book[];
}
export interface ISingleBookMutationType {
  success: boolean;
  message: string;
  length: number;
  data: Book;
}






export interface IBorrowSummaryResponse {
  success: boolean
  message: string
  data: IBookWithQuantity2[]
}





export interface IBorrowBookResponse {
  success: boolean;
  message: string;
  data: any;
  error?: {
    data: {
      message:string;
      success:boolean;
    }
  }; 
}

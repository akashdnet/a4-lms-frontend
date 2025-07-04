import type { Book } from "@/toolkits/types";



export const formDataList = (data?: Partial<Book>) => ({
  title: data?.title ?? "",
  author: data?.author ?? "",
  genre: data?.genre ?? "", 
  isbn: data?.isbn ?? "",
  description: data?.description ?? "",
  copies: data?.copies ?? 0,
  available: data?.available ?? true,
})



export const makeDataSafeAgain = (data: any) => {
  return {
    title: data.title,
    author: data.author,
    genre: data.genre,
    isbn: data.isbn,
    description: data.description,
    copies: data.copies,
    available: data.available,
  };
};

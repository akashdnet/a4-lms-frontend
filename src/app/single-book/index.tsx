import { useGetSingleBookQuery } from "@/toolkits/redux/features/bookSlice";
import { useParams } from "react-router";
import { BookDetail } from "./bookDetail";

export default function Page() {
  const { id } = useParams();
  const { data, isLoading, isError } = useGetSingleBookQuery(id!);

  const book = {
    title: data?.data.title!,
    author: data?.data.author!,
    genre: data?.data.genre!,
    isbn: data?.data.isbn!,
    copies: data?.data.copies!,
    available: data?.data.available!,
    description: data?.data.description!,
  };


  if (isLoading) return <p className="text-center w-full">Loading...</p>;
  if (isError) return <p className="text-center w-full m-4">Something wen wrong...</p>;


  return (
    <div className="mx-4">
          <BookDetail data={book} />
    </div>
  );
}

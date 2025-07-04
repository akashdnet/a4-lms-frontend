
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { useGetBooksQuery } from "@/toolkits/redux/features/bookSlice";
import type { Book } from "@/toolkits/types";

const BookList = () => {
  const { data, isLoading, isError } = useGetBooksQuery();

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Something wen wrong...</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      {data?.data?.map((book:Book) => (
        <Card key={book._id}>
          <CardHeader>
            <h2 className="text-lg font-semibold">{book.title}</h2>
            <p className="text-sm text-gray-500">{book.author}</p>
          </CardHeader>
          
          <CardContent>
            <p><strong>Genre:</strong> {book.genre}</p>
            <p><strong>ISBN:</strong> {book.isbn}</p>
            <p><strong>Copies:</strong> {book.copies}</p>
            <p><strong>Available:</strong> {book.available ? "Yes" : "No"}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default BookList;

import { DataTable } from "./DataTable";
import { columns } from "./columns";
import { useGetBorrowSummaryQuery } from "@/toolkits/redux/features/borrowSlice";

interface IBook {
  title: string;
  isbn: string;
}

export interface IBookWithQuantity extends Partial<IBook> {
  totalQuantity: number;
}

export interface IBookWithQuantity2 {
  book: IBook;
  totalQuantity: number;
}

export default function UsersPage() {
  const { data: borrow, isLoading, isError } = useGetBorrowSummaryQuery();

  const newData: IBookWithQuantity[] =
    borrow?.data.map(({ book, totalQuantity }: IBookWithQuantity2) => ({
      ...book,
      totalQuantity,
    })) || [];




  if (isLoading) return <p className="text-center w-full m-4">Loading...</p>;
  if (isError) return <p className="text-center w-full m-4 text-red-300">Something wen wrong...</p>;



  
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-semibold mb-4">Borrow</h1>
      <DataTable columns={columns} data={newData} />
    </div>
  );
}

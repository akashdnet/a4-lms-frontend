import { type ColumnDef } from "@tanstack/react-table";
import { GrUpdate, GrView } from "react-icons/gr";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useNavigate } from "react-router";
import type { Book } from "@/toolkits/types";
import { HandleDelete } from "./actions";




export const columns: ColumnDef<Book>[] = [
  {
    accessorKey: "title",
    header: "Title",
    cell: ({ row }) => <span>{row.original.title}</span>,
  },
  {
    accessorKey: "author",
    header: "Author",
  },
  {
    accessorKey: "genre",
    header: "Genre",
  },
  {
    accessorKey: "isbn",
    header: "ISBN",
  },
  {
    accessorKey: "copies",
    header: "Copies",
  },
  {
    accessorKey: "available",
    header: "Availability",
  },
  {
    accessorKey: "actions",
    header: "Actions",
    cell: ({ row }) => {
        const navigate = useNavigate()
        const book = row.original
      return (
        <div className="flex items-center gap-2">

         <button
            onClick={() => navigate(`/books/${book._id}`)}
            title="View"
            className="text-violet-600 hover:bg-violet-100 hover:text-violet-800 p-2 rounded transition cursor-pointer"
          >
            <GrView size={18} />
          </button>

          <button
            onClick={() => navigate(`/edit-book/${book._id}`)}
            title="Edit"
            className="text-green-600 hover:bg-green-100 hover:text-green-800 p-2 rounded transition cursor-pointer"
          >
            <GrUpdate size={18} />
          </button>

          <HandleDelete id={book._id!}/>


           {book.copies > 0? <button
           onClick={() => navigate(`/borrow/${book._id}`)}
            title="Borrow"
            className="text-blue-600 hover:bg-blue-100 hover:text-blue-800 p-2  rounded transition cursor-pointer"
          >
            <AiOutlineShoppingCart  size={18}/>
          </button>:<></>}
        </div>
      );
    },
  },
];

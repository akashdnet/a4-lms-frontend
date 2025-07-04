import { type ColumnDef } from "@tanstack/react-table";
import type { IBookWithQuantity } from "./index";




export const columns: ColumnDef<IBookWithQuantity>[] = [
  {
    accessorKey: "title",
    header: "Book Title",
    cell: ({ row }) => <span>{row.original.title}</span>,
  },
  {
    accessorKey: "isbn",
    header: "ISBN",
  },
  {
    accessorKey: "totalQuantity",
    header: "Total Quantity Borrowed",
  }
];

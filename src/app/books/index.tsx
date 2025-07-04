import { DataTable } from "./DataTable";
import { useGetBooksQuery } from "@/toolkits/redux/features/bookSlice";
import { columns } from "./columns";
import type { Book } from "@/toolkits/types";
import { useSearchParams } from "react-router";
import { useEffect, useState } from "react";

export default function UsersPage() {
  const [limitValue, setLimitValue] = useState(10)
  const [pageValue, setPageValue] = useState(1)
  const [searchParams, setSearchParams] = useSearchParams();

const limit = parseInt(searchParams.get("limit") || "10")
const page = parseInt(searchParams.get("page") || "1")


useEffect(()=>{
  setPageValue(page)
  setLimitValue(limit || limitValue)
}, [page])








const paramsHandler = (name: string, toggle: string) => {
  if (!data) return

  if (name === "limit") {
    if (toggle === "inc" && data.length < limit) return
    setLimitValue((value) => {
      return toggle === "inc" ? value + 1 : Math.max(1, value - 1)
    })
  }

  else if (name === "page") {
    if (toggle === "inc" && (data.length == 0 || data.length <limit ) ) return

    setPageValue((value) => {
      const newValue = toggle === "inc" ? value + 1 : Math.max(1, value - 1)
      searchParams.set("page", String(newValue))
      setSearchParams(searchParams)
      return newValue
    })
  }
}














  const { data, isLoading, isError } = useGetBooksQuery({limit, page});
  const books: Book[] = Array.isArray(data?.data) ? data.data : [];



  if (isLoading) return <p className="text-center w-full m-4">Loading...</p>;
  if (isError)
    return <p className="text-center w-full m-4">Something went wrong...</p>;


 const pageInc = (data?.length ?? 0) < limit


  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-semibold mb-4">Books</h1>
      <DataTable columns={columns} data={books} />

      <div className="flex justify-center mt-5">
        <button disabled={page<2} className={`px-2  rounded  ${pageValue<2?"cursor-not-allowed bg-amber-100":"cursor-pointer bg-amber-400"}`} onClick={()=> paramsHandler("page", "des")}>{"<<"} </button>
        <span className="mx-4">{pageValue}</span>
        <button
        disabled={pageInc}
        className={`px-2  rounded  ${pageInc?"cursor-not-allowed bg-amber-100":"cursor-pointer bg-amber-400"}`} onClick={()=> paramsHandler("page", "inc")}>{">>"}</button>
      </div>


    </div>
  );
}

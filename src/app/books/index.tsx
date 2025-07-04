
import { DataTable } from './DataTable'
import { useGetBooksQuery } from '@/toolkits/redux/features/bookSlice'
import { columns } from './columns'
import type { Book } from '@/toolkits/types'

export default function UsersPage({renderData=true}) {

  if(!renderData) return;
  const { data,  isLoading, isError } = useGetBooksQuery()  
  const books: Book[] = Array.isArray(data?.data) ? data.data : []

  // console.log(import.meta.env.BASE_URL)

  if(isLoading) return <p className='text-center w-full m-4'>Loading...</p>
  if(isError) return <p className='text-center w-full m-4'>Something went wrong...</p>


  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-semibold mb-4">Books</h1>
      <DataTable columns={columns} data={books} />
    </div>
  )
}

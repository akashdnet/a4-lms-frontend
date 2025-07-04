import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { InputField } from "@/components/shared/InputField";
import { useForm } from "react-hook-form";
import { formDataList, makeDataSafeAgain, type IBorrowField } from "./formDataList";
import {  bookSlice, useGetSingleBookQuery
} from "@/toolkits/redux/features/bookSlice";
import { toast } from "sonner";
import { useNavigate } from "react-router";
import { DatePickerField } from "@/components/shared/DatePickerField";
import { useBorrowBookMutation } from "@/toolkits/redux/features/borrowSlice";
import { useAppDispatch } from "@/toolkits/redux/hooks";
import type { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import type { ErrorResponse } from "@/toolkits/types";

export function FormComponent({ id }: { id: string }) {
  const dispatch = useAppDispatch()

  const navigate = useNavigate();
  const {
    data: book,
    isLoading: singleDataLoading,
    isError
  } = useGetSingleBookQuery(id);
  const [borrowBook, { isLoading }] = useBorrowBookMutation();

  const formData = useForm({
    defaultValues: {
      ...formDataList
    },
  });

  const onSubmit = async (data:IBorrowField) => {
    // console.log(data)
    const finalData = makeDataSafeAgain(data);
    const result = await borrowBook({...finalData, bookId:id});
    const errorData = (result.error as FetchBaseQueryError)?.data as ErrorResponse

    if (result?.data?.success) {
      dispatch(bookSlice.util.invalidateTags(["Book"]))
      toast.success(result?.data?.message);
      navigate("/borrow-summary");
    } else if (errorData.success = false){
      // console.log(result.error.data);
        toast.error(errorData?.message);
    }
  };

    if (singleDataLoading || isLoading ) return <p className="text-center w-full m-4">Loading...</p>;
  if (isError) return <p className="text-center w-full m-4 text-red-300">Something wen wrong...</p>;


  return (
   <span>
          <div className="my-8">
            <h1 className="text-2xl text-center ">
              Borrow: <em><strong>{book?.data.title}</strong></em>
            </h1>
          </div>
          <Form {...formData}>
            <form
              onSubmit={formData.handleSubmit(onSubmit)}
              className="space-y-8"
            >
              <InputField
                name="quantity"
                control={formData.control}
                label="Quantity"
                placeholder="Enter quantity"
                rules={{ required: "Quantity is required" }}
                description={`You can borrow upto available copies(${book?.data?.copies}) `}
              />

              <DatePickerField
                name="dueDate"
                control={formData.control}
                label="Borrow Date"
                rules={{ required: "Date is required" }}
              />

              <Button type="submit" disabled={isLoading}>
                Borrow
              </Button>
            </form>
          </Form>
        </span>
  );
}



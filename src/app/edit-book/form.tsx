import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { InputField } from "@/components/shared/InputField";
import { useForm } from "react-hook-form";
import { makeDataSafeAgain } from "./formDataList";
import { SelectField } from "@/components/shared/SelectField";
import {
  useGetSingleBookQuery,
  useUpdateBookMutation,
} from "@/toolkits/redux/features/bookSlice";
import { toast } from "sonner";
import { TextareaField } from "@/components/shared/TextareaField";
import { type FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import { RadioBooleanField } from "@/components/shared/RadioBooleanField";
import type { ErrorResponse } from "@/toolkits/types";

export function FormComponent({ id }: { id: string }) {
  const navigate = useNavigate();
  const {
    data: book,
    isLoading: singleDataLoading,
    isSuccess,
    isError
  } = useGetSingleBookQuery(id);
  const [updateBook, { isLoading }] = useUpdateBookMutation();

  const formData = useForm({
    defaultValues: {
      genre: book?.data.genre,
      author: book?.data.author,
      copies: book?.data.copies,
      title: book?.data.title,
      isbn: book?.data.isbn,
      description: book?.data.description,
      available: book?.data.available,

    },
  });
  let genre = book?.data.genre;
  let available = book?.data.available;
  useEffect(() => {
    if (isSuccess && book?.data) {
      genre = book?.data.genre;
      available = book?.data.available;
      formData.reset({
        genre: book?.data.genre,
        author: book?.data.author,
        copies: book?.data.copies,
        title: book?.data.title,
        isbn: book?.data.isbn,
        description: book?.data.description,
        available: book?.data.available,
      });
    }
  }, [isSuccess, book, formData]);

  const onSubmit = async (data: any) => {
    const finalData = makeDataSafeAgain(data);
    const result = await updateBook({ id, data: finalData });
    const errorData = (result.error as FetchBaseQueryError)?.data as ErrorResponse

    if (result?.data?.success) {
      toast.success(result?.data?.message);
      navigate("/books");
    } else if (errorData.success = false){
        toast.error(errorData?.message);
    }
  };


    if (isLoading || singleDataLoading) return <p className="text-center w-full m-4">Loading...</p>;
  if (isError) return <p className="text-center w-full m-4 text-red-300">Something wen wrong...</p>;



  return (
   <Form {...formData}>
          <form
            onSubmit={formData.handleSubmit(onSubmit)}
            className="space-y-8"
          >
            <InputField
              name="title"
              control={formData.control}
              label="Book Name"
              placeholder="Enter book title"
              rules={{ required: "Book Title is required" }}
            />

            <InputField
              name="author"
              control={formData.control}
              label="Author"
              placeholder="Enter Author Name"
              rules={{ required: "Author name is required" }}
            />

            <SelectField
              name="genre"
              control={formData.control}
              label="Genre"
              placeholder="Select a genre"
              genre={genre}
              options={[
                { label: "Fiction", value: "FICTION" },
                { label: "Non-fiction", value: "NON_FICTION" },
                { label: "Science", value: "SCIENCE" },
                { label: "History", value: "HISTORY" },
                { label: "Biography", value: "BIOGRAPHY" },
                { label: "Fantasy", value: "FANTASY" },
              ]}
              rules={{ required: "Genre is required" }}
            />

            <InputField
              name="isbn"
              control={formData.control}
              label="ISBN"
              placeholder="Enter Book ISBN no"
              rules={{ required: "Genre is required" }}
            />

            <TextareaField
              name="description"
              control={formData.control}
              label="Description"
              placeholder="Write a brief description about the book"
              rules={{
                required: "Description is required",
                minLength: { value: 5, message: "At least 5 characters." },
              }}
            />

            <InputField
              name="copies"
              control={formData.control}
              label="Copies"
              placeholder="Enter number of available copies"
              rules={{
                valueAsNumber: true,
                required: "Number of copies are required.",
              }}
            />

            <RadioBooleanField
              available={available}
              name="available"
              control={formData.control}
              label="Is this book available?"
              rules={{ required: "Select availability" }}
            />

            <Button type="submit" disabled={isLoading}>
              Update
            </Button>
          </form>
        </Form>
  );
}



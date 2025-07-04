import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { InputField } from "@/components/shared/InputField";
import { useForm } from "react-hook-form";
import { formDataList, makeDataSafeAgain } from "./formDataList";
import { SelectField } from "@/components/shared/SelectField";
import { useAddBookMutation } from "@/toolkits/redux/features/bookSlice";
import { toast } from "sonner";
import { TextareaField } from "@/components/shared/TextareaField";
import { type FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { useNavigate } from "react-router";
import { RadioBooleanField } from "@/components/shared/RadioBooleanField";

export function FormComponent() {
  const [addBook, { isLoading }] = useAddBookMutation();
  const navigate = useNavigate();

  const formData = useForm({ defaultValues: { ...formDataList } });

  const onSubmit = async (data: any) => {
    const finalData = makeDataSafeAgain({...data, available: data.copies==0?false:true});
    const result = await addBook(finalData);
    // console.log(result?.error?.data.error?.message)

    if (result?.data?.success) {
      toast.success(result?.data?.message);
      navigate("/books");
    } else if ("error" in result) {
      if (isFetchBaseQueryError(result.error)) {
        const errData = result.error.data as { error?: { message?: string } };
        const msg = errData?.error?.message ?? "Something went wrong!!!";
        toast.error(msg);
      } else {
        toast.error("Unknown error occurred!");
      }
    }
  };

  return (
    <Form {...formData}>
      <form onSubmit={formData.handleSubmit(onSubmit)} className="space-y-8">
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
          name="available"
          control={formData.control}
          label="Is this book available?"
        />

        <Button type="submit" disabled={isLoading}>
          Submit
        </Button>
      </form>
    </Form>
  );
}

function isFetchBaseQueryError(error: unknown): error is FetchBaseQueryError {
  return (
    typeof error === "object" &&
    error !== null &&
    "status" in error &&
    "data" in error
  );
}

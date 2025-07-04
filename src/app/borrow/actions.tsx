import { useDeleteBookMutation } from "@/toolkits/redux/features/bookSlice";
import { MdDeleteForever } from "react-icons/md";
import { toast } from "sonner";

export const HandleDelete = ({ id }: { id: string }) => {
  const [deleteBook, { isLoading }] = useDeleteBookMutation();

  const handleClick = async () => {
    const confirmed = confirm("Are you sure! you want to delete this book?");
    if (!confirmed) return;

    try {
      const result = await deleteBook(id).unwrap();
      console.log(result);
      toast.success(result?.message);
    } catch (error) {
      toast.error("Failed to delete the book.");
      console.error(error);
    }
  };

  return (
    <button
      disabled={isLoading}
      onClick={handleClick}
      title="Delete"
      className="text-red-600 hover:bg-red-100 hover:text-red-800 p-2 rounded transition cursor-pointer"
    >
      <MdDeleteForever size={22} />
    </button>
  );
};

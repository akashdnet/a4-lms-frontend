import { useParams } from "react-router";
import { FormComponent } from "./form";

export default function Page() {

  const {id} = useParams();

  return (
    <div className="max-w-md mx-auto my-10">
      <div className="mx-4">
        <FormComponent id={id!} />
      </div>
    </div>
  );
}

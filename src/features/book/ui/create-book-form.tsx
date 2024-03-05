import { useForm } from "react-hook-form";
import clsx from "clsx";
import { UiTextField } from "@/shared/ui/ui-text-field";
import { Button } from "flowbite-react";
import { UiNumberField } from "@/shared/ui/ui-number-field";


export function CreateBookForm({ className }: { className?: string }) {

  const { register, handleSubmit, formState } = useForm<{
    name: string;
    description: string;
    price: number;
    coAuthors: string[];
  }>({
    defaultValues: {
      name: "",
      description: "",
      price: 0,
      coAuthors: []
    }
  });

  const error = false;

  const handleSubmitSignIn = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <form
      className={clsx(className, "flex flex-col gap-4")}
      onSubmit={handleSubmitSignIn}
    >
      <UiTextField
        label="Name"
        inputProps={{
          ...register("name"),
          type: "Name",
          placeholder: "Name"
        }}
        error={formState.errors.name?.message}
      />
      <UiTextField
        multiline
        label="Description"
        inputProps={{
          ...register("description"),
          type: "Description",
          placeholder: "Description"
        }}
        error={formState.errors.description?.message}
      />
      <div className="flex gap-4">
        <UiNumberField
          className="w-1/2"
          label="Price"
          inputProps={{
            ...register("price"),
            type: "Price",
            placeholder: "Price"
          }}
          error={formState.errors.price?.message}
        />
        <UiTextField
          className="w-1/2"
          label="Co-authors"
          inputProps={{
            ...register("coAuthors"),
            type: "Co-authors",
            placeholder: "Co-authors"
          }}
          error={formState.errors.coAuthors?.message}
        />
      </div>
      <Button type="submit" isProcessing={false}>
        Create
      </Button>
      {error && <p className="text-red-500">{error}</p>}
    </form>
  );
}

import { useForm } from "react-hook-form";
import clsx from "clsx";
import { UiTextField } from "@/shared/ui/ui-text-field";
import { Button } from "flowbite-react";
import { UiNumberField } from "@/shared/ui/ui-number-field";
import { useRouter } from "next/router";
import { useUpdateBook, useWorkroom } from "@/features/workroom";
import { GenreSelect } from "./genre-select";


export function UpdateBookForm({ className }: { className?: string }) {

  const { query } = useRouter();
  const router = useRouter();
  const bookId = query.bookId as string;
  const {getBookById} = useWorkroom()
  const { updateBook, isLoading } = useUpdateBook()

  const onSaveClick = () => {
   router.back()
  }

  const book = getBookById(bookId);
  console.log(bookId);
  const { register, handleSubmit, formState } = useForm<{
    name: string;
    description: string;
    price: number;
    coAuthors: string[];
    genre: string;
  }>({
    defaultValues: {
      name: book?.name,
      description: book?.description,
      price: book?.price,
      coAuthors: [],
      genre: ""
    }
  });

  const error = false;

  const handleSubmitCreate = handleSubmit( (data) => {
    const reqData = {
      id: Number(bookId),
      name: data.name,
      description: data.description,
      price: data.price,
      coAuthors: [],
      genre: ""

    }
    updateBook(reqData, onSaveClick)
  });

  return (
    <form
      className={clsx(className, "flex flex-col gap-4")}
      onSubmit={handleSubmitCreate}
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
        textAreaProps={{
          ...register("description"),
          placeholder: "Description"
        }}
        error={formState.errors.description?.message}
      />
      <GenreSelect
        label="Choose genre"
        error={formState.errors.genre?.message}
        selectProps={
          {
            ...register("genre")
          }
        }
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
      <Button type="submit" isProcessing={isLoading}>
        Save
      </Button>
      {error && <p className="text-red-500">{error}</p>}
    </form>
  );
}

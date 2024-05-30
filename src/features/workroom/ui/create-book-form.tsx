import { useForm } from "react-hook-form";
import clsx from "clsx";
import { UiTextField } from "@/shared/ui/ui-text-field";
import { Button } from "flowbite-react";
import { UiNumberField } from "@/shared/ui/ui-number-field";
import { GenreSelect } from "./genre-select";
import { useCreateBook } from "../model/use-create-book";
import { useRouter } from "next/router";


export function CreateBookForm({ className }: { className?: string }) {

  const router = useRouter();

  const { register, handleSubmit, formState } = useForm<{
    name: string;
    description: string;
    price: number;
    photoUrl: string;
    coAuthors: string[];
    genre: string;
  }>({
    defaultValues: {
      name: "",
      description: "",
      price: 0,
      photoUrl: "",
      coAuthors: [],
      genre: ""
    }
  });

  const error = false;

  const { createBook } = useCreateBook();
  const onCreate = (bookId: number) => {
    router.push(`/workroom/${bookId}`);
  };

  const handleSubmitCreate = handleSubmit((data) => {
    console.log(data);
    createBook({
        name: data.name,
        description: data.description,
        price: data.price,
        photoUrl: data.photoUrl,
        coAuthorIds: [0]
      },
      onCreate);
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
        label="Description"
        inputProps={{
          ...register("description"),
          type: "Description",
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
      <UiTextField
        label="Cover photo url"
        inputProps={{
          ...register("photoUrl"),
          type: "photoUrl",
          placeholder: "https://example.com/cover.jpg"
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

import { useForm } from "react-hook-form";
import clsx from "clsx";
import { UiTextField } from "@/shared/ui/ui-text-field";
import { Button } from "flowbite-react";
import { useCreateChapter } from "../model/use-create-chapter";
import { useRouter } from "next/router";


export function CreateChapterForm({ className }: { className?: string }) {

  const { register, handleSubmit, formState } = useForm<{
    title: string;
    content: string;
  }>({
    defaultValues: {
      title: "",
      content: ""
    }
  });

  const error = false;
  const router = useRouter();
  const { query } = useRouter();
  const bookId = query.bookId as string;
  const { createChapter } = useCreateChapter();
  const onCreate = (bookId: number) => {
    router.push(`/workroom/${bookId}`);
  };

  const handleSubmitCreate = handleSubmit((data) => {
    console.log(data);
    createChapter({
      bookId: Number(bookId),
      title: data.title,
      content: data.content,
      isFree: true
    }, onCreate);
  });

  return (
    <form
      className={clsx(className, "flex flex-col gap-4")}
      onSubmit={handleSubmitCreate}
    >
      <UiTextField
        label="Chapter Title"
        inputProps={{
          ...register("title"),
          type: "Name",
          placeholder: "Title"
        }}
        error={formState.errors.title?.message}
      />
      <UiTextField

        multiline
        label="Content"
        textAreaProps={{
          ...register("content"),
          placeholder: "Content"
        }}
        error={formState.errors.content?.message}
      />

      <Button type="submit" isProcessing={false}>
        Create
      </Button>
      {error && <p className="text-red-500">{error}</p>}
    </form>
  );
}

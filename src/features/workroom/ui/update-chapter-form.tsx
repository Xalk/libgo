import { useForm } from "react-hook-form";
import clsx from "clsx";
import { UiTextField } from "@/shared/ui/ui-text-field";
import { Button } from "flowbite-react";
import { useWorkroom } from "@/features/workroom";
import { useRouter } from "next/router";
import { useUpdateChapter } from "@/features/workroom/model/use-update-chapter";


export function UpdateChapterForm({ className }: { className?: string }) {
  const { query } = useRouter();
  const router = useRouter();
  console.log(query);
  const chapterId = query.chapterId as string;
  const bookId = query.bookId as string;
  const { getChapterById } = useWorkroom();
  const { updateChapter } = useUpdateChapter();

  const onSaveClick = () => {
    router.back();
  };

  const chapter = getChapterById(chapterId);
  const { register, handleSubmit, formState } = useForm<{
    title: string;
    content: string;
  }>({
    defaultValues: {
      title: chapter?.title,
      content: chapter?.content
    }
  });

  const error = false;

  const handleSubmitCreate = handleSubmit((data) => {
    console.log(data);
    const reqData = {
      id: Number(chapterId),
      title: data.title,
      content: data.content,
      isFree: true,
      bookId: Number(bookId)
    };
    updateChapter(reqData, onSaveClick);
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
          type: "Title",
          placeholder: "Title"
        }}
        error={formState.errors.title?.message}
      />
      <UiTextField
        multiline
        label="Content"
        textAreaProps={{
          className: "h-36",
          ...register("content"),
          placeholder: "Content"
        }}
        error={formState.errors.content?.message}
      />

      <Button type="submit" isProcessing={false}>
        Save
      </Button>
      {error && <p className="text-red-500">{error}</p>}
    </form>
  );
}

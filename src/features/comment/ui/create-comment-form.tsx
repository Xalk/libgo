import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import clsx from "clsx";
import { UiTextField } from "@/shared/ui/ui-text-field";
import { Button } from "flowbite-react";
import { useCreateComment } from "@/features/comment/model/use-create-comment";
import { Dispatch, SetStateAction } from "react";
import { Comment } from "@/entities/comment";

interface CreateCommentFormProps {
  className?: string,
  setComments: Dispatch<SetStateAction<[] | Comment[]>>
}

export function CreateCommentForm({ className, setComments }: CreateCommentFormProps) {

  const { register, handleSubmit, formState } = useForm<{
    content: string;
  }>({
    defaultValues: {
      content: ""
    }
  });
const {createComment} = useCreateComment()
  const error = false;
  const router = useRouter();
  const { query } = useRouter();
  const bookId = query.bookId as string;

  const onCreate = (comment: Comment) => {
    setComments((prev) => [...prev, comment]);
  };

  const handleSubmitCreate = handleSubmit((data) => {
    console.log(data);
    const reqData = {
      content: data.content,
      bookId: Number(bookId),
    }
    createComment(reqData, onCreate);
  });

  return (
    <form
      className={clsx(className, "flex flex-col gap-4")}
      onSubmit={handleSubmitCreate}
    >
      <UiTextField
        className=""
        multiline
        textAreaProps={{
          ...register("content"),
          placeholder: "Write a comment...",
          rows: 6
        }}
        error={formState.errors.content?.message}
      />

      <div className="flex justify-start">
        <Button type="submit" isProcessing={false} className="w-auto">
          Post comment
        </Button>
      </div>
      {error && <p className="text-red-500">{error}</p>}
    </form>
  );
}

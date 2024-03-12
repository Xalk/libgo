import { useForm } from "react-hook-form";
import clsx from "clsx";
import { UiTextField } from "@/shared/ui/ui-text-field";
import { Button } from "flowbite-react";



export function CreateChapterForm({ className }: { className?: string }) {

  const { register, handleSubmit, formState } = useForm<{
    name: string;
    content: string;
  }>({
    defaultValues: {
      name: "",
      content: "",
    }
  });

  const error = false;

  const handleSubmitCreate = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <form
      className={clsx(className, "flex flex-col gap-4")}
      onSubmit={handleSubmitCreate}
    >
      <UiTextField
        label="Chapter Name"
        inputProps={{
          ...register("name"),
          type: "Name",
          placeholder: "Name"
        }}
        error={formState.errors.name?.message}
      />
      <UiTextField
        textAreaProps={{
          className: "h-36",
        }}
        multiline
        label="Content"
        inputProps={{
          ...register("content"),
          type: "Content",
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

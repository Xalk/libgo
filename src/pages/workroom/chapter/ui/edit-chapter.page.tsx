import { UpdateChapterForm, useRemoveChapter } from "@/features/workroom";
import { Button } from "flowbite-react";
import { MdDelete } from "react-icons/md";
import { useRouter } from "next/router";


export function EditChapterPage() {
  const { query } = useRouter();
  const bookId = query.bookId as string;
  const chapterId = query.chapterId as string;
  const removeChapter = useRemoveChapter()
  const handleRemove = () => removeChapter(chapterId, bookId)

  return (
    <section className="my-10 container mx-auto max-w-5xl">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl mb-6">Edit</h1>
        <Button size="sm" pill color="red" onClick={handleRemove}>
          <MdDelete className="w-4 h-4" />
        </Button>
      </div>
      <UpdateChapterForm />
    </section>
  );
}


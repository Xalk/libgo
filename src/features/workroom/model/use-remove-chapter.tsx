import { useGetConfirmation } from "@/shared/lib/confirmation";
import { useWorkroom } from "@/features/workroom";

export function useRemoveChapter() {
  const getConfirmation = useGetConfirmation();

  const { removeChapter } = useWorkroom();

  return async (chapterId: string, bookId: string) => {
    const confirmation = await getConfirmation({
      description: "Are you sure you want to delete this chapter?"
    });

    if (!confirmation) return;

    removeChapter(chapterId, Number(bookId));
  };
}

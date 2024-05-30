import { useGetConfirmation } from "@/shared/lib/confirmation";
import { useWorkroom } from "@/features/workroom";
import { useSession } from "@/entities/session";

export function useRemoveBook() {
  const getConfirmation = useGetConfirmation();
  const userId = useSession(store => store.currentSession?.id);
  const { removeBook } = useWorkroom();

  return async (bookId: string) => {
    const confirmation = await getConfirmation({
      description: "Are you sure you want to delete this book?",
    });

    if (!confirmation) return;

    removeBook(bookId, Number(userId));
  };
}

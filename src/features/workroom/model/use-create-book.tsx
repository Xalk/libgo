import { CreateBooksRequest } from "@/shared/api/books-generated";
import { useWorkroom } from "@/features/workroom";
import { useSession } from "@/entities/session";

export function useCreateBook() {
  const createStoreBook = useWorkroom((s) => s.createBook);
  const userId = useSession(store => store.currentSession?.id);

  const createBook = async (data: CreateBooksRequest, onCreate: (bookId: number) => void) => {
    try {

      const result = await createStoreBook({ ...data }, Number(userId));

      onCreate(result.id);
    }catch (e) {
      console.log(e);
    }

  };

  return { createBook };
}

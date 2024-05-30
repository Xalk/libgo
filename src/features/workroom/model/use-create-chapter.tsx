import { useWorkroom } from "@/features/workroom";
import { CreateChapterRequest } from "@/shared/api/chapters-generated";


export function useCreateChapter() {
  const createStoreChapter = useWorkroom((s) => s.createChapter);

  const createChapter = async (data: CreateChapterRequest, onCreate: (bookId: number) => void) => {
    try {

      const result = await createStoreChapter(data);

      onCreate(result.bookId);
    }catch (e) {
      console.log(e);
    }

  };

  return { createChapter };
}

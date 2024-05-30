import { useState } from "react";
import { useWorkroom } from "@/features/workroom";

export function useGetBookChapters() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);



  const { loadSelectedBookChapters } = useWorkroom();



    const getBookChapters = async (bookId: number) => {
      try {
        setIsLoading(true);
        await loadSelectedBookChapters(bookId);

      } catch (e: any) {
        setError(e);
      } finally {
        setIsLoading(false);
      }

  };

  return { isLoading, error, getBookChapters };
}

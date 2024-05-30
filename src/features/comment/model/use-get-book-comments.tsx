import { booksApi } from "@/shared/api";
import { useState } from "react";
import { CURRENT_API_VERSION } from "@/shared/constants";
import { Comment } from "@/entities/comment";

export function useGetBookComments() {
  const [comments, setComments] = useState<Comment[] | []>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const getBookComments = async (bookId: number) => {
    try {
      setIsLoading(true);
      const fetchedComments = await booksApi.getApiCommentsBookId(CURRENT_API_VERSION, bookId);
      setComments(fetchedComments);

    } catch (e: any) {
      setError(e);
    } finally {
      setIsLoading(false);
    }

  };

  return { comments, isLoading, error, getBookComments, setComments};
}

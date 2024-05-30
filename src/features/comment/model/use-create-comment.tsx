import { booksApi } from "@/shared/api";
import { CURRENT_API_VERSION } from "@/shared/constants";
import { CreateCommentsRequest } from "@/shared/api/books-generated";
import { Comment } from "@/entities/comment";

export function useCreateComment() {

  const createComment = async (data: CreateCommentsRequest, onCreate: (comment: Comment) => void) => {
    try {
      const comment = await booksApi.postApiComments(CURRENT_API_VERSION, data);
      onCreate(comment);
    }catch (e) {
      console.log(e);
    }

  };

  return { createComment };
}

import { Button } from "flowbite-react";
import { CreateCommentForm, useGetBookComments } from "@/features/comment";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { UiSpinner } from "@/shared/ui/ui-spinner";
import { CommentItem } from "@/entities/comment";

export function Reviews() {

  const { query } = useRouter();
  const bookId = query.bookId as string;
  const { comments, isLoading, getBookComments, setComments } = useGetBookComments();

  useEffect(() => {
    getBookComments(Number(bookId));
  }, []);

  if (isLoading) {
    return <UiSpinner className=""/>;
  }

  return (
    <section className="bg-white dark:bg-dark-mode py-8 lg:py-16 antialiased">
      <div className="">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">{`Discussion (${comments.length})`}</h2>
        </div>
        <CreateCommentForm setComments={setComments}/>
        {
          comments.slice().reverse().map(comment => <CommentItem key={comment.id} comment={comment}/>)
        }
      </div>
    </section>
  )
}

import { Button } from "flowbite-react";
import { MdDelete, MdEdit } from "react-icons/md";
import { useWorkroom } from "@/features/workroom";
import { useRouter } from "next/router";

export function ChapterList({ className }: { className?: string }) {
  const { query } = useRouter();
  const bookId = query.bookId as string;
  const router = useRouter();
  const { selectedBookChapters } = useWorkroom();

  return (
    <div className={className}>
      <table className="text-left text-lg font-light w-full mt-5">
        <thead
          className="border-b bg-white font-medium dark:border-neutral-500 dark:bg-neutral-600">
        <tr>
          <th scope="col" className="py-4 px-10">№</th>
          <th scope="col" className="px-6 py-4">Chapter</th>
        </tr>
        </thead>
        <tbody>
        {
          selectedBookChapters?.map((c, i) => {
            return (
              <tr
                className={`border-b ${i % 2 === 0 ? "bg-white" : "bg-neutral-100"} dark:border-neutral-500 dark:bg-neutral-700`}>
                <td className="whitespace-nowrap px-10 py-4">
                  {i+1}
                </td>
                <td className="whitespace-nowrap px-10 py-4 flex justify-between">
                  <p>{c.title}</p>
                  <div className="flex gap-3">
                    <Button size="sm" pill color="yellow"
                            onClick={() => router.push(`/workroom/${bookId}/chapter/${c.id}`)}>
                      <MdEdit className="w-4 h-4" />
                    </Button>
                    <Button size="sm" pill color="red">
                      <MdDelete className="w-4 h-4" />
                    </Button>

                  </div>
                </td>
              </tr>
            );
          })
        }
        </tbody>
      </table>
    </div>
  );
}

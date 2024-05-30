import { WorkroomLayout } from "./workroom.layout";
import { Button } from "flowbite-react";
import { BookCard } from "@/entities/book";
import { useRouter } from "next/router";
import { useWorkroom } from "@/features/workroom";


export function WorkroomPage() {
  const router = useRouter();
  const { myBooks } = useWorkroom();

  return (
    <WorkroomLayout>
      <div>
        {
          myBooks.slice().reverse().map(b => {
            return (
              <BookCard
                className="gap-6 flex mb-5"
                imageStyle="w-32 h-46"
                name={b.name}
                details={
                  <div className="flex flex-col gap-3">
                    <p className="line-clamp-2">
                      In his first life, losing the one he loved the most, grief overshadowed his life until death
                      knocked on his door.
                      He thought that he would finally be free from the nightmare but his life was far from over.
                      He was reborn again.
                      In the second life, he was reborn as the youngest prince of the strongest empire and was
                      born with a silver spoon.
                      He was married to five Beautiful goddesses.
                    </p>
                    <div className="flex justify-between">
                      <div className="flex gap-3 items-center">
                        <Button size="sm" pill gradientDuoTone="purpleToBlue"
                                onClick={() => router.push(`/workroom/${b.id}`)}
                        >Edit</Button>
                        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Last updated 3 mins ago</p>
                      </div>
                      <div className="flex gap-3">
                      </div>
                    </div>
                  </div>
                }
              />
            );
          })
        }
      </div>
    </WorkroomLayout>
  );
}

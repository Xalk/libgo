import { Button, Rating, Tabs } from "flowbite-react";
import { BookCard } from "@/entities/book";

export function LibraryHistoryTabs() {
  return (
    <Tabs aria-label="Tabs with underline bg-white" style="underline"
          theme={{
            tablist: {
              tabitem: {
                base: "flex items-center justify-center py-4 mr-4 text-xl font-medium first:ml-0 disabled:cursor-not-allowed disabled:text-gray-400 disabled:dark:text-gray-500 focus:ring-0  focus:outline-none rounded-t-lg border-b-2 border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-600"
              }
            }
          }}
    >
      < Tabs.Item active title="Library">
        <ul className="grid grid-cols-6 gap-8">
          {
            [...Array(9)].map(b => {
              return (
                <BookCard
                  className=""
                  details={
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">2/640
                      Progress</p>
                  }
                />
              );
            })
          }
        </ul>
      </Tabs.Item>
      <Tabs.Item title="History">

        <div className="">
          {
            [...Array(5)].map(b => {
              return (
                <BookCard
                  className="flex gap-4 mb-3"
                  imageStyle="h-[186px]"
                  details={
                    <div className="flex flex-col gap-3">
                      <Rating>
                        <Rating.Star />
                        <Rating.Star />
                        <Rating.Star />
                        <Rating.Star />
                        <Rating.Star filled={false} />
                        <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">4.95</p>
                      </Rating>
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
                        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">2/640 Progress</p>
                        <div className="flex gap-3">
                          <Button size="xs" pill color="light">Continue Reading</Button>
                          <Button size="xs" pill gradientDuoTone="purpleToBlue">+ ADD TO LIBRARY</Button>
                        </div>
                      </div>
                    </div>
                  }
                />
              );
            })
          }
        </div>

      </Tabs.Item>
    </Tabs>
  );
}

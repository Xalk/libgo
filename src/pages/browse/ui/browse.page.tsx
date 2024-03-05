import { UiTypography } from "@/shared/ui/ui-typography";
import { UiChip } from "@/shared/ui/ui-chip";
import { useState } from "react";
import { BookCard } from "@/entities/book";
import { Button, Rating } from "flowbite-react";
import { FaSheetPlastic } from "react-icons/fa6";
import { HiPlusCircle } from "react-icons/hi";

const genres = [
  "All",
  "Action",
  "Fantasy",
  "Romance",
  "Mystery",
  "Horror",
  "Thriller",
  "Historical",
  "Science"
];

const sortTypes = [
  "Popular",
  "Recommended",
  "New",
  "Oldest",
  "Name"
];

export function BrowsePage() {

  const [filterByGenre, setFilterByGenre] = useState("All");
  const [sortType, setSortType] = useState("Popular");

  return (
    <section className="my-10 mx-auto max-w-5xl px-4 xl:px-0">
      <UiTypography as="h4" variant="heading" className="text-xl border-b pb-4">Filter
        By</UiTypography>
      <div>
        <UiTypography as="h4" variant="body" className="mt-1 text-sm">Genre</UiTypography>
        <div className="flex flex-wrap gap-3 mt-3">
          {
            genres.map(genre => (
              <UiChip
                isActive={filterByGenre === genre}
                key={genre}
                title={genre}
              />
            ))
          }
        </div>
      </div>
      <UiTypography as="h4" variant="heading" className="mt-8 text-xl border-b pb-4">Sort
        By</UiTypography>
      <div className="flex flex-wrap gap-3 mt-3">
        {
          sortTypes.map(sort => (
            <UiChip
              isActive={sortType === sort}
              key={sort}
              title={sort}
            />
          ))
        }
      </div>
      <div className="mt-5 grid xl:grid-cols-3 sm:grid-cols-1 gap-8">

        <div className="">
          {
            [...Array(5)].map(b => {
              return (
                <BookCard
                  className="flex gap-4 mb-5"
                  imageStyle="w-24"
                  details={
                    <div>
                      <UiTypography as="p" variant="body" className="line-clamp-2 text-black my-2">
                        In a world of constant competition, one man aims for the top. In this new genre VRMMORPG, he
                        plans on becoming the strongest at all costs. The classes, the races, the starting zones,
                        everything is a mystery in 'New Eden'. This game is coming out without a shred of details. The
                        only thing that was promoted was the freedom of skill choosing.
                      </UiTypography>
                      <div className="flex items-center gap-3 justify-between">
                        <Rating className="mb-0.5 text-gray-500">
                          <Rating.Star className="text-gray-500" />
                          <p className="ml-2 text-xs dark:text-white">4.95</p>
                        </Rating>
                        <div className="flex gap-1 items-center text-xs text-gray-500"><FaSheetPlastic /> 111 Chapters
                        </div>
                        <div className=" flex gap-1 items-center text-blue-500 text-sm cursor-pointer">
                          <HiPlusCircle />
                          <span>ADD</span>
                        </div>
                      </div>
                    </div>
                  }
                />
              );
            })
          }
        </div>
        <div className="">
          {
            [...Array(5)].map(b => {
              return (
                <BookCard
                  className="flex gap-4 mb-5"
                  imageStyle="w-24"
                  details={
                    <div>
                      <UiTypography as="p" variant="body" className="line-clamp-2 text-black my-2">
                        In a world of constant competition, one man aims for the top. In this new genre VRMMORPG, he
                        plans on becoming the strongest at all costs. The classes, the races, the starting zones,
                        everything is a mystery in 'New Eden'. This game is coming out without a shred of details. The
                        only thing that was promoted was the freedom of skill choosing.
                      </UiTypography>
                      <div className="flex items-center gap-3 justify-between">
                        <Rating className="mb-0.5 text-gray-500">
                          <Rating.Star className="text-gray-500" />
                          <p className="ml-2 text-xs dark:text-white">4.95</p>
                        </Rating>
                        <div className="flex gap-1 items-center text-xs text-gray-500"><FaSheetPlastic /> 111 Chapters
                        </div>
                        <div className=" flex gap-1 items-center text-blue-500 text-sm cursor-pointer">
                          <HiPlusCircle />
                          <span>ADD</span>
                        </div>
                      </div>
                    </div>
                  }
                />
              );
            })
          }
        </div>
        <div className="">
          {
            [...Array(5)].map(b => {
              return (
                <BookCard
                  className="flex gap-4 mb-5"
                  imageStyle="w-24"
                  details={
                    <div>
                      <UiTypography as="p" variant="body" className="line-clamp-2 text-black my-2">
                        In a world of constant competition, one man aims for the top. In this new genre VRMMORPG, he
                        plans on becoming the strongest at all costs. The classes, the races, the starting zones,
                        everything is a mystery in 'New Eden'. This game is coming out without a shred of details. The
                        only thing that was promoted was the freedom of skill choosing.
                      </UiTypography>
                      <div className="flex items-center gap-3 justify-between">
                        <Rating className="mb-0.5 text-gray-500">
                          <Rating.Star className="text-gray-500" />
                          <p className="ml-2 text-xs dark:text-white">4.95</p>
                        </Rating>
                        <div className="flex gap-1 items-center text-xs text-gray-500"><FaSheetPlastic /> 111 Chapters
                        </div>
                        <div className=" flex gap-1 items-center text-blue-500 text-sm cursor-pointer">
                          <HiPlusCircle />
                          <span>ADD</span>
                        </div>
                      </div>
                    </div>
                  }
                />
              );
            })
          }
        </div>
      </div>
    </section>
  );
}


import { UiTypography } from "@/shared/ui/ui-typography";
import { Rating } from "flowbite-react";
import { BookCard } from "@/entities";

export function TopBooks() {
  return (
    <div className="mt-12 mb-10">
      <UiTypography as="h3" variant="heading" className="mb-5 pb-5 border-b">Top Books</UiTypography>
      <div className="grid grid-cols-3">

        <div className="">
          <UiTypography as="h4" variant="heading" className="!text-blue-500 mb-5 text-xl">Power Ranking</UiTypography>
          {
            [...Array(5)].map(b => {
              return (
                <BookCard
                  className="flex gap-4 mb-3"
                  imageStyle="w-1/6"
                  details={
                    <Rating className="mt-1">
                      <Rating.Star />
                      <p className="ml-2 text-sm dark:text-white">4.95</p>
                    </Rating>
                  }
                />
              );
            })
          }
        </div>
        <div className="">
          <UiTypography as="h4" variant="heading" className="!text-blue-500 mb-5 text-xl">New</UiTypography>
          {
            [...Array(5)].map(b => {
              return (
                <BookCard
                  className="flex gap-4 mb-3"
                  imageStyle="w-1/6"
                  details={
                    <Rating className="mt-1">
                      <Rating.Star />
                      <p className="ml-2 text-sm dark:text-white">4.95</p>
                    </Rating>
                  }
                />
              );
            })
          }
        </div>
        <div className="">
          <UiTypography as="h4" variant="heading" className="!text-blue-500 mb-5 text-xl">Collection
            Ranking</UiTypography>
          {
            [...Array(5)].map(b => {
              return (
                <BookCard
                  className="flex gap-4 mb-3"
                  imageStyle="w-1/6"
                  details={
                    <Rating className="mt-1">
                      <Rating.Star />
                      <p className="ml-2 text-sm dark:text-white">4.95</p>
                    </Rating>
                  }
                />
              );
            })
          }
        </div>
      </div>
    </div>
  );
}

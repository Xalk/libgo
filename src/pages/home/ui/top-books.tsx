import { UiTypography } from "@/shared/ui/ui-typography";
import { Rating } from "flowbite-react";

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
                <div className="gap-4 flex mb-3">
                  <img
                    width={48}
                    className="rounded-lg"
                    src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/contemporary-fiction-night-time-book-cover-design-template-1be47835c3058eb42211574e0c4ed8bf_screen.jpg?ts=1698210220"
                    alt="..." />
                  <div>
                    <p className="line-clamp-1 font-bold text-gray-500 dark:text-gray-400">
                      Shadow Slave
                    </p>
                    <p>
                      Fantasy
                    </p>
                    <Rating className="mt-1">
                      <Rating.Star />
                      <p className="ml-2 text-sm dark:text-white">4.95</p>
                    </Rating>
                  </div>
                </div>
              )
            })
          }
        </div>
        <div className="">
          <UiTypography as="h4" variant="heading" className="!text-blue-500 mb-5 text-xl">New</UiTypography>
          {
            [...Array(5)].map(b => {
              return (
                <div className="gap-4 flex mb-3">
                  <img
                    width={48}
                    className="rounded-lg"
                    src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/contemporary-fiction-night-time-book-cover-design-template-1be47835c3058eb42211574e0c4ed8bf_screen.jpg?ts=1698210220"
                    alt="..." />
                  <div>
                    <p className="line-clamp-1 font-bold text-gray-500 dark:text-gray-400">
                      Shadow Slave
                    </p>
                    <p>
                      Fantasy
                    </p>
                    <Rating className="mt-1">
                      <Rating.Star />
                      <p className="ml-2 text-sm dark:text-white">4.95</p>
                    </Rating>
                  </div>
                </div>
              )
            })
          }
        </div>
        <div className="">
          <UiTypography as="h4" variant="heading" className="!text-blue-500 mb-5 text-xl">Collection Ranking</UiTypography>
          {
            [...Array(5)].map(b => {
              return (
                <div className="gap-4 flex mb-3">
                  <img
                    width={48}
                    className="rounded-lg"
                    src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/contemporary-fiction-night-time-book-cover-design-template-1be47835c3058eb42211574e0c4ed8bf_screen.jpg?ts=1698210220"
                    alt="..." />
                  <div>
                    <p className="line-clamp-1 font-bold text-gray-500 dark:text-gray-400">
                      Devouring Monarch: Rebirth of the Profane Phoenix
                    </p>
                    <p>
                      Fantasy
                    </p>
                    <Rating className="mt-1">
                      <Rating.Star />
                      <p className="ml-2 text-sm dark:text-white">4.95</p>
                    </Rating>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

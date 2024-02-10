import { UiTypography } from "@/shared/ui/ui-typography";
import { Rating } from "flowbite-react";

export function SimilarBooks() {
  return (
    <section className="mt-10">
      <UiTypography as="p" variant="primary" className="text-2xl font-bold">
        You May Also Like
      </UiTypography>
      <div className="flex mt-5 gap-7">
        {
          [...Array(6)].map(b => {
            return (
              <div className="w-1/6">
                <img
                  className="rounded-lg"
                  src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/contemporary-fiction-night-time-book-cover-design-template-1be47835c3058eb42211574e0c4ed8bf_screen.jpg?ts=1698210220"
                  alt="..." />
                <p className="line-clamp-2 font-bold">MMORPG : Rebirth Of The Strongest Vampire
                  God</p>
                <p>Fantasy</p>
                <Rating className="mt-1">
                  <Rating.Star />
                  <Rating.Star />
                  <Rating.Star />
                  <Rating.Star />
                  <Rating.Star filled={false} />
                  <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">4.56</p>
                </Rating>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}

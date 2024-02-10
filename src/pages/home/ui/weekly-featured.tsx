import Link from "next/link";
import { UiTypography } from "@/shared/ui/ui-typography";

export function WeeklyFeatured() {
  return (
    <div className="mt-12">
      <UiTypography as="h3" variant="heading" className="mb-5 pb-5 border-b">Weekly Featured</UiTypography>
      <div className="flex gap-[20px]">
        <div className="rounded flex flex-col gap-4 bg-gray-100">
          <div className="">
            <div
              className="rounded-t w-full h-72 bg-[url('https://d1csarkz8obe9u.cloudfront.net/posterpreviews/contemporary-fiction-night-time-book-cover-design-template-1be47835c3058eb42211574e0c4ed8bf_screen.jpg?ts=1698210220')] bg-cover bg-center">
              <div
                className="rounded-t w-full h-full flex flex-col justify-center items-center backdrop-blur-lg">
                <img
                  width={105}
                  className=""
                  src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/contemporary-fiction-night-time-book-cover-design-template-1be47835c3058eb42211574e0c4ed8bf_screen.jpg?ts=1698210220"
                  alt="..." />
              </div>
            </div>
          </div>
          <UiTypography as="p" variant="primary" className="p-5">
            Lu Wu, an aimless video game developer, had been feeling perturbed ever since he found
            out
            he
            was the direct descendant of a king from the underworld. Other than the title, His
            Excellency,
            his ancestor hadn't passed down anything else to him. On top of that, all of his
            ancestor’s
            subordinates had rebelled against hi
          </UiTypography>
        </div>
        <ul className="flex flex-wrap">
          {
            [...Array(7)].map(b => {
              return (
                <Link className="w-1/5" href="/book/123">
                  <li className="px-2">
                    <img
                      className="rounded-lg"
                      src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/contemporary-fiction-night-time-book-cover-design-template-1be47835c3058eb42211574e0c4ed8bf_screen.jpg?ts=1698210220"
                      alt="..." />
                    <UiTypography as="h4" variant="heading" className="text-base line-clamp-2">
                      Online In Another World
                    </UiTypography>
                    <UiTypography as="p" variant="body">Fantasy</UiTypography>
                  </li>
                </Link>
              );
            })
          }
        </ul>
      </div>
    </div>
  );
}

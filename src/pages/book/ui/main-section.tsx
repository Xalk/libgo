import { UiTypography } from "@/shared/ui/ui-typography";
import { UiLink } from "@/shared/ui/ui-link";
import { Button, Rating } from "flowbite-react";
import { BiSolidFlagAlt } from "react-icons/bi";
import { IoEye } from "react-icons/io5";
import { FaSheetPlastic } from "react-icons/fa6";
import { IoIosBookmarks } from "react-icons/io";


export function MainSection() {
  return (
    <div className="flex flex-wrap gap-8">
      <img
        className="rounded-lg lg:max-w-64 sm:max-w-full"
        src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/contemporary-fiction-night-time-book-cover-design-template-1be47835c3058eb42211574e0c4ed8bf_screen.jpg?ts=1698210220"
        alt="..." />
      <div className="flex flex-col justify-between">
        <div className="flex flex-col gap-4">
          <UiTypography as="h1" variant="heading">
            New Eden: Live to Play, Play to Live
          </UiTypography>
          <ul className="flex gap-4">
            <li className="flex gap-1 items-center"><IoIosBookmarks /> Games</li>
            <li className="flex gap-1 items-center"><FaSheetPlastic /> 111 Chapters</li>
            <li className="flex gap-1 items-center"><IoEye /> 3.8M Views</li>
          </ul>
          <UiTypography as="p" variant="primary" className="flex gap-1">
            Author: <UiLink href="#" className="text-blue-500 hover:underline">Galanar</UiLink>
          </UiTypography>
          <Rating>
            <Rating.Star />
            <Rating.Star />
            <Rating.Star />
            <Rating.Star />
            <Rating.Star filled={false} />
            <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">4.95</p>
          </Rating>
        </div>
        <div className="flex flex-col gap-4 items-start">
          <div className="flex gap-4">
            <Button pill gradientDuoTone="purpleToBlue">READ</Button>
            <Button pill gradientDuoTone="purpleToBlue">+ ADD TO LIBRARY</Button>
          </div>
          <UiLink href="#" className="hover:underline">
            <BiSolidFlagAlt />
            Report story
          </UiLink>
        </div>
      </div>
    </div>
  );
}

import { Carousel } from "flowbite-react";
import Link from "next/link";
import { UiTypography } from "@/shared/ui/ui-typography";

export function WeeklyBook() {

  const meetData = [
    {
      title: "Author Benefit",
      text: "Create a new book and get your bonus",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_jfUq52San2KAsZcDsrOXqiKj2AKD9nDrdg"
    },
    {
      title: "Library Gallery",
      text: "Get lost in the world of fanfiction and let your imagination run wild.",
      image: "https://media.istockphoto.com/id/179210288/photo/multimedia-background-composed-of-many-images.jpg?s=612x612&w=0&k=20&c=ilsCBiVakdsppvHjAup8fmFOnLlL0M2IwtCPTddA5Mg="
    },
    {
      title: "More Novels and Bonus!",
      text: "Download the App to get coins, FP, badges, and frames!",
      image: "https://androidwaves.com/wp-content/uploads/COVER-Best-Ebook-Reader-Apps-for-Android.jpg"
    }
  ];

  const wBooks = [
    {
      image: "https://img.freepik.com/free-psd/book-hardcover-mockup-three-views_125540-226.jpg"
    },
    {
      image: "https://www.creativefabrica.com/wp-content/uploads/2023/05/29/Two-Books-Mockup-Graphics-70837875-1-580x386.jpg"
    },
    {
      image: "https://blog-cdn.reedsy.com/directories/admin/featured_image/591/dissecting-the-cover-of-a-book-8fbcaf.webp"
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrR3sI7I4c6XA-6C5TEGhh3zhALUZBsTt2ltBqplpyAVZUylnPThp1L6Dc-7Ikq4HcmOs&usqp=CAU"
    }
  ];

  return (
    <div className="flex justify-between gap-4 mt-12">
      <div className="flex-1">
        <UiTypography as="h3" variant="heading" className="mb-5">Weekly Book</UiTypography>
        <Carousel slideInterval={3000} leftControl={<></>} rightControl={<></>} className="h-5/6">
          {
            wBooks.map(b => {
              return (
                <img
                  className="object-cover h-full"
                  src={b.image}
                  alt="..." />
              );
            })
          }
        </Carousel>
      </div>
      <div className="">
        <UiTypography as="h3" variant="heading" className="mb-5">Meet Libgo</UiTypography>
        <ul className="border-b dark:border-gray-700 mt-5">
          {
            meetData.map(m => {
              return (
                <Link href="#">
                  <li key={m.text} className="flex items-center justify-between gap-4 border-t dark:border-gray-700 p-3 hover:bg-gray-100 dark:hover:bg-gray-700">
                    <div className="flex flex-col">
                      <UiTypography as="h4" variant="heading" className="text-base">
                        {m.title}
                      </UiTypography>
                      <UiTypography as="p" variant="body">
                        {m.text}
                      </UiTypography>
                    </div>
                    <img
                      className="rounded h-16 w-24 object-cover"
                      src={m.image}
                      alt="..." />
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

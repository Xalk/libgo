import { UiTypography } from "@/shared/ui/ui-typography";
import { Button, Badge } from "flowbite-react";
import { IoMdSettings } from "react-icons/io";
import { useRouter } from "next/router";
import { ChapterList, useGetBookChapters, useWorkroom } from "@/features/workroom";
import { useEffect, useState } from "react";
import { UiSpinner } from "@/shared/ui/ui-spinner";
import ConfettiExplosion, { ConfettiProps } from "react-confetti-explosion";


export function ContentPage() {
  const router = useRouter();
  const { query } = useRouter();
  const bookId = query.bookId as string;


  const { getBookById, resetSelectedBookChapters } = useWorkroom();
  const { getBookChapters, isLoading } = useGetBookChapters();

  useEffect(() => {
    getBookChapters(Number(bookId));

    return () => {
      resetSelectedBookChapters();
    };
  }, []);


  const book = getBookById(bookId);

  const largeProps: ConfettiProps = {
    force: 0.8,
    duration: 3000,
    particleCount: 300,
    width: 1600,
    colors: ['#041E43', '#1471BF', '#5BB4DC', '#FC027B', '#66D805'],
  };
  const [isExploding, setIsExploding] = useState(false);
  const handleReleaseBook = async () => {
    setIsExploding(!isExploding);
  };

  return (
    <div className="container mx-auto max-w-5xl px-4 sm:px-6 xl:max-w-5xl xl:px-0 mt-8">
      <div className="flex justify-between pr-9">
        <div className="flex items-center gap-2">
          <UiTypography as="h2" variant="heading">
            {book?.name}
          </UiTypography>
          <Badge color="failure">Draft</Badge>
        </div>
        <div className="flex gap-2">
          <Button size="sm" pill color="gray" onClick={() => router.push(`/workroom/${bookId}/edit`)}>
            <IoMdSettings className="w-4 h-4" />
          </Button>
          {/*don't delete*/}
          {/*<Button size="sm" pill color="red" onClick={() => removeBook(bookId)}>*/}
          {/*  <MdDelete className="w-4 h-4" />*/}
          {/*</Button>*/}
        </div>
      </div>
      <div className="flex gap-2">
        <Button pill gradientDuoTone="purpleToBlue" size="sm" className="mt-5"
                onClick={() => router.push(`/workroom/${bookId}/chapter`)}>+ ADD CHAPTER
        </Button>
        <div>
          <Button pill gradientDuoTone="purpleToBlue" size="sm" className="mt-5"
                  onClick={handleReleaseBook}>
            RELEASE BOOK
            {isExploding && <ConfettiExplosion {...largeProps} />}
          </Button>

        </div>
      </div>
      {
        isLoading ? <UiSpinner className="mt-5" /> : <ChapterList className="mt-5" />
      }
    </div>
  );
}

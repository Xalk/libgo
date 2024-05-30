import { MainSection } from "./main-section";
import { AboutContentTabs } from "./about-content-tabs";
import { SimilarBooks } from "./similar-books";
import { Reviews } from "./reviews";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { booksApi } from "@/shared/api";
import { Book } from "@/entities/book";
import { UiPageSpinner } from "@/shared/ui/ui-page-spinner";


export function BookPage() {
  const [book, setBook] = useState<Book>({} as Book);

  const { query } = useRouter();
  const bookId = query.bookId as string;


  useEffect(()=> {
    booksApi.getApiBooksId("1", Number(bookId)).then(b=>{
      setBook(b)
    })
  }, [])

  return (
    <div className="mt-10 container mx-auto max-w-5xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">
      <MainSection name={book.name} />
      <AboutContentTabs />
      <SimilarBooks />
      <Reviews />
    </div>
  );
}

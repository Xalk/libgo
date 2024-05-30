import { ReactNode, useEffect, useState } from "react";
import { useTheme } from "@/features/theme-switcher";
import { Session, SessionProvider, api } from "@/entities/session";
import { booksApi } from "@/shared/api";
import { CURRENT_API_VERSION } from "@/shared/constants";
import { Book, BooksProvider } from "@/entities/book";
import { ComposeChildren } from "@/shared/lib/react";
import { WorkroomProvider } from "@/features/workroom";



export const loadAppLoaderData = async () => {
  try {
    const user = await api.getSession();
    const session = await api.getMe(user.sub)
    return { session };
  } catch {
    return {};
  }
};

export function AppLoader({
                            children,
                            data
                          }: {
  children?: ReactNode;
  data?: Awaited<ReturnType<typeof loadAppLoaderData>>;
}) {

  const [session, setSession] = useState<Session | undefined>(data?.session);
  const [books, setBooks] = useState<Book[] | undefined>();
  const [myBooks, setMyBooks] = useState<Book[] | undefined>();

  const isData = !!session && !!books;

  const [isLoading, setIsLoading] = useState(!isData);

  const loadBooks = async () => {
    try {
      const books = await booksApi.getApiBooks(CURRENT_API_VERSION);
      setBooks(books);
    } catch (e) {
      console.log(e);
    }
  };


  const loadTheme = useTheme((s) => s.loadTheme);


  useEffect(() => {
    loadTheme();

    if (isData) {
      return;
    }
    setIsLoading(true);

    loadBooks();

    loadAppLoaderData()
      .then(async (d) => {

        if (d.session) {
          setSession(d.session);

          const userBooks = await booksApi.getApiBooksUserUserId(CURRENT_API_VERSION, Number(d.session?.id));
          setMyBooks(userBooks);
        }
      })
      .finally(() => {
        setIsLoading(false);
      });

  }, [loadTheme, isData]);


  return (
    <>
      {isLoading ? null : (
        <ComposeChildren>
          <BooksProvider value={{ books: books ?? [] }} />
          <WorkroomProvider value={{ myBooks: myBooks ?? [] }} />
          <SessionProvider
            value={{
              session
            }}
          >
            {children}
          </SessionProvider>
        </ComposeChildren>
      )}

    </>
  );
}

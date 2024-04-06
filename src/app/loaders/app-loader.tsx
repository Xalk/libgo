import { ReactNode, useEffect, useState } from "react";
import { useTheme } from "@/features/theme-switcher";
import { Session, SessionProvider } from "@/entities/session";
import { booksApi } from "@/shared/api";
import { CURRENT_API_VERSION } from "@/shared/constants";
import { Book, BooksProvider } from "@/entities/book";
import { ComposeChildren } from "@/shared/lib/react";


export const loadAppLoaderData = async () => {
  try {
    const books = await booksApi.getApiBooks(CURRENT_API_VERSION);
    return { books };
  } catch {
    return {};
  }
};

export function AppLoader({
                            children,
                            data: defaultData
                          }: {
  children?: ReactNode;
  data?: Awaited<ReturnType<typeof loadAppLoaderData>>;
}) {

  const [session, setSession] = useState<Session | undefined>({
    nickname: "123",
    email: "123"
  });
  const [data, setData] = useState(defaultData);
  const books = data?.books;
  const isData = !!books;

  const [isLoading, setIsLoading] = useState(!isData);

  const loadTheme = useTheme((s) => s.loadTheme);


  useEffect(() => {
    loadTheme();

    if (isData) {
      return;
    }
    setIsLoading(true);

    loadAppLoaderData()
      .then(setData)
      .finally(() => {
        setIsLoading(false);
      });

  }, [loadTheme]);


  return (
    <>
      {isLoading ? null : (
        <ComposeChildren>
          <BooksProvider value={{ books: books ?? [] }} />
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

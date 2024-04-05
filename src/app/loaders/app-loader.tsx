import { ReactNode, useEffect, useState } from "react";
import { useTheme } from "@/features/theme-switcher";
import { Session, SessionProvider } from "@/entities/session";


export const loadAppLoaderData = async () => {

};

export function AppLoader({
                            children
                          }: {
  children?: ReactNode;
  data?: Awaited<ReturnType<typeof loadAppLoaderData>>;
}) {

  const [session, setSession] = useState<Session | undefined>({
    nickname: "123",
    email: "123",

  });

  const loadTheme = useTheme((s) => s.loadTheme);


  useEffect(() => {
    loadTheme();


  }, [loadTheme]);


  return (
    <>
      <SessionProvider value={{ session }}>

        {children}
      </SessionProvider>
    </>
  );
}

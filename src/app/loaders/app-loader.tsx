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
    id: "123",
    userId: "123",
    name: "123",
    email: "123",
    avatarId: "123",
    role: "user"
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

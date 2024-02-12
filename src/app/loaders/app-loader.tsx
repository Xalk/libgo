import { ReactNode, useEffect } from "react";
import { useTheme } from "@/features/theme-switcher";


export const loadAppLoaderData = async () => {

};

export function AppLoader({
                            children,
                          }: {
  children?: ReactNode;
  data?: Awaited<ReturnType<typeof loadAppLoaderData>>;
}) {


  const loadTheme = useTheme((s) => s.loadTheme);


  useEffect(() => {
    loadTheme();


  }, [loadTheme]);

  return (
    <div>
      {children}
    </div>
  );
}

import { AppProps } from "next/app";
import { AppProvider } from "../providers/app-provider";
import { AppLayout } from "../layouts/app-layout";
import { NextPage } from "next";
import { NextPageLayout } from "@/shared/lib/next";
import { AppLoader } from "../loaders/app-loader";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: NextPageLayout;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};


export function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <AppLoader>
      <AppProvider>
        <AppLayout>
          {getLayout(<Component {...pageProps} />, pageProps)}
        </AppLayout>
      </AppProvider>
    </AppLoader>
  );
}

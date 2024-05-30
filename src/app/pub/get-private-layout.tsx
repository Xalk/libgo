import { NextPageLayout } from "@/shared/lib/next";
import { loadAppLoaderData } from "../loaders/app-loader";
import { loadPrivateLoaderData, PrivateLoader } from "@/app/loaders/private-loader";
import { PrivateLayout } from "@/app/layouts/private-layout";

export const getPrivateLayout: NextPageLayout = (children, data) => (
  <PrivateLoader data={data}>
    <PrivateLayout>{children}</PrivateLayout>
  </PrivateLoader>
);

export const getPrivateRouterLoader = async () => {
  return Object.assign(
    ...(await Promise.all([loadAppLoaderData(), loadPrivateLoaderData()])),
  );
};

import { NextPageLayout } from "@/shared/lib/next";
import { ReaderLayout } from "@/app/layouts/reader-layout";

export const getReaderLayout: NextPageLayout = (children) => (
  <ReaderLayout>{children}</ReaderLayout>
);

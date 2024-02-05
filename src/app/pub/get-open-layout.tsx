import { NextPageLayout } from "@/shared/lib/next";
import {OpenLayout} from "@/app/layouts/open-layout";

export const getOpenLayout: NextPageLayout = (children) => (
    <OpenLayout>{children}</OpenLayout>
);

import { setPageLayout } from "@/shared/lib/next";
import { CreateBookPage } from "@/pages/book";
import { getPrivateLayout } from "@/app/pub/get-private-layout";

export default setPageLayout(CreateBookPage, getPrivateLayout);

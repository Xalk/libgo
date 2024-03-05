import { setPageLayout } from "@/shared/lib/next";
import { CreateBookPage } from "@/pages/book";
import { getOpenLayout } from "@/app/pub/get-open-layout";

export default setPageLayout(CreateBookPage, getOpenLayout);

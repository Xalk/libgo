import {setPageLayout} from "@/shared/lib/next";
import {BookPage} from "@/pages/book";
import {getOpenLayout} from "@/app/pub/get-open-layout";

export default setPageLayout(BookPage, getOpenLayout);

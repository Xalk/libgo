import {setPageLayout} from "@/shared/lib/next";
import { ReaderPage } from "@/pages/reader";
import { getReaderLayout } from "@/app/pub/get-reader-layout";

export default setPageLayout(ReaderPage, getReaderLayout);

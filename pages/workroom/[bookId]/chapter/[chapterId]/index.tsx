import {setPageLayout} from "@/shared/lib/next";
import {getOpenLayout} from "@/app/pub/get-open-layout";
import { EditChapterPage } from "@/pages/workroom";

export default setPageLayout(EditChapterPage, getOpenLayout);

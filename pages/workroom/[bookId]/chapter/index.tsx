import {setPageLayout} from "@/shared/lib/next";
import {getOpenLayout} from "@/app/pub/get-open-layout";
import { CreateChapterPage } from "@/pages/workroom";

export default setPageLayout(CreateChapterPage, getOpenLayout);

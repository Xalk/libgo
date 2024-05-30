import {setPageLayout} from "@/shared/lib/next";
import { EditChapterPage } from "@/pages/workroom";
import { getPrivateLayout } from "@/app/pub/get-private-layout";

export default setPageLayout(EditChapterPage, getPrivateLayout);

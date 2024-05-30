import {setPageLayout} from "@/shared/lib/next";
import { CreateChapterPage } from "@/pages/workroom";
import { getPrivateLayout } from "@/app/pub/get-private-layout";

export default setPageLayout(CreateChapterPage, getPrivateLayout);

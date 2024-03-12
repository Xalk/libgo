import {setPageLayout} from "@/shared/lib/next";
import {getOpenLayout} from "@/app/pub/get-open-layout";
import { EditPage } from "@/pages/workroom";

export default setPageLayout(EditPage, getOpenLayout);

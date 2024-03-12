import {setPageLayout} from "@/shared/lib/next";
import {getOpenLayout} from "@/app/pub/get-open-layout";
import { ContentPage } from "@/pages/workroom";

export default setPageLayout(ContentPage, getOpenLayout);

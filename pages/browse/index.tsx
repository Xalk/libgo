import {setPageLayout} from "@/shared/lib/next";
import {getOpenLayout} from "@/app/pub/get-open-layout";
import { BrowsePage } from "@/pages/browse";

export default setPageLayout(BrowsePage, getOpenLayout);

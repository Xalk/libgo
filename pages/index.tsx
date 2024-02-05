import {setPageLayout} from "@/shared/lib/next";
import {getOpenLayout} from "@/app/pub/get-open-layout";
import {HomePage} from "@/pages/home";

export default setPageLayout(HomePage, getOpenLayout);

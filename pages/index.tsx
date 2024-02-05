import {HomePage} from "@/pages/home";
import {setPageLayout} from "@/shared/lib/next";
import {getOpenLayout} from "@/app/pub/get-open-layout";

export default setPageLayout(HomePage, getOpenLayout);

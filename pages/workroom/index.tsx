import {setPageLayout} from "@/shared/lib/next";
import {getOpenLayout} from "@/app/pub/get-open-layout";
import { WorkroomPage } from "@/pages/workroom";

export default setPageLayout(WorkroomPage, getOpenLayout);

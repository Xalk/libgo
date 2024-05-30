import {setPageLayout} from "@/shared/lib/next";
import { WorkroomPage } from "@/pages/workroom";
import { getPrivateLayout } from "@/app/pub/get-private-layout";

export default setPageLayout(WorkroomPage, getPrivateLayout);

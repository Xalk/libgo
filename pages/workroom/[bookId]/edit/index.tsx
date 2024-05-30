import {setPageLayout} from "@/shared/lib/next";
import { EditPage } from "@/pages/workroom";
import { getPrivateLayout } from "@/app/pub/get-private-layout";

export default setPageLayout(EditPage, getPrivateLayout);

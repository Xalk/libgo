import {setPageLayout} from "@/shared/lib/next";
import { ContentPage } from "@/pages/workroom";
import { getPrivateLayout } from "@/app/pub/get-private-layout";

export default setPageLayout(ContentPage, getPrivateLayout);

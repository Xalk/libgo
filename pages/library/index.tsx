import {setPageLayout} from "@/shared/lib/next";
import {LibraryPage} from "@/pages/library";
import { getPrivateLayout } from "@/app/pub/get-private-layout";

export default setPageLayout(LibraryPage, getPrivateLayout);

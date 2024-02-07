import {setPageLayout} from "@/shared/lib/next";
import {getOpenLayout} from "@/app/pub/get-open-layout";
import {LibraryPage} from "@/pages/library";

export default setPageLayout(LibraryPage, getOpenLayout);

import {setPageLayout} from "@/shared/lib/next";
import {getOpenLayout} from "@/app/pub/get-open-layout";
import {ProfilePage} from "@/pages/profile";

export default setPageLayout(ProfilePage, getOpenLayout);

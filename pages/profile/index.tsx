import {setPageLayout} from "@/shared/lib/next";
import {ProfilePage} from "@/pages/profile";
import { getPrivateLayout } from "@/app/pub/get-private-layout";

export default setPageLayout(ProfilePage, getPrivateLayout);

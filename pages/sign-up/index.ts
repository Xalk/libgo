import { getOpenLayout } from "@/app/pub/get-open-layout";
import { setPageLayout } from "@/shared/lib/next";
import { SignUpPage } from "@/pages/sign-up";

export default setPageLayout(SignUpPage, getOpenLayout);

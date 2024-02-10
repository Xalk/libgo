// import { UpdateLang } from "@/features/i18n/";
// import { UpdateTheme } from "@/features/theme";
import {UiHeader} from "@/shared/ui/ui-header";
import {UiFooter} from "@/shared/ui/ui-footer";
import { Button } from "flowbite-react";

export function OpenLayout({children}: { children?: React.ReactNode }) {
    return (
        <>
            <UiHeader
                links={<div></div>}
                right={
                    <div className="flex gap-4 items-center ml-auto">
                        {/*<UpdateLang />*/}
                        {/*<UpdateTheme />*/}
                        <Button pill gradientDuoTone="purpleToBlue">SIGN IN</Button>
                    </div>
                }
            />
            <main
                className="flex flex-col justify-between font-sans mt-16">{children}</main>
            <UiFooter/>
        </>
    );
}

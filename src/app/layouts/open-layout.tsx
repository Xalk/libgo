// import { UpdateLang } from "@/features/i18n/";
// import { UpdateTheme } from "@/features/theme";
import { UiHeader } from "@/shared/ui/ui-header/ui-header";
import { UiFooter } from "@/shared/ui/ui-footer";
import { Button } from "flowbite-react";
import { ThemeSwitch } from "@/features/theme-switcher";

export function OpenLayout({ children }: { children?: React.ReactNode }) {
  return (
    <div className="dark:bg-dark-mode">
      <UiHeader
        links={<div></div>}
        right={
          <div className="flex gap-4 items-center ml-auto">
            {/*<UpdateLang />*/}
            <ThemeSwitch />
            <Button pill gradientDuoTone="purpleToBlue">SIGN IN</Button>
          </div>
        }
      />
      <main
        className="flex flex-col justify-between font-sans mt-16">{children}</main>
      <UiFooter />
    </div>
  );
}

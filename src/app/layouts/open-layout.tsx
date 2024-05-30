// import { UpdateLang } from "@/features/i18n/";
// import { UpdateTheme } from "@/features/theme";
import { UiHeader } from "@/shared/ui/ui-header/ui-header";
import { UiFooter } from "@/shared/ui/ui-footer";
import { Button } from "flowbite-react";
import { ThemeSwitch } from "@/features/theme-switcher";
import { useSession } from "@/entities/session";
import { Profile } from "@/widgets/profile";
import { useRouter } from "next/router";

export function OpenLayout({ children }: { children?: React.ReactNode }) {

  const currentSession = useSession(s => s.currentSession);
  const router = useRouter();
  const handleSignIn = () => {
    router.push("/sign-in");
  };

  return (
    <div className="dark:bg-dark-mode">
      <UiHeader
        right={
          <div className="flex gap-4 items-center ml-auto">
            {/*<UpdateLang />*/}
            <ThemeSwitch />
            {
              currentSession ? <Profile /> :
                <Button pill gradientDuoTone="purpleToBlue" onClick={handleSignIn}>SIGN IN</Button>
            }
          </div>
        }
      />
      <main
        className="flex flex-col justify-between font-sans mt-16">{children}</main>
      <UiFooter />
    </div>
  );
}

// import { UpdateLang } from "@/features/i18n/";
// import { UpdateTheme } from "@/features/theme";
import { UiHeader } from "@/shared/ui/ui-header/ui-header";
import { UiFooter } from "@/shared/ui/ui-footer";
import { Button } from "flowbite-react";
import { ThemeSwitch } from "@/features/theme-switcher";
import { useSession } from "@/entities/session";
import { Profile } from "@/widgets/profile";
import { useRouter } from "next/router";

export function ReaderLayout({ children }: { children?: React.ReactNode }) {

  const currentSession = useSession(s => s.currentSession);
  const router = useRouter();
  const handleSignIn = () => {
    router.push("/sign-in");
  };

  return (
    <div className="dark:bg-dark-mode">
      <UiHeader
        isMobileNav={false}
        className=""
        links={
        <div>

        </div>}
        right={
          <div className="flex gap-4 items-center ml-auto">
            <ThemeSwitch />
          </div>
        }
      />
      <main
        className="flex flex-col justify-between font-sans">{children}</main>
    </div>
  );
}

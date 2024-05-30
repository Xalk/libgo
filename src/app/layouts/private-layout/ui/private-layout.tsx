import { UiHeader } from "@/shared/ui/ui-header/ui-header";
import { ThemeSwitch } from "@/features/theme-switcher";
import { UiFooter } from "@/shared/ui/ui-footer";
import { Profile } from "@/widgets/profile";

export function PrivateLayout({ children }: { children?: React.ReactNode }) {
  return (
    <div className="dark:bg-dark-mode">
      <UiHeader
        right={
          <div className="flex gap-4 items-center ml-auto">
            <ThemeSwitch />
            <Profile />
          </div>
        }
      />
      <main
        className="flex flex-col justify-between font-sans mt-16">{children}</main>
      <UiFooter />
    </div>
  );
}

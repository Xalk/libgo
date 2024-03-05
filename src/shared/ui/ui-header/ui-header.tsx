import { ReactNode, useState } from "react";
import clsx from "clsx";
import { UiLogo } from "@/shared/ui/ui-logo";
import Link from "next/link";
import { UiLink } from "@/shared/ui/ui-link";
import { headerNavLinks } from "./nav-links";
import { UiMobileNav } from "./ui-mobile-nav";
import { IoSearch } from "react-icons/io5";


type UiHeaderProps = {
  className?: string;
  links?: ReactNode;
  right?: ReactNode;
}


export function UiHeader({ className, right, links }: UiHeaderProps) {

  const [isActive, setIsActive] = useState(false);

  const toggleActive = () => {
    setIsActive(!isActive);
  };


  return (
    <header
      className={clsx(
        "dark:bg-dark-mode fixed top-0 left-0 w-full z-50 bg-white border-b p-3 dark:border-gray-700",
        className
      )}
    >
      <div className="mx-auto max-w-5xl flex justify-between">
        <div className="flex items-center space-x-4 leading-5 sm:space-x-6">
          <Link href="/">
            <UiLogo />
          </Link>
          {headerNavLinks
            .filter((link) => link.href !== "/")
            .map((link) => (
              <UiLink
                key={link.title}
                href={link.href}
                className="hidden font-bold hover:text-[#4f6be6] dark:hover:text-[#4f6be6] sm:block"
              >
                <div className="flex items-center gap-2">
                  {link.icon}{link.title}
                </div>
              </UiLink>
            ))}
        </div>
        {/*{links}*/}
        <div className="flex items-center gap-4">
          <div className="hidden sm:block relative top-[-20px]">
            <input
              type="text"
              placeholder="Search"
              className={`absolute right-0 w-0 h-10 px-5 outline-none rounded-full border border-[#d7d8e0] transition-all duration-800 ${isActive ? "w-80 right-2" : ""}`}
            />
            <div
              onClick={toggleActive}
              className={`absolute right-0 w-10 h-10 border border-[#d7d8e0] rounded-full cursor-pointer flex items-center justify-center text-white transition-all duration-800 ${isActive ? "right-2" : ""}`}
            >
              <IoSearch
                style={{
                  transition: "transform 0.8s",
                  transform: isActive ? "rotate(-360deg)" : "rotate(0deg)",
                  color: "#83848f"
                }} />
            </div>
          </div>

          {/*<UiLink*/}
          {/*  href="/library"*/}
          {/*  className="hidden font-bold hover:text-[#4f6be6] dark:hover:text-[#4f6be6] sm:block"*/}
          {/*>*/}
          {/*  Library*/}
          {/*</UiLink>*/}
          {right}

          <UiMobileNav />
        </div>


      </div>

    </header>
  );
}

import {ReactNode} from "react";
import clsx from "clsx";
import {UiLogo} from "@/shared/ui/ui-logo";
import Link from "next/link";
import {headerNavLinks} from "@/shared/constants";

type UiHeaderProps = {
    className?: string;
    links?: ReactNode;
    right?: ReactNode;
}

export function UiHeader({className, right, links,}: UiHeaderProps) {
    return (
        <header
            className={clsx(
                "fixed top-0 left-0 w-full z-50 bg-white border-b p-3",
                className,
            )}
        >
            <div className="mx-auto max-w-5xl flex">
                <div className="flex items-center space-x-4 leading-5 sm:space-x-6">
                    <Link href="/">
                        <UiLogo/>
                    </Link>
                    {headerNavLinks
                        .filter((link) => link.href !== "/")
                        .map((link) => (
                            <Link
                                key={link.title}
                                href={link.href}
                                className="hidden font-medium text-gray-900 dark:text-gray-100 sm:block"
                            >
                                {link.title}
                            </Link>
                        ))}

                </div>
                {/*{links}*/}
                {right}
            </div>
        </header>
    );
}

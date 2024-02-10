import clsx from "clsx";
import Link, { LinkProps } from "next/link";
import { HTMLProps, RefAttributes } from "react";


export type UiLinkProps = {
  href: string;
} & LinkProps & HTMLProps<HTMLAnchorElement> & RefAttributes<HTMLAnchorElement>;

export function UiLink({
                           className,
                           children,
                           ...props
                         }: UiLinkProps) {
  return (
    <Link
      {...props}
      className={clsx(
        className,
        "flex gap-1 items-center text-center text-[#12121799]")}
    >
      {children}
    </Link>
  );
}

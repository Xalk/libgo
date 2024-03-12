import clsx from "clsx";
import { ReactNode } from "react";


export function WorkroomLayout({
                                 children,
                                 className
                               }: {
  children?: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={clsx(
        "mx-auto max-w-5xl px-4 sm:px-6 xl:max-w-5xl xl:px-0 mt-7",
        className
      )}
    >
      {children}
    </div>
  );
}

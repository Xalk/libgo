import clsx from "clsx";
import type { JSX, ReactNode } from "react";


type TypographyProps = {
  as: keyof JSX.IntrinsicElements;
  variant: "heading" | "primary" | "body";
  className?: string;
  children?: ReactNode;
};

export function UiTypography({
                               as: Component = "div",
                               variant = "body",
                               className,
                               children,
                               ...rest
                             }: TypographyProps) {

  const variantClasses = {
    heading: "text-3xl font-bold tracking-tight text-gray-900 dark:text-white",
    primary: "text-gray-900 dark:text-white",
    body: "text-gray-500 dark:text-gray-400"
  }[variant];

  return (
    <Component className={clsx(variantClasses, className)} {...rest}>
      {children}
    </Component>
  );

}

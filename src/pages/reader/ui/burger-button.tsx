import type { ReactNode } from "react";
import clsx from "clsx";

interface BurgerButtonProps {
  onClick: () => void;
  className?: string;
  children?: ReactNode;
}
const BurgerMenu = ({ onClick, className, children }: BurgerButtonProps) => (
  <div
    className={clsx(className, "fixed top-2 right-20 bg-gray-900 text-white py-2 px-4 rounded cursor-pointer z-50")}
    onClick={onClick}>
    {children}
  </div>
);

export default BurgerMenu;

import { ReactNode } from "react";
import clsx from "clsx";

export type UiParallaxBlockProps = {
  title?: string;
  children?: ReactNode;
  className?: string;
}

export function UiParallaxBlock({title, children, className}: UiParallaxBlockProps) {
  return (
    <div
      className={clsx("relative bg-cover bg-center bg-fixed bg-[url('https://static.vecteezy.com/system/resources/previews/022/276/247/original/bookshelves-background-generative-ai-free-photo.jpeg')]", className)}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
      <div className="relative z-10 text-center text-white py-16 max-w-3xl mx-auto">
        <h2 className=" text-4xl mb-6">{title}</h2>
          {children}
      </div>
    </div>
  )
}

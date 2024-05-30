import { forwardRef } from "react";
import { UiTypography } from "@/shared/ui/ui-typography";


const A4Sheet = forwardRef<HTMLDivElement, { content: string, title: string }>(({ content, title }, ref) => {
  return (
    <div
      className="lg:max-w-[210mm] mx-auto max-w-full my-2 lg:p-10 sm:p-5 p-3 bg-white shadow-md overflow-hidden border border-gray-300 break-after:always dark:bg-gray-800 dark:border-gray-700"
      ref={ref}>
      <UiTypography as="h3" variant="heading" className="font-bold text-black text-2xl leading-8 mb-5">{title}</UiTypography>
      <UiTypography as="p" variant="body"
                    className="font-normal text-black text-lg leading-8 overflow-auto h-full">{content}</UiTypography>
    </div>
  );
});

export default A4Sheet;

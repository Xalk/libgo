import clsx from "clsx";

export type UiUiChipProps = {
  className?: string;
  title: string;
  isActive?: boolean;
}

export function UiChip({ className, title, isActive }: UiUiChipProps) {
  return (
    <div
      className={clsx(
        className,
        "relative grid select-none items-center whitespace-nowrap rounded-full border border-[#d7d8e0] py-1.5 px-3 font-sans text-sm text-gray-700 cursor-pointer",
        {
          "bg-[#3b66f51f] text-[#3b66f5] border-[#00000000]": isActive,
        }
      )
      }>
      <span className="">{title}</span>
    </div>
  );
}

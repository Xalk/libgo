import { PropsWithRef, InputHTMLAttributes, useId } from "react";
import clsx from 'clsx';


export type UiNumberFieldProps = {
  className?: string;
  label?: string;
  error?: string;
  inputProps?: PropsWithRef<InputHTMLAttributes<HTMLInputElement>>;
};

export function UiNumberField({
                                className,
                                error,
                                label,
                                inputProps,
                              }: UiNumberFieldProps) {
  const id = useId();
  const inputClassName = clsx(
    inputProps?.className,
    "h-10",
    "block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500",
    "dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
  );
  return (
    <div className={clsx(className, "flex flex-col gap-1")}>
      {label && (
        <label htmlFor={id} className="block">
          {label}
        </label>
      )}
      <input
        {...inputProps}
        id={id}
        type="number"  // Set input type to number
        className={inputClassName}
      />
      {error && <div className="text-rose-400 text-sm">{error}</div>}
    </div>
  );
}

import clsx from "clsx";
import {
  InputHTMLAttributes,
  TextareaHTMLAttributes,
  PropsWithRef,
  useId,
} from "react";

export type UiTextFieldProps = {
  className?: string;
  label?: string;
  error?: string;
  inputProps?: PropsWithRef<InputHTMLAttributes<HTMLInputElement>>;
  textAreaProps?: PropsWithRef<TextareaHTMLAttributes<HTMLTextAreaElement>>;
  multiline?: boolean;
};

export function UiTextField({
                              className,
                              error,
                              label,
                              inputProps,
                              multiline,
                              textAreaProps,
                            }: UiTextFieldProps) {
  const id = useId();
  const inputClassName = clsx(
    multiline ? textAreaProps?.className : inputProps?.className,
    !multiline ? "h-10" : "py-2",
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
      {multiline ? (
        <textarea {...textAreaProps} id={id} className={inputClassName} />
      ) : (
        <input {...inputProps} id={id} className={inputClassName} />
      )}
      {error && <div className="text-rose-400 text-sm">{error}</div>}
    </div>
  );
}

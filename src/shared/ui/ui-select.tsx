import clsx from "clsx";
import { PropsWithRef, SelectHTMLAttributes } from "react";

export type Option = {
  id: string | number;
  value: string;
  label: string;
};

type UiSelectProps<T extends Option | undefined> = {
  className?: string;
  options?: T[];
  value?: T;
  onChange: (value: T) => void;
  label?: string;
  error?: string;
  selectProps?: PropsWithRef<SelectHTMLAttributes<HTMLSelectElement>>;
};

export function UiSelect<T extends Option | undefined>({
                                                         className,
                                                         onChange,
                                                         options,
                                                         value,
                                                         label,
                                                         error,
                                                         selectProps,
                                                       }: UiSelectProps<T>) {
  const handleChange = (newValue: T | null) => {
    onChange(newValue ?? ({} as T));
  };

  return (
    <div className={clsx(className)}>
      {label && (
        <label
          htmlFor="options"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          {label}
        </label>
      )}
      <select
        id="options"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        {...selectProps}
        onChange={(e) => {
          const selectedOption = options?.find(
            (option) => option?.value === e.target.value
          );
          if (selectedOption) {
            handleChange(selectedOption);
          }
        }}
        value={value?.value}
      >
        <option disabled={!value} hidden={!value} value="">
          {label || "Choose an option"}
        </option>
        {options?.map((option) => (
          <option key={option?.id} value={option?.value}>
            {option?.label}
          </option>
        ))}
      </select>
      {error && <div className="text-rose-400 text-sm">{error}</div>}
    </div>
  );
}

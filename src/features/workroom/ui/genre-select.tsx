import { Option, UiSelect } from "@/shared/ui/ui-select";
import { PropsWithRef, SelectHTMLAttributes, useState } from "react";

const options = [
  { id: 1, value: "US", label: "United States" },
  { id: 2, value: "CA", label: "Canada" },
  { id: 3, value: "FR", label: "France" },
  { id: 4, value: "DE", label: "Germany" }
];

type GenreSelectProps = {
  selectProps?: PropsWithRef<SelectHTMLAttributes<HTMLSelectElement>>;
  className?: string;
  label?: string;
  error?: string;
}

export function GenreSelect({selectProps, className, label, error}: GenreSelectProps) {

  const [selectedOption, setSelectedOption] = useState<Option | undefined>(
    undefined
  );

  const handleOptionChange = (option: Option) => {
    setSelectedOption(option);
  };

  return (
    <UiSelect
      className={className}
      options={options}
      value={selectedOption}
      onChange={handleOptionChange}
      label={label}
      error={error}
      selectProps={selectProps}
    />
  );
}

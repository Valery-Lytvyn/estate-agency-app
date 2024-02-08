import React, { memo } from "react";

interface FormInputProps {
  id: string;
  name: string;
  type: "text" | "email";
  placeholder: string;
  value: string;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isSubmitClicked: boolean;
}

const FormInput = ({
  id,
  name,
  type,
  placeholder,
  value,
  handleInputChange,
  isSubmitClicked,
}: FormInputProps) => {
  return (
    <input
      type={type}
      name={name}
      id={id}
      value={value}
      placeholder={placeholder}
      required
      onChange={(e) => handleInputChange(e)}
      className={`w-full rounded-lg border px-3 py-2 outline-none focus:border-primary ${isSubmitClicked && !value ? "border-red-600" : null}`}
    />
  );
};

export default memo(FormInput);

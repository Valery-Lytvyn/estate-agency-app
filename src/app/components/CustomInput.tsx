import React from "react";

interface CustomInputProps {
  id: string;
  name: string;
  type: "text" | "email";
  placeholder: string;
  value: string;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function CustomInput({
  id,
  name,
  type,
  placeholder,
  value,
  handleInputChange,
}: CustomInputProps) {
  return (
    <input
      type={type}
      name={name}
      id={id}
      value={value}
      placeholder={placeholder}
      onChange={(e) => handleInputChange(e)}
      required
      className="w-full rounded-lg border px-3 py-2 outline-primary invalid:outline-red-600 "
    />
  );
}

export default CustomInput;

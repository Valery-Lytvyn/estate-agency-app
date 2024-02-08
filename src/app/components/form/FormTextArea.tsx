import React from "react";

interface FormTextAreaProps {
  id: string;
  name: string;
  placeholder: string;
  value: string;
  handleInputChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  isSubmitClicked: boolean;
}
const FormTextArea = ({
  id,
  name,
  placeholder,
  value,
  handleInputChange,
  isSubmitClicked,
}: FormTextAreaProps) => {
  return (
    <textarea
      name={name}
      id={id}
      value={value}
      placeholder={placeholder}
      required
      rows={6}
      onChange={(e) => handleInputChange(e)}
      className={`rounded-lg border px-3 py-2 outline-primary ${isSubmitClicked && !value ? "border-red-600" : null}`}
    />
  );
};

export default FormTextArea;

import React, { useState } from "react";

const defaultFormData = {
  name: "",
  subject: "",
  email: "",
  message: "",
};

const useForm = () => {
  const [formData, setFormData] = useState(defaultFormData);
  const [isSubmitClicked, setIsSubmitClicked] = useState(false);

  const handleInputChange = ({
    target,
  }:
    | React.ChangeEvent<HTMLInputElement>
    | React.ChangeEvent<HTMLTextAreaElement>) => {
    const currentId = target.id;
    const currentValue = target.value;
    setFormData((prev) => ({
      ...prev,
      [currentId]: currentValue,
    }));
  };

  const submitHandler = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormData(defaultFormData);
    setIsSubmitClicked(false);
  };
  const clickHandler = () => {
    setIsSubmitClicked(true);
  };
  return {
    formData,
    isSubmitClicked,
    handleInputChange,
    submitHandler,
    clickHandler,
  };
};

export default useForm;

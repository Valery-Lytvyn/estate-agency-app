import React from "react";
import FormInput from "./FormInput";
import FormTextArea from "./FormTextArea";
import FormSubmitButton from "./FormSubmitButton";
import useForm from "../../hooks/useForm";
import WarningMessage from "./WarningMessage";

const AgentInquiryForm = () => {
  const {
    formData,
    isSubmitClicked,
    handleInputChange,
    submitHandler,
    clickHandler,
  } = useForm();

  return (
    <form
      className="flex flex-col gap-2"
      onSubmit={(e: React.ChangeEvent<HTMLFormElement>) => submitHandler(e)}
    >
      <FormInput
        id="name"
        name="name"
        type="text"
        placeholder="Name*"
        value={formData.name}
        handleInputChange={handleInputChange}
        isSubmitClicked={isSubmitClicked}
      />
      <FormInput
        id="email"
        name="email"
        type="email"
        placeholder="Email*"
        value={formData.email}
        handleInputChange={handleInputChange}
        isSubmitClicked={isSubmitClicked}
      />
      <FormTextArea
        id="message"
        name="message"
        placeholder="Comment*"
        value={formData.message}
        handleInputChange={handleInputChange}
        isSubmitClicked={isSubmitClicked}
      />
      {isSubmitClicked &&
        (!formData.name || !formData.email || !formData.message) && (
          <WarningMessage />
        )}
      <FormSubmitButton title="Send message" clickHandler={clickHandler} />
    </form>
  );
};

export default AgentInquiryForm;

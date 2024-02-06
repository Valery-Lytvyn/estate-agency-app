import React, { FormEvent, useState } from "react";
import CustomInput from "./CustomInput";

const defaultFormData = {
  name: "",
  email: "",
  comment: "",
};

function ContactForm() {
  const [formData, setFormData] = useState(defaultFormData);
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
  };
  return (
    <form
      className="flex flex-col gap-2"
      onSubmit={(e: React.ChangeEvent<HTMLFormElement>) => submitHandler(e)}
    >
      <CustomInput
        id="name"
        name="name"
        type="text"
        placeholder="Name*"
        value={formData.name}
        handleInputChange={handleInputChange}
      />
      <CustomInput
        id="email"
        name="email"
        type="email"
        placeholder="Email*"
        value={formData.email}
        handleInputChange={handleInputChange}
      />
      <textarea
        id="comment"
        name="comment"
        placeholder="Comment*"
        value={formData.comment}
        required
        rows={6}
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
          handleInputChange(e)
        }
        className="rounded-lg border px-3 py-2 outline-primary invalid:outline-red-600"
      />
      <button
        type="submit"
        className="w-full bg-black px-4 py-3 font-extralight capitalize text-white hover:shadow-lg md:w-56"
      >
        Send message
      </button>
    </form>
  );
}

export default ContactForm;

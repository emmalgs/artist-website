import React from "react";
import FormInput from "../atoms/FormInput";
import FormLabel from "../atoms/FormLabel";
import { FormSectionProps } from "../../../types";

const FormSection: React.FC<FormSectionProps> = ({
  type,
  text,
  name,
  placeholder,
  handleInputEvent,
  value,
}) => {
  return (
    <div className="pt-4 pb-2 w-full">
      <div className="mb-4">
        <FormLabel text={text} labelId={name} />
      </div>
      <div className="md:w-5/6">
        <FormInput
          type={type}
          name={name}
          placeholder={placeholder}
          handleChange={handleInputEvent}
          value={value}
        />
      </div>
    </div>
  );
};

export default FormSection;

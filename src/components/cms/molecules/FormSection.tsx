import React from "react";
import FormInput from "../atoms/FormInput";
import FormLabel from "../atoms/FormLabel";

interface FormSectionProps {
  type: string;
  text: string;
  name: string;
  placeholder: string;
}

const FormSection: React.FC<FormSectionProps> = ({ type, text, name, placeholder }) => {
  return (
    <div className="md:flex md:items-center mb-6">
      <div className="md:w-1/3">
        <FormLabel type={type} text={text} />
      </div>
      <div className="md:w-2/3">
        <FormInput type={type} name={name} placeholder={placeholder} />
      </div>
    </div>
  );
};

export default FormSection;
import React from "react";
import FormInput from "../atoms/FormInput";
import FormLabel from "../atoms/FormLabel";

interface FormSectionProps {
  type: string;
  text: string;
  name: string;
  placeholder: string;
  handleInputEvent?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormSection: React.FC<FormSectionProps> = ({ type, text, name, placeholder, handleInputEvent }) => {
  return (
    <div className="pt-4 pb-2">
      <div className="mb-4">
        <FormLabel text={text} labelId={name} />
      </div>
      <div className="md:w-5/6">
        <FormInput type={type} name={name} placeholder={placeholder} handleChange={handleInputEvent}/>
      </div>
    </div>
  );
};

export default FormSection;
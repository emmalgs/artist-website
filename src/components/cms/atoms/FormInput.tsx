import React from "react";

interface FormInputProps {
  type: string;
  name: string;
  placeholder: string;
}

const FormInput: React.FC<FormInputProps> = ({ type, name, placeholder }) => {
  return (
    <input
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      type={type}
      name={name}
      id={name}
      placeholder={placeholder}
    />
  );
};

export default FormInput;

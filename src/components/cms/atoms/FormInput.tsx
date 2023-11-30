import React, { ChangeEvent } from "react";

interface FormInputProps {
  type: string;
  name: string;
  placeholder: string;
  accept?: string;
  handleChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const FormInput: React.FC<FormInputProps> = ({ type, name, placeholder, accept = "", handleChange }) => {
  return (
    <input
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      type={type}
      name={name}
      id={name}
      placeholder={placeholder}
      accept={accept}
      onChange={handleChange} />
  );
};

export default FormInput;

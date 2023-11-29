import React from 'react';

interface FormInputProps {
  type: string;
  name: string;
  placeholder: string;
}

const FormInput: React.FC<FormInputProps> = ({ type, name, placeholder }) => {
  return (
    <input
      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
      type={type}
      name={name}
      id={`inline-${name}`}
      placeholder={placeholder}
    />
  );
}

export default FormInput;
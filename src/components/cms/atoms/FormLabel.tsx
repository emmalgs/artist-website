import React from 'react';

interface FormLabelProps {
  type: string;
  text: string;
}

const FormLabel: React.FC<FormLabelProps> = ({ type, text }) => {
  return (
    <label
      className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
      htmlFor={type}
    >
      {text}
    </label>
  );
};

export default FormLabel;

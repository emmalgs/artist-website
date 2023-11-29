import React from 'react';

interface FormLabelProps {
  type: string;
  text: string;
}

const FormLabel: React.FC<FormLabelProps> = ({ type, text }) => {
  return (
    <label
      className="block text-gray-700 text-sm font-bold mb-2"
      htmlFor={type}
    >
      {text}
    </label>
  );
};

export default FormLabel;

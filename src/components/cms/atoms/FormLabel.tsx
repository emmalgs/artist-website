import React from 'react';

interface FormLabelProps {
  labelId: string;
  text: string;
}

const FormLabel: React.FC<FormLabelProps> = ({ text, labelId }) => {
  return (
    <label
      className="block text-gray-700 text-sm font-bold mb-2"
      htmlFor={labelId}
    >
      {text}
    </label>
  );
};

export default FormLabel;

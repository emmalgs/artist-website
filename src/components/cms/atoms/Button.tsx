import React from 'react';

interface ButtonProps {
  type: "button" | "submit" | "reset" | undefined;
  text: string;
  action?: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, action, type }) => {
  return (
    <button
      type={type}
      className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
      onClick={action}
    >
      {text}
    </button>
  );
};

export default Button;

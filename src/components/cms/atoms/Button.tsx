import React from 'react';
  interface ButtonProps {
    type: "button" | "submit" | "reset" | undefined;
    text: string;
    action?: () => void;
    disabled? : boolean;
  }

  const Button: React.FC<ButtonProps> = ({ text, action, type, disabled }) => {
    return (
      <button
      style={disabled ? {opacity: "50", cursor: "not-allowed"} : {opacity: "100"}}
        type={type}
        className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
        onClick={action}
        disabled={disabled}
      >
        {text}
      </button>
    );
  };

export default Button;

import React from 'react';

interface IconButtonProps {
  type: "delete" | "edit" | "add" | "upload";
  icon: React.ReactNode;
  action: (event?: React.MouseEvent<HTMLButtonElement>) => void;
}

const IconButton: React.FC<IconButtonProps> = ({ type, icon, action }) => {
  let iconStyle = "";

  if (type === "delete") {
    iconStyle = "text-red-700 hover:text-red-600";
  } else if (type === "edit") {
    iconStyle = "text-green-700 hover:text-green-600";
  } else if (type === "add") {
    iconStyle = "text-blue-700 hover:text-blue-600";
  } else if (type === "upload") {
    iconStyle = "text-blue-700 hover:text-blue-600 text-3xl";
  }

  return (
    <button className={`${iconStyle} font-bold px-1 py-1`} onClick={action}>
      {icon}
    </button>
  );
};

export default IconButton;
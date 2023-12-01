import React from "react";
import { FormInputProps } from "../../../types";
import UploadFileInput from "./UploadFileInput";

const FormInput: React.FC<FormInputProps> = ({
  type,
  name,
  placeholder,
  accept = "",
  handleChange,
}) => {
  if (type === "file") {
    return (
      <UploadFileInput
        name={name}
        placeholder={placeholder}
        accept={accept}
        type={type} text={""}      />
    );
  } else {
    return (
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        accept={accept}
        onChange={handleChange}
      />
    );
  }
};

export default FormInput;

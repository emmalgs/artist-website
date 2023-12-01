import React from "react";
import { FormInputProps } from "../../../types";
import { getImageURL } from "../../../services/storage";

const FormInput: React.FC<FormInputProps> = ({
  type,
  name,
  placeholder,
  accept = "",
  handleChange,
}) => {
  const [url, setUrl] = React.useState<string>("");
  let uploadedImg: File | null = null;

  if (type === "file") {
    const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files) {
        uploadedImg = e.target.files[0];
      }
    };
    return (
      <div className="flex items-center justify-between">
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type={type}
          name={name}
          id={name}
          placeholder={placeholder}
          accept={accept}
          onChange={handleFileUpload}
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={(e) => {
            e.preventDefault();
            if (uploadedImg) {
              try {
                getImageURL(uploadedImg).then((url) => {
                  setUrl(url);
                });
              } catch (err) {
                console.log(err);
              }
            }
          }}
        >
          Upload
        </button>
        {url ? <img src={url} alt="uploaded" /> : null}
      </div>
    );
  }

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
};

export default FormInput;

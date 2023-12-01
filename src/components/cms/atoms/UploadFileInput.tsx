import { getImageURL } from "../../../services/storage";
import { useState } from "react";
import { FormInputProps } from "../../../types";
import IconButton from "./IconButton";
import { FaCloudUploadAlt } from "react-icons/fa";

const UploadFileInput: React.FC<FormInputProps> = ({
  name,
  placeholder,
  accept = "",
  type,
}) => {
  const [url, setUrl] = useState<string>("");
  let uploadedImg: File | null = null;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      uploadedImg = e.target.files[0];
    }
  };

  const handleUpload = (e) => {
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
  }

  return (
    <div className="flex items-center flex-col justify-between">
      <div className="flex items-center justify-between w-full">
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type={type}
          name={name}
          id={name}
          placeholder={placeholder}
          accept={accept}
          onChange={handleFileChange}
          data-image-url={url}
        />
        <IconButton
          icon={<FaCloudUploadAlt />}
          type="upload"
          action={handleUpload}
        />
      </div>
      {url ? (
        <img src={url} alt="uploaded" className="object-cover h-48 w-48 m-2" />
      ) : null}
    </div>
  );
};

export default UploadFileInput;

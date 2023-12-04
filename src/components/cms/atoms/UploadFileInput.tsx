import { getImageURL } from "../../../services/storage";
import { FaCloudUploadAlt } from "react-icons/fa";
import { FaImage } from "react-icons/fa";
import { FormInputProps } from "../../../types";
import IconButton from "./IconButton";
import ImageModal from "../molecules/ImageModal";
import { useState } from "react";

const UploadFileInput: React.FC<FormInputProps> = ({
  name,
  placeholder,
  accept = "",
  type,
}) => {
  const [url, setUrl] = useState<string>("");
  const [existingImg, setExistingImg] = useState<boolean>(false);
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
  };

  const handleAddExisitingImageClick = (e) => {
    e.preventDefault();
    setExistingImg(!existingImg);
  };

  const handleImageSelection = (src) => {
    setUrl(src);
  };

  return (
    <div>
      {existingImg ? (
        <ImageModal
          handleImageSelection={handleImageSelection}
          exit={handleAddExisitingImageClick}
        />
      ) : null}
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
            data-image={url}
          />
          <IconButton
            icon={<FaCloudUploadAlt />}
            type="upload"
            action={handleUpload}
          />
          <p>
            Add existing image:{" "}
            <IconButton
              icon={<FaImage />}
              type="upload"
              action={handleAddExisitingImageClick}
            />
          </p>
        </div>
        {url ? (
          <img
            src={url}
            alt="uploaded"
            className="object-cover h-48 w-48 m-2"
          />
        ) : null}
      </div>
    </div>
  );
};

export default UploadFileInput;

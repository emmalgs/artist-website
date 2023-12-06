import { getImageURL } from "../../../services/storage";
import { FaImage } from "react-icons/fa";
import { FormInputProps } from "../../../types";
import IconButton from "../atoms/IconButton";
import ImageModal from "../pages/ImageModal";
import { useState } from "react";
import FileInput from "../atoms/FileInput";
import ImageUploadView from "../atoms/ImageUploadView";

const UploadImages: React.FC<FormInputProps> = ({
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
    handleUpload(e);
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
        <p>Upload new image: </p>
          <FileInput accept={accept} type={type} handleFileChange={handleFileChange} />
          <h5>- OR -</h5>
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
          <ImageUploadView imgSrc={url} deleteUpload={() => setUrl("")} />
        ) : <p className="m-2 p-2">No image selected</p>}
      </div>
  );
};

export default UploadImages;

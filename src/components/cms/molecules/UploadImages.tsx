import { getImageURL } from "../../../services/storage";
import { FormInputProps } from "../../../types";
import ImageModal from "../pages/ImageModal";
import { useState } from "react";
import FileInput from "../atoms/FileInput";
import ImageUploadView from "../atoms/ImageUploadView";
import Button from "../atoms/Button";

const UploadImages: React.FC<FormInputProps> = ({ accept = "", type, value }) => {
  const [url, setUrl] = useState<string>(value);
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
      <div className="flex items-center flex-col justify-between">
        <p>Upload new image: </p>
        <FileInput
          name="image"
          accept={accept}
          type={type}
          handleFileChange={handleFileChange}
          source={url}
        />
        <h5>- OR -</h5>
        <Button text="Select existing image" action={handleAddExisitingImageClick} />
      </div>
      {existingImg ? (
        <ImageModal
          handleImageSelection={handleImageSelection}
          exit={handleAddExisitingImageClick}
        />
      ) : url ? (
        <ImageUploadView imgSrc={url} deleteUpload={() => setUrl("")} />
      ) : (
        <p className="m-2 p-2">No image selected</p>
      )}
    </div>
  );
};

export default UploadImages;

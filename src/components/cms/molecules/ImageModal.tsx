import { getAllImagesInStorage } from "../../../services/storage";
import { useState, useEffect } from "react";
import Button from "../atoms/Button";
import IconButton from "../atoms/IconButton";
import { FaTimes } from "react-icons/fa";

const ImageModal = ({ handleImageSelection, exit }) => {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState("");

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const imageUrls = await getAllImagesInStorage();
        setImages(imageUrls);
      } catch (err) {
        console.log(err);
      }
    };

    fetchImages();
  }, []);

  const handleImageClick = (e) => {
    const image = e.target.src;
    setSelectedImage(image);
  };

  return (
    <div className="fixed flex flex-col inset-6 ml-8 overflow-scroll max-w-screen-md bg-stone-100">
      <div className="p-4 w-full flex justify-end">
        <IconButton icon={<FaTimes />} type="add" action={exit} />
      </div>
      <div className="flex flex-wrap justify-center">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt="uploaded"
            className="object-cover h-48 w-48 m-2"
            onClick={handleImageClick}
            style={
              image === selectedImage
                ? { border: "3px solid blue" }
                : { border: "none" }
            }
          />
        ))}
      </div>
      <div className="fixed m-3">
        <Button
          text="Add Image"
          type="button"
          action={handleImageSelection(selectedImage)}
          disabled={selectedImage === "" ? true : false}
        />
      </div>
    </div>
  );
};

export default ImageModal;

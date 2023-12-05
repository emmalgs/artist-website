import { getAllImagesInStorage } from "../../../services/storage";
import { useState, useEffect } from "react";
import Modal from "../organisms/Modal";

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
    if (image === selectedImage) {
      setSelectedImage("");
      handleImageSelection("");
      return;
    }
    setSelectedImage(image);
    handleImageSelection(image);
  };

  return (
      <Modal title="Select an image" onClose={exit} modalBody={images.map((image, index) => (
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
        ))} />
  );
};

export default ImageModal;

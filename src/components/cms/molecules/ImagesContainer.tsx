import { getAllImagesInStorage } from "../../../services/storage";
import { useState, useEffect } from "react";

const ImagesContainer = () => {
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
    <div className="flex flex-wrap justify-center">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt="uploaded"
          className="object-cover h-48 w-48 m-2"
          onClick={handleImageClick}
          style={ image === selectedImage ? {border: "3px solid blue"} : {border: "none"}}
        />
      ))}
    </div>
  );
}

export default ImagesContainer;

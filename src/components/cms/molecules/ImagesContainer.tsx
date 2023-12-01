import { getAllImagesInStorage } from "../../../services/storage";
import { useState, useEffect } from "react";

const ImagesContainer = () => {
  const [images, setImages] = useState([]);

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


  return (
    <div className="flex flex-wrap justify-center">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt="uploaded"
          className="object-cover h-48 w-48 m-2"
        />
      ))}
    </div>
  );
}

export default ImagesContainer;

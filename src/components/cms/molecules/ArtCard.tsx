import IconButton from "../atoms/IconButton";
import { FaEdit } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";

const ArtCard = ({ artwork }) => {
  return (
    <div className="art-card flex justify-evenly px-2 py-4 m-4 rounded-sm w-4/5 bg-slate-200">
      <div>
        <img
          src={artwork.imgSrc}
          alt={artwork.title}
          className="object-cover h-48 w-48"
        />
      </div>
      <div>
        <h4>Title: <span>{artwork.title}</span></h4>
        <p>Dimensions: {artwork.dimensions}</p>
        <p>Medium: {artwork.medium}</p>
        <p>{artwork.price ? `Price: ${artwork.price}` : ""}</p>
      <div className="flex h-20 gap-3 px-3 py-4">
        <IconButton icon={<FaEdit />} />
        <IconButton icon={<FaTrash />} />
      </div>
      </div>
    </div>
  );
};

export default ArtCard;

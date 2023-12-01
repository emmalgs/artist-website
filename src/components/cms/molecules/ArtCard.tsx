import IconButton from "../atoms/IconButton";
import CardInfo from "../atoms/CardInfo";
import { FaEdit } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";

const ArtCard = ({ artwork }) => {
  return (
    <div className="art-card flex justify-evenly px-2 py-4 m-4 rounded-sm w-full bg-stone-100 border-b-2">
      <div>
        <img
          src={artwork.imgSrc}
          alt="image of art piece"
          className="object-cover h-48 w-48"
        />
      </div>
      <div>
        {Object.keys(artwork).map((key) => {
          return (
            <div key={key}>
              <CardInfo text={artwork[key]} />
            </div>
          );
        })}
        <IconButton icon={<FaEdit />} type="edit" />
        <IconButton icon={<FaTrash />} type="delete" />
      </div>
    </div>
  );
};

export default ArtCard;

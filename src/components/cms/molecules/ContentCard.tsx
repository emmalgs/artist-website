import IconButton from "../atoms/IconButton";
import CardInfo from "../atoms/CardInfo";
import { FaEdit } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import { deleteItemFromCollection } from "../../../services/database";
import { useState } from "react";
import EditItemForm from "../organisms/EditItemForm";
import { ContentCardProps } from "../../../types";

const ContentCard: React.FC<ContentCardProps> = ({ artwork, category }) => {
  const [editMode, setEditMode] = useState(false);
  return (
    <div className="art-card flex justify-evenly px-2 py-4 m-4 rounded-sm w-full bg-stone-100 border-b-2">
      <div>
        <img
          src={artwork.image}
          alt="image of art piece"
          className="object-cover h-48 w-48"
        />
      </div>
      <div>
        {editMode ? (
          <EditItemForm category={category} item={artwork} />
        ) : (
          Object.keys(artwork).map((key) => {
            if (key !== "image" && key !== "id") {
              return (
                <div key={key}>
                  <CardInfo text={artwork[key]} />
                </div>
              );
            }
          })
        )}
        <IconButton
          icon={<FaEdit />}
          type="edit"
          action={() => setEditMode(!editMode)}
        />
        <IconButton
          icon={<FaTrash />}
          type="delete"
          action={() => deleteItemFromCollection(category, artwork.id)}
        />
      </div>
    </div>
  );
};

export default ContentCard;

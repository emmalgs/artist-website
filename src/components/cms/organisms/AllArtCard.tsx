import ArtCard from "../molecules/ArtCard";
import { Artworks } from "../../../types";
import { db } from "../../../services/firebase";
import CategoryHeader from "./CategoryHeader";
import { Painting } from "../../../types";
import { ref, push, set } from "firebase/database";

const AllArtCard: React.FC<Artworks> = ({ artworks }) => {
  const handleAddSubmit = (art: Painting, header: string) => {
    const newDataRef = push(ref(db, `${header}`));
    set(newDataRef, art)
    .then(() => {
      console.log("Data saved successfully!");
    })
    .catch((error) => {
      console.log(error);
    });
  }

  return (
    <div className="flex flex-col bg-stone-100 w-2/3 p-6 m-6 shadow-md rounded-md">
        {Object.keys(artworks).map((category) => {
          return (
            <div key={category}>
              <CategoryHeader category={category} handleSubmit={handleAddSubmit} />
              {Object.keys(artworks[category]).map((artwork) => {
                return (
                  <div key={artwork}>
                    <ArtCard artwork={artworks[category][artwork]} />
                  </div>
                );
              })}
            </div>
          );
        })}
    </div>
  );
};

export default AllArtCard;
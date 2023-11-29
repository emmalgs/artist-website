import ArtCard from "./ArtCard";
import CategoryHeader from "./CategoryHeader";

const AllArtCard = ({ artworks }) => {
  return (
    <div className="flex flex-col bg-slate-500 w-2/3 p-6 m-6 rounded-md">
        {Object.keys(artworks).map((category) => {
          return (
            <div key={category}>
              <CategoryHeader category={category} />
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
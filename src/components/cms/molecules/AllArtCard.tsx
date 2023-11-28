import ArtCard from "./ArtCard";

const AllArtCard = ({ artworks }) => {
  return (
    <div>
      <div>
        {Object.keys(artworks).map((year) => {
          return (
            <div key={year}>
              <h3>{year}</h3>
              {Object.keys(artworks[year]).map((artwork) => {
                return (
                  <div key={artwork}>
                    <ArtCard artwork={artworks[year][artwork]} />
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllArtCard;
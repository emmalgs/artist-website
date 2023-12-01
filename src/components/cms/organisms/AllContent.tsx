import ArtCard from "../molecules/ArtCard";
import ContentHeader from "../molecules/ContentHeader";

const AllContent = ({ content }) => {
  return (
    <div className="flex flex-col bg-stone-100 w-2/3 p-6 m-6 shadow-md rounded-md">
        {Object.keys(content).map((category) => {
          return (
            <div key={category}>
              <ContentHeader contentTitle={category} action="add" />
              {Object.keys(content[category].collection).map((artwork) => {
                return (
                  <div key={artwork}>
                    <ArtCard artwork={content[category].collection[artwork]} />
                  </div>
                );
              })}
            </div>
          );
        })}
    </div>
  );
};

export default AllContent;
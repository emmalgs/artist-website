import ContentCard from "../molecules/ContentCard";
import ContentHeader from "../organisms/ContentHeader";

const AllContent = ({ content }) => {
  const showItems = (category) => {
    if (content[category].collection) {
      return Object.keys(content[category].collection).map((artwork) => {
        return (
          <div key={artwork}>
            <ContentCard
              category={category}
              artwork={content[category].collection[artwork]}
            />
          </div>
        );
      });
    } else {
      return (
        <div className="flex justify-center">
          <p className="text-2xl m-4">Nothing in {category.toLowerCase()}. Add items to {category}</p>
        </div>
      );
    }
  };

  return (
    <div className="flex flex-col bg-stone-100 w-2/3 p-6 m-6 shadow-md rounded-md">
      {Object.keys(content).map((category) => {
        return (
          <div key={category}>
            <ContentHeader contentTitle={category} action="add" />
            {showItems(category)}
          </div>
        );
      })}
    </div>
  );
};

export default AllContent;

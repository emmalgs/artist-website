import IconButton from "../atoms/IconButton";
import { FaPlus } from "react-icons/fa";

interface CategoryHeaderProps {
  category: string;
}

const CategoryHeader: React.FC<CategoryHeaderProps> = ({ category }) => {
  return (
    <div className="flex w-full gap-6 justify-between border-b-2 border-stone-700">
      <h2 className="text-3xl pl-5">{category}</h2>
      <div className="pr-5">
        <IconButton icon={<FaPlus />} type="add" />
      </div>
    </div>
  );
};

export default CategoryHeader;

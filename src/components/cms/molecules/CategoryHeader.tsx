import IconButton from "../atoms/IconButton";
import { FaPlus } from "react-icons/fa";

interface CategoryHeaderProps {
  category: string;
}

const CategoryHeader: React.FC<CategoryHeaderProps> = ({ category }) => {
  return (
    <div className="flex w-full gap-6 justify-start">
      <h2 className="text-3xl">{category}</h2>
      <IconButton icon={<FaPlus />} />
    </div>
  )
}

export default CategoryHeader;
import IconButton from "../atoms/IconButton";
import { FaPlus } from "react-icons/fa";

const CategoryHeader = ({ category }) => {
  return (
    <div className="flex w-full gap-6 justify-start">
      <h2 className="text-3xl">{category}</h2>
      <IconButton icon={<FaPlus />} />
    </div>
  )
}

export default CategoryHeader;
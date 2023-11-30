import IconButton from "../atoms/IconButton";
import Form from "../organisms/Form";
import { useState } from "react";
import { FaPlus } from "react-icons/fa";

interface CategoryHeaderProps {
  category: string;
}

const CategoryHeader: React.FC<CategoryHeaderProps> = ({ category }) => {
  const [formVisible, setFormVisible] = useState(false);
  const [form, setForm] = useState<React.ReactNode>(null);

  const inputs = [
    {
      type: "text",
      text: "Title",
      name: "title",
      placeholder: "Title"
    },
    {
      type: "text",
      text: "Dimensions",
      name: "dimensions",
      placeholder: "Dimensions"
    },
    {
      type: "text",
      text: "Medium",
      name: "medium",
      placeholder: "Medium"
    },
    {
      type: "text",
      text: "Price",
      name: "price",
      placeholder: "Price"
    }
  ]

  const handleAddSubmit = () => {
    console.log("submitted")
  }

  const handleAddClick = () => {
    setFormVisible(!formVisible);
    setForm(<Form buttonText="Add new work" sections={inputs} handleSubmit={handleAddSubmit}/>)
  }

  return (
    <div className="flex w-full gap-6 justify-between border-b-2 border-stone-700">
      <h2 className="text-3xl pl-5">{category}</h2>
      <div className="pr-5">
        <IconButton icon={<FaPlus />} type="add" action={handleAddClick} />
      </div>
      {form ? form : null}
    </div>
  );
};

export default CategoryHeader;

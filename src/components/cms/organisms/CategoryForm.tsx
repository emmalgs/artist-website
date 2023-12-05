import Form from "../molecules/Form";
import {
  addItemToCollection,
  getCategoryInputs,
} from "../../../services/database";

interface CategoryFormProps {
  category: string;
  handleAddClick: () => void;
}

const CategoryForm: React.FC<CategoryFormProps> = ({ category, handleAddClick }) => {
  const inputs = getCategoryInputs(category);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {};
    inputs.map((input) => {
      if (input.name === "image") {
        newItem[input.name] = e.target[input.name].dataset.image;
      } else {
        newItem[input.name] = e.target[input.name].value;
      }
    });
    addItemToCollection(category, newItem);
    handleAddClick();
  };

  return (
    <div>
      <Form sections={inputs} handleSubmit={handleSubmit} buttonText="Add" />
    </div>
  );
};

export default CategoryForm;

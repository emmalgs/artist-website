import Form from "../molecules/Form";
// import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { addItemToCollection, getCategoryInputs } from "../../../services/database";

interface CategoryFormProps {
  category: string;
}

const CategoryForm: React.FC<CategoryFormProps> = ({ category }) => {
  const inputs = getCategoryInputs(category);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {}
    inputs.map((input) => {
      newItem[input.name] = e.target[input.name].value;
    });
    addItemToCollection(category, newItem);
  };

  return (
    <div>
      <Form
        sections={inputs}
        handleSubmit={handleSubmit}
        buttonText="Add"
      />
    </div>
  );
};

export default CategoryForm;

import Form from "../molecules/Form";
import { addNewCategory } from "../../../services/database";

const NewCategoryForm = ({ handleAddClick }) => {
  const inputs = [
    {
        name: "name",
        type: "text",
        text: "Category Name",
        placeholder: "Enter Category Name",
      },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.name.value)
    addNewCategory(e.target.name.value);
    handleAddClick();
  };

  return (
    <div className="art-card flex justify-evenly px-2 py-4 m-4 rounded-sm w-full bg-stone-100 border-b-2">
      <Form sections={inputs} handleSubmit={handleSubmit} buttonText="Add" />
    </div>
  );
};

export default NewCategoryForm;

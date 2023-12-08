import { updateItemInCollection, getCategoryInputs } from "../../../services/database";
import Form from "../molecules/Form";

const EditItemForm = ({ category, item }) => {
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
    updateItemInCollection(category, newItem);
  };

  return (
    <div>
      <Form
        sections={inputs}
        handleSubmit={handleSubmit}
        buttonText="Add"
        values={item}
      />
    </div>
  );
};

export default EditItemForm;

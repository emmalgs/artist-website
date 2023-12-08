import { updateItemInCollection, getCategoryInputs } from "../../../services/database";
import Form from "../molecules/Form";

const EditItemForm = ({ category, item, handleUpdateSubmit }) => {
  const inputs = getCategoryInputs(category);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = { id: item.id };
    inputs.map((input) => {
      if (input.name === "image") {
        newItem[input.name] = e.target[input.name].dataset.image;
      } else {
        newItem[input.name] = e.target[input.name].value;
      }
    });
    handleUpdateSubmit();
    updateItemInCollection(category, newItem);
  };

  return (
    <div className="art-card flex justify-evenly px-2 py-4 m-4 rounded-sm w-full bg-stone-100 border-b-2">
      <Form
        sections={inputs}
        handleSubmit={handleSubmit}
        buttonText="Update"
        values={item}
        popup={false}
      />
    </div>
  );
};

export default EditItemForm;

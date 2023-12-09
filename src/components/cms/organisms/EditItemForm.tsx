import { updateItemInCollection, getCategoryInputs } from "../../../services/database";
import { EditItemFormProps } from "../../../types";
import Form from "../molecules/Form";

const EditItemForm: React.FC<EditItemFormProps> = ({ category, item, handleUpdateSubmit }) => {
  const inputs = getCategoryInputs(category);

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newItem: Record<string, string> = { id: item.id };
    inputs.map((input) => {
      const target = e.target as typeof e.target & Record<string, any>;
      if (input.name === "image") {
        newItem[input.name] = target[input.name].dataset.image;
      } else {
        newItem[input.name] = target[input.name].value;
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

import { FaPlus } from "react-icons/fa";
import Form from "../organisms/Form";
import IconButton from "../atoms/IconButton";
import Logout from "./Logout";
import { useState } from "react";

const ContentHeader = ({ action, contentTitle }) => {
  const [form, setForm] = useState<React.ReactNode>(null);
  const [formVisible, setFormVisible] = useState(false);

  const handleAddClick = () => {
    setFormVisible(!formVisible);
    formVisible
      ? setForm(null)
      : setForm(
          <Form
            buttonText="Add new work"
            sections={inputs}
            handleSubmit={handleAddSubmit}
          />
        );
  };

  let headerButton;
  if (action === "add") {
    headerButton = <IconButton icon={<FaPlus />} type="add" action={handleAddClick} />;
  } else if (action === "logout") {
    headerButton = <Logout />;
  }
  return (
    <div className="flex justify-between items-center">
      <h2 className="text-3xl pl-5">{contentTitle}</h2>
      <div className="pr-5">
        {headerButton}
      </div>
      <div className="fixed right-10 top-20">{form ? form : null}</div>
    </div>
  );
};

export default ContentHeader;

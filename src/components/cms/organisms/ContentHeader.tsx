import { FaPlus } from "react-icons/fa";
import IconButton from "../atoms/IconButton";
import Logout from "../molecules/Logout";
import { useState } from "react";
import CategoryForm from "./CategoryForm";
import Modal from "./Modal";
import NewCategoryForm from "./NewCategoryForm";

interface ContentHeaderProps {
  action: "add" | "logout";
  contentTitle: string;
}

const ContentHeader: React.FC<ContentHeaderProps> = ({
  action,
  contentTitle,
}) => {
  const [formVisible, setFormVisible] = useState(false);

  const handleAddClick = () => {
    setFormVisible(!formVisible);
  };

  let headerButton;
  if (action === "add") {
    headerButton = (
      <IconButton icon={<FaPlus />} type="add" action={handleAddClick} />
    );
  } else if (action === "logout") {
    headerButton = <Logout />;
  }
  let modalBody;
  if (contentTitle === "All Website Content") {
    modalBody = <NewCategoryForm handleAddClick={handleAddClick} />;
  } else {
    modalBody = <CategoryForm category={contentTitle} handleAddClick={handleAddClick} />;
  }

  return (
    <div className="flex justify-between items-center">
      <h2 className="text-3xl pl-5">{contentTitle}</h2>
      <div className="pr-5">{headerButton}</div>
      {formVisible ? (
        <Modal title="" onClose={handleAddClick} modalBody={modalBody} />
      ) : null}
    </div>
  );
};

export default ContentHeader;

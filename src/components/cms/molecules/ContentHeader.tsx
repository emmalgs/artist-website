import { FaPlus } from "react-icons/fa";
import IconButton from "../atoms/IconButton";
import Logout from "./Logout";
import { useState } from "react";
import CategoryForm from "../organisms/CategoryHeader";

interface ContentHeaderProps {
  action: "add" | "logout";
  contentTitle: string;
}

const ContentHeader: React.FC<ContentHeaderProps> = ({ action, contentTitle }) => {
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
  return (
    <div className="flex justify-between items-center">
      <h2 className="text-3xl pl-5">{contentTitle}</h2>
      <div className="pr-5">{headerButton}</div>
      <div className="fixed right-10 top-20">
        {formVisible ? <CategoryForm category={contentTitle} /> : null}
      </div>
    </div>
  );
};

export default ContentHeader;

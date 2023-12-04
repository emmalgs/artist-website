import { FaTimes } from "react-icons/fa";
import IconButton from "../atoms/IconButton";

const ModalHeader = ({ title, onClose }) => {
  return (
    <div className="flex justify-between w-full">
      <h5 className="modal-title">{title}</h5>
      <IconButton icon={<FaTimes />} type="close" action={onClose} />
    </div>
  )
}

export default ModalHeader;

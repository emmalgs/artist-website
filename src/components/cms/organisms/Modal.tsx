import ModalHeader from "../molecules/ModalHeader";
import IconButton from "../atoms/IconButton";
import { FaPlus } from "react-icons/fa";

const Modal = ({ title, onClose, modalBody }) => {
  return (
    <div className="fixed flex flex-col inset-6 ml-8 overflow-scroll max-w-screen-md bg-stone-100">
      <div className="p-2 w-full flex justify-between">
        <ModalHeader title={title} onClose={onClose} />
      </div>
      <div className="flex flex-wrap justify-center">{modalBody}</div>
      <div className="fixed m-12 border-2 rounded-full border-blue-400 hover:border-green-500">
        <IconButton
          icon={<FaPlus />}
          type="add"
          action={onClose}
        />
      </div>
    </div>
  );
};

export default Modal;

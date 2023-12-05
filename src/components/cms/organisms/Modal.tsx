import ModalHeader from "../molecules/ModalHeader";

const Modal = ({ title, onClose, modalBody }) => {
  return (
    <div className="fixed flex flex-col inset-6 ml-8 overflow-scroll max-w-screen-md bg-stone-100 bg-opacity-50">
      <div className="p-2 w-full flex justify-between">
        <ModalHeader title={title} onClose={onClose} />
      </div>
      <div className="flex flex-wrap justify-center">{modalBody}</div>
    </div>
  );
};

export default Modal;

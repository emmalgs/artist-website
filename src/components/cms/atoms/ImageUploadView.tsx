import IconButton from "./IconButton";
import { FaTimesCircle } from "react-icons/fa";

const ImageUploadView = ({ imgSrc, deleteUpload }) => {
  return (
    <div className="flex flex-col w-48 m-3">
      <div className="absolute pl-44 -mt-4 z-10">
        <IconButton icon={<FaTimesCircle />} type="close" action={deleteUpload} />
      </div>
      <img src={imgSrc} alt="uploaded image" className="object-cover h-48 w-48 border-2 p-2 rounded-sm border-stone-200" />
    </div>
  );
};

export default ImageUploadView;

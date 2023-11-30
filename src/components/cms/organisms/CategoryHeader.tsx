import IconButton from "../atoms/IconButton";
import Form from "./Form";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { Painting } from "../../../types";

interface CategoryHeaderProps {
  category: string;
  handleSubmit: (art: Painting, header: string) => void;
}

const CategoryHeader: React.FC<CategoryHeaderProps> = ({
  category,
  handleSubmit,
}) => {
  const [formVisible, setFormVisible] = useState(false);
  const [form, setForm] = useState<React.ReactNode>(null);
  const [artwork, setArtwork] = useState<Painting | (() => Painting)>({});

  let uploadedImg: File;
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      uploadedImg = e.target.files[0];
    }
  };

  const handleAddSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { title, dimensions, medium, price } = e.target as typeof e.target & {
      title: { value: string };
      dimensions: { value: string };
      medium: { value: string };
      price: { value: string };
    };
    console.log(title.value, dimensions.value, medium.value, price.value);
    setFormVisible(!formVisible);
    const storage = getStorage();
    const storageRef = ref(storage, `${uploadedImg.name}`);
    uploadBytes(storageRef, uploadedImg).then((snapshot) => {
      console.log("Uploaded a blob or file!");
      getDownloadURL(snapshot.ref).then((url) => {
        setArtwork({
          title: title.value,
          dimensions: dimensions.value,
          medium: medium.value,
          price: price.value,
          imgSrc: url,
        });
      });
    });
    handleSubmit(artwork as Painting, category);
  };

  const inputs = [
    {
      type: "text",
      text: "Title",
      name: "title",
      placeholder: "Title",
    },
    {
      type: "text",
      text: "Dimensions",
      name: "dimensions",
      placeholder: "Dimensions",
    },
    {
      type: "text",
      text: "Medium",
      name: "medium",
      placeholder: "Medium",
    },
    {
      type: "text",
      text: "Price",
      name: "price",
      placeholder: "Price",
    },
    {
      type: "file",
      text: "Image",
      name: "image",
      placeholder: "",
      accept: "image/*",
      handleChange: handleImageChange,
    },
  ];

  const handleAddClick = () => {
    setFormVisible(!formVisible);
    formVisible ? setForm(null) : 
    setForm(
      <Form
        buttonText="Add new work"
        sections={inputs}
        handleSubmit={handleAddSubmit}
      />
    );
  };

  return (
    <div>
      <div className="flex w-full gap-6 justify-between border-b-2 border-stone-700">
        <h2 className="text-3xl pl-5">{category}</h2>
        <div className="pr-5">
          <IconButton icon={<FaPlus />} type="add" action={handleAddClick} />
        </div>
      </div>
      <div className="fixed right-10 top-20">
      {form ? form : null}
      </div>
    </div>
  );
};

export default CategoryHeader;

import Form from "../molecules/Form";
// import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
// import { useState } from "react";
import { FormInputProps } from "../../../types";
import { db } from "../../../services/firebase";
import { ref, onValue } from "firebase/database";
import { useState, useEffect } from "react";

const CategoryForm = ({ category }) => {
  const [inputs, setInputs] = useState<FormInputProps[]>([]);
  const dbInputsLocation = `${category}/inputs`;

  useEffect(() => {
    const inputData = ref(db, dbInputsLocation);
    const unSubscribe = onValue(inputData, (snapshot) => {
      const d = snapshot.val();
      const keys = Object.keys(d);
      const inputList: FormInputProps[] = [];
      keys.forEach(
        (key, index) => {
          const input: FormInputProps = {
            ...d[key],
            id: keys[index],
          };
          inputList.push(input);
        });
        setInputs(inputList);
      },
        (error) => {
          console.log(error.message);
        }
      );
    return () => unSubscribe();
  });

  // let uploadedImg: File;
  // const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   if (e.target.files && e.target.files[0]) {
  //     uploadedImg = e.target.files[0];
  //   }
  // };

  // const handleAddSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   const { title, dimensions, medium, price } = e.target as typeof e.target & {
  //     title: { value: string };
  //     dimensions: { value: string };
  //     medium: { value: string };
  //     price: { value: string };
  //   };
  //   console.log(title.value, dimensions.value, medium.value, price.value);
  //   setFormVisible(!formVisible);
  //   const storage = getStorage();
  //   const storageRef = ref(storage, `${uploadedImg.name}`);
  //   uploadBytes(storageRef, uploadedImg).then((snapshot) => {
  //     console.log("Uploaded a blob or file!");
  //     getDownloadURL(snapshot.ref).then((url) => {
  //       setArtwork({
  //         title: title.value,
  //         dimensions: dimensions.value,
  //         medium: medium.value,
  //         price: price.value,
  //         imgSrc: url,
  //       });
  //     });
  //   });
  //   handleSubmit(artwork as Painting, category);
  // };
  const handleSubmit = () => {
    console.log("submit");
  };

  // const inputs = [
  //   {
  //     type: "text",
  //     text: "Title",
  //     name: "title",
  //     placeholder: "Title",
  //   },
  //   {
  //     type: "text",
  //     text: "Dimensions",
  //     name: "dimensions",
  //     placeholder: "Dimensions",
  //   },
  //   {
  //     type: "text",
  //     text: "Medium",
  //     name: "medium",
  //     placeholder: "Medium",
  //   },
  //   {
  //     type: "text",
  //     text: "Price",
  //     name: "price",
  //     placeholder: "Price",
  //   },
  //   {
  //     type: "file",
  //     text: "Image",
  //     name: "image",
  //     placeholder: "",
  //     accept: "image/*",
  //     handleChange: handleImageChange,
  //   },
  // ];

  // const handleAddClick = () => {
  //   setFormVisible(!formVisible);
  //   formVisible ? setForm(null) :
  //   setForm(
  //     <Form
  //       buttonText="Add new work"
  //       sections={inputs}
  //       handleSubmit={handleAddSubmit}
  //     />
  //   );
  // };

  return (
    <div>
      <Form
        sections={inputs}
        handleSubmit={handleSubmit}
        buttonText="Add new work"
      />
    </div>
  );
};

export default CategoryForm;

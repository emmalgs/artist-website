import { db } from "../../../services/firebase";
import Form from "../molecules/Form";
// import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { FormInputProps } from "../../../types";
import { ref, onValue } from "firebase/database";

interface CategoryFormProps {
  category: string;
}

const CategoryForm: React.FC<CategoryFormProps> = ({ category }) => {
  const dbInputsLocation = `${category}/inputs`;
  let uploadedImg: File;

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      uploadedImg = e.target.files[0];
    }
    console.log(uploadedImg)
  };

  const getInputData = () => {
    const inputList: FormInputProps[] = [];
    const inputData = ref(db, dbInputsLocation);
    onValue(inputData, (snapshot) => {
      const d = snapshot.val();
      const keys = Object.keys(d);
      keys.forEach(
        (key, index) => {
          let input: FormInputProps;
          if (d[key].type === "file") {
            input = {
              ...d[key],
              id: keys[index],
              handleChange: handleImageChange,
            }
          } else {
          input = {
            ...d[key],
            id: keys[index],
          };
        }
          inputList.push(input);
        });
      },
        (error) => {
          console.log(error.message);
        }
      );
    return inputList;
  };

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

  return (
    <div>
      <Form
        sections={getInputData()}
        handleSubmit={handleSubmit}
        buttonText="Add"
      />
    </div>
  );
};

export default CategoryForm;

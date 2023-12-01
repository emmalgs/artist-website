import { db } from "./firebase";
import { ref, onValue, push, set } from "firebase/database";
import { FormInputProps } from "../types";

const getImageFile = (e: React.ChangeEvent<HTMLInputElement>) => {
  if (e.target.files && e.target.files[0]) {
    return e.target.files[0];
  }
};

export const getCategoryInputs = (category: string) => {
  const inputList: FormInputProps[] = [];
  const inputData = ref(db, `${category}/inputs`);
  onValue(
    inputData,
    (snapshot) => {
      const d = snapshot.val();
      const keys = Object.keys(d);
      keys.forEach((key, index) => {
        let input: FormInputProps;
        if (d[key].type === "file") {
          input = {
            ...d[key],
            id: keys[index],
            handleChange: getImageFile,
          };
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

export const addItemToCollection = (category: string, item) => {
  const newCollectionRef = push(ref(db, `${category}/collection`));
  set(newCollectionRef, item)
    .then(() => {
      console.log("Data saved successfully!");
    })
    .catch((error) => {
      console.error(error);
    });
}

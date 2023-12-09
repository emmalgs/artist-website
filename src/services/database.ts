import { db } from "./firebase";
import { ref, onValue, push, set } from "firebase/database";
import { FormInputProps } from "../types";

export const getCategoryInputs = (category: string) => {
  const inputList: FormInputProps[] = [];
  const inputData = ref(db, `${category}/inputs`);
  onValue(
    inputData,
    (snapshot) => {
      const d = snapshot.val();
      const keys = Object.keys(d);
      keys.forEach((key, index) => {
        const input = {
          ...d[key],
          id: keys[index],
        };
        inputList.push(input);
      });
    },
    (error) => {
      console.log(error.message);
    }
  );
  return inputList;
};

export const deleteItemFromCollection = (category: string, id: string) => {
  const itemRef = ref(db, `${category}/collection/${id}`);
  set(itemRef, null)
    .then(() => {
      console.log("Data removed successfully!");
    })
    .catch((error) => {
      console.error(error);
    });
};

export const addItemToCollection = (category: string, item) => {
  const newCollectionRef = push(ref(db, `${category}/collection`));
  item.id = newCollectionRef.key;
  set(newCollectionRef, item)
    .then(() => {
      console.log("Data added successfully!");
    })
    .catch((error) => {
      console.error(error);
    });
};

export const updateItemInCollection = (category: string, item) => {
  const itemRef = ref(db, `${category}/collection/${item.id}`);
  set(itemRef, item)
    .then(() => {
      console.log("Data updated successfully!");
    })
    .catch((error) => {
      console.error(error);
    });
};

export const addNewCategory = (category: string) => {
  const newCategoryRef = push(ref(db, category));
  set(newCategoryRef, { inputs: [] })
    .then(() => {
      console.log("Data added successfully!");
    })
    .catch((error) => {
      console.error(error);
    });
};

import { getStorage, ref, uploadBytes, getDownloadURL, listAll } from "firebase/storage";

export const getImageURL = async (file: File) => {
  const storage = getStorage();
  const storageRef = ref(storage, `${file.name}`);
  await uploadBytes(storageRef, file);
  const url = await getDownloadURL(storageRef);
  return url;
};

export const getAllImagesInStorage = async () => {
  try {
    const imagePaths = await getImageRefs();
    const downloadURLPromises = imagePaths.map(async (imageRef) => {
      try {
        const url = await getDownloadURL(imageRef);
        return url;
      } catch (error) {
        console.log(error.message);
        return null;
      }
    });
    const downloadURLs = await Promise.all(downloadURLPromises);
    return downloadURLs;
  } catch (err) {
    console.log(err.message);
    return [];
  }
};

const getImageRefs = async () => {
  const storage = getStorage();
  const listRef = ref(storage);
  const res = await listAll(listRef);
  return res.items;
}
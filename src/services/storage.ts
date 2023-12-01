import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

export const getImageURL = async (file: File) => {
  const storage = getStorage();
  const storageRef = ref(storage, `${file.name}`);
  await uploadBytes(storageRef, file);
  const url = await getDownloadURL(storageRef);
  return url;
}
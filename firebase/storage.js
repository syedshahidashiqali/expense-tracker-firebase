import { format } from "date-fns";
import {
  deleteObject,
  getDownloadURL as getStorageDownloadURL,
  ref,
  uploadBytes,
} from "firebase/storage";
import { storage } from "./firebase";

const BUCKET_URL = "gs://expense-tracker-87643.appspot.com";

export const uploadImage = async (image, uid) => {
  const formattedDate = format(new Date(), "yyyy-MM-dd'T'HH:mm:ss'Z'");
  const bucket = `${BUCKET_URL}/${uid}/${formattedDate}.jpg`;
  const storageRef = ref(storage, bucket);

  await uploadBytes(storageRef, image);

  return bucket;
};

export const getDownloadURL = async (bucket) => {
  return await getStorageDownloadURL(ref(storage, bucket));
};

export const replaceImage = async (image, bucket) => {
  await uploadBytes(ref(storage, bucket), image);
};

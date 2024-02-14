import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  onSnapshot,
  orderBy,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import { db } from "./firebase";
import { getDownloadURL } from "./storage";

const RECEIPTS_COLLECTION = "receipts";

export const addReceipt = async (
  uid,
  date,
  locationName,
  address,
  items,
  amount,
  imageBucket
) => {
  addDoc(collection(db, RECEIPTS_COLLECTION), {
    uid,
    date,
    locationName,
    address,
    items,
    amount,
    imageBucket,
  });
};

export const getReceipts = async (uid) => {
  const receipts = query(
    collection(db, RECEIPTS_COLLECTION),
    where("uid", "==", uid),
    orderBy("date", "desc")
  );

  const querySnapshot = await getDocs(receipts);

  let allReceipts = [];

  for (const documentSnapshot of querySnapshot.docs) {
    const receipt = documentSnapshot.data();
    await allReceipts.push({
      ...receipt,
      date: receipt["date"].toDate(),
      id: documentSnapshot.id,
      imageUrl: await getDownloadURL(receipt["imageBucket"]),
    });
  }

  return allReceipts;
};

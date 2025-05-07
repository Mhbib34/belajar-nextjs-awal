import app from "./firebase";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
} from "firebase/firestore";

export const db = getFirestore(app);

export async function retrieveData(params) {
  const snapshot = await getDocs(collection(db, params));
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
}

export async function retrieveDataById(params, id) {
  const snapshot = await getDoc(doc(db, params, id));
  const data = snapshot.data();
  return data;
}

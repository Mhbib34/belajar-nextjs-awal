import app from "./firebase";
import { collection, getDocs, getFirestore } from "firebase/firestore";

export const db = getFirestore(app);

export async function retrieveData(params) {
  const snapshot = await getDocs(collection(db, params));
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
}

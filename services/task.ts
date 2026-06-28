import {
  collection,
  getDocs,
  orderBy,
  query,
  where,
} from "firebase/firestore";

import { db } from "@/lib/firebase";
import { Task } from "@/types/task";

export async function getTasks() {
  const q = query(
    collection(db, "tasks"),
    where("active", "==", true),
    orderBy("createdAt", "desc")
  );

  const snapshot = await getDocs(q);

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as Task),
  }));
}
import {
  addDoc,
  collection,
  getDocs,
  orderBy,
  query,
  serverTimestamp,
  where,
} from "firebase/firestore";

import { db } from "@/lib/firebase";
import { Transaction } from "@/types/transaction";

export async function addTransaction(
  uid: string,
  type: "earn" | "withdraw" | "referral",
  amount: number
) {
  await addDoc(collection(db, "transactions"), {
    uid,
    type,
    amount,
    createdAt: serverTimestamp(),
  });
}

export async function getTransactions(uid: string) {
  const q = query(
    collection(db, "transactions"),
    where("uid", "==", uid),
    orderBy("createdAt", "desc")
  );

  const snapshot = await getDocs(q);

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as Transaction),
  }));
}
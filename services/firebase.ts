import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  serverTimestamp,
  setDoc,
  where,
} from "firebase/firestore";

import { db } from "@/lib/firebase";
import { UserProfile } from "@/types/user";

export async function createUserProfile(
  uid: string,
  email: string,
  fullName: string
) {
  const userRef = doc(db, "users", uid);

  const existingUser = await getDoc(userRef);

  // User already exists → do nothing
  if (existingUser.exists()) {
    return;
  }

  await setDoc(userRef, {
    uid,
    name: fullName,
    email,

    role: "user",

    balance: 0,
    totalEarned: 0,
    totalWithdraw: 0,

    referralCode: uid.slice(0, 8).toUpperCase(),
    referredBy: null,

    isBlocked: false,

    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  });
}

export async function getUserProfile(
  uid: string
): Promise<UserProfile | null> {
  const docRef = doc(db, "users", uid);

  const docSnap = await getDoc(docRef);

  if (!docSnap.exists()) {
    return null;
  }

  return docSnap.data() as UserProfile;
}
export async function getReferralCount(referralCode: string) {
  const q = query(
    collection(db, "users"),
    where("referredBy", "==", referralCode)
  );

  const snapshot = await getDocs(q);

  return snapshot.size;
}
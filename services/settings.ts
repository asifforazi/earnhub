import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";

export async function getReferralBonus() {
  const ref = doc(db, "settings", "referral");

  const snap = await getDoc(ref);

  if (!snap.exists()) {
    return 2;
  }

  return snap.data().bonusPercent || 2;
}

export async function updateReferralBonus(
  bonus: number
) {
  const ref = doc(db, "settings", "referral");

  await setDoc(
    ref,
    {
      bonusPercent: bonus,
    },
    {
      merge: true,
    }
  );
}
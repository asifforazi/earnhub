export type UserProfile = {
  uid: string;

  name: string;
  email: string;

  role: "user" | "admin";

  balance: number;

  totalEarned: number;
  totalWithdraw: number;

  // Referral
  referralCode: string;
  referredBy: string | null;

  referralIncome: number;

  referrals?: number;

  isBlocked: boolean;

  createdAt: any;
  updatedAt: any;
};
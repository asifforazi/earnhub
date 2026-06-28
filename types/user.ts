export type UserProfile = {
  uid: string;

  name: string;
  email: string;

  role: "user" | "admin";

  balance: number;
  totalEarned: number;
  totalWithdraw: number;

  referralCode: string;
  referredBy: string | null;

  referrals?: number;

  isBlocked: boolean;

  createdAt: any;
  updatedAt: any;
};
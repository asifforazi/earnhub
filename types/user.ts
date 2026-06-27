export type UserProfile = {
  uid: string;
  name: string;
  email: string;

  role: string;

  balance: number;
  totalEarned: number;
  totalWithdraw: number;

  referralCode: string;
  referredBy: string | null;

  isBlocked: boolean;
};
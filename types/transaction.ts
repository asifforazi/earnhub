export type Transaction = {
  id?: string;

  uid: string;

  type: "earn" | "withdraw" | "referral";

  amount: number;

  createdAt: any;
};
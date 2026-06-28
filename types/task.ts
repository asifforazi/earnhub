export type Task = {
  id?: string;

  title: string;
  description: string;

  reward: number;

  category: string;

  link: string;

  active: boolean;

  createdAt: any;
};
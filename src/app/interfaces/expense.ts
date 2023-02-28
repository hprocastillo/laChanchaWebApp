import {Timestamp} from "firebase/firestore";

export interface Expense {
  id?: string;
  description: string;
  amount: number;
  receiptUrl: string;

  bagId?: string;

  userId: string;
  userDisplayName: string | null;
  userEmail: string | null;
  userPhotoUrl: string | null;

  createdAt: Timestamp;
  updatedAt: Timestamp;
}

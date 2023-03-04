import {Timestamp} from "firebase/firestore";

export interface Expense {
  id: string;
  bagId: string;
  description: string;
  amount: number;
  receiptUrl: string;

  userId: string;
  userDisplayName: string;
  userEmail: string;
  userPhotoUrl: string;

  createdAt: Timestamp;
  updatedAt: Timestamp;
}

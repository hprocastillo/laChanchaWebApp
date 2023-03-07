import {Timestamp} from "firebase/firestore";

export interface Expense {
  id?: string;
  description: string;
  amount: number;
  receiptURL: string;

  bagId?: string;
  bagDescription: string;

  uid: string;
  uDisplayName: string | null;
  uEmail: string | null;
  uPhotoURL: string | null;

  createdAt: Timestamp;
  updatedAt: Timestamp;
}

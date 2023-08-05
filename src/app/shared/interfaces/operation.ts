import {Timestamp} from "firebase/firestore";

export interface Operation {
  id?: string;
  type: string;// INCOME - EXPENSE
  fixed: boolean;// MONTHLY EXPENSE FIXED
  description: string;
  amount: number;
  receiptURL: string;

  standalone: boolean;
  bagId?: string;

  shared: boolean;
  hostId?: string;
  guestId?: string

  createdAt: Timestamp;
  createdBy: string;
  updatedAt: Timestamp;
  updatedBy: string;
}

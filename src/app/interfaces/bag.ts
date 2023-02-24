import {Timestamp} from "firebase/firestore";

export interface Bag {
  id?: string;
  description: string;
  collectedAmount: number;
  targetAmount: number;

  userId: string;
  userDisplayName: string | null;
  userEmail: string | null;
  userPhotoUrl: string | null;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}

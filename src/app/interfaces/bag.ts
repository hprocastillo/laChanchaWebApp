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

  share: boolean;
  guests: [{
    guestId: string;
    guestDisplayName: string;
    guestEmail: string;
    guestPhotoUrl: string;
  }]

  createdAt: Timestamp;
  updatedAt: Timestamp;
}

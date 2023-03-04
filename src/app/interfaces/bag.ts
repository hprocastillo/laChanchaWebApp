import {Timestamp} from "firebase/firestore";

export interface Bag {
  id: string;
  description: string;
  collectedAmount: number;
  targetAmount: number;

  userId: string;
  userDisplayName: string;
  userEmail: string;
  userPhotoUrl: string;

  share: boolean;
  shareCode: string;
  guests: [{
    guestId: string;
    guestDisplayName: string;
    guestEmail: string;
    guestPhotoUrl: string;
  }];
  createdAt: Timestamp;
  updatedAt: Timestamp;
}

export interface ShareBagRequest {
  id: string;
  active: boolean;// "T" = waiting answer // "F" = answered
  response: boolean;// "T" = positive // "F" = negative

  userId: string;
  userDisplayName: string;
  userEmail: string;
  userPhotoUrl: string;

  guestId: string;
  guestDisplayName: string;
  guestEmail: string;
  guestPhotoUrl: string;

  createdAt: Timestamp;
  updatedAt: Timestamp;
}

import {Timestamp} from "firebase/firestore";

export interface Friend {
  id: string;

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

export interface FriendRequest {
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

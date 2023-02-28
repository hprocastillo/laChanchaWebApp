import {Timestamp} from "firebase/firestore";

export interface Friend {
  id?: string;

  userId: string;
  userDisplayName: string | null;
  userEmail: string | null;
  userPhotoUrl: string | null;

  guestId: string;
  guestDisplayName: string | null;
  guestEmail: string | null;
  guestPhotoUrl: string | null;

  createdAt: Timestamp;
  updatedAt: Timestamp;
}

export interface FriendRequest {
  id?: string;
  active: boolean;// "T" = waiting answer // "F" = answered
  response: boolean;// "T" = positive // "F" = negative

  userId: string;
  userDisplayName: string | null;
  userEmail: string | null;
  userPhotoUrl: string | null;

  guestId: string;
  guestDisplayName: string | null;
  guestEmail: string | null;
  guestPhotoUrl: string | null;

  createdAt: Timestamp;
  updatedAt: Timestamp;
}

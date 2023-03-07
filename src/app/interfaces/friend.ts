import {Timestamp} from "firebase/firestore";

export interface Friend {
  id?: string;

  guid: string;
  gDisplayName: string | null;
  gEmail: string | null;
  gPhotoURL: string | null;

  uid: string;
  uDisplayName: string | null;
  uEmail: string | null;
  uPhotoURL: string | null;

  createdAt: Timestamp;
  updatedAt: Timestamp;
}

export interface FriendRequest {
  id?: string;
  active: boolean;
  response: boolean;

  guid: string;
  gDisplayName: string | null;
  gEmail: string | null;
  gPhotoURL: string | null;

  uid: string;
  uDisplayName: string | null;
  uEmail: string | null;
  uPhotoURL: string | null;

  createdAt: Timestamp;
  updatedAt: Timestamp;
}

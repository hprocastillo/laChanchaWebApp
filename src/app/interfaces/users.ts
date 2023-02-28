import {Timestamp} from "firebase/firestore";

export interface Users {
  uid: string;
  displayName: string;
  email: string;
  emailVerified: string;
  photoURL: string;

  createdAt: Timestamp;
  updatedAt: Timestamp;
}

import {Timestamp} from "firebase/firestore";

export interface Bag {
  id?: string;
  description: string;
  collectedAmount: number;
  targetAmount: number;
  shared: boolean;
  shareCode: string;

  uid: string;
  uDisplayName: string | null;
  uEmail: string | null;
  uPhotoURL: string | null;

  createdAt: Timestamp;
  updatedAt: Timestamp;
}

export interface BagDetail {
  id?: string;

  bagId?: string;
  bagDescription: string;

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

export interface BagRequest {
  id?: string;
  active: boolean;
  response: boolean;

  bagId?: string;
  bagDescription: string;

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

import {Injectable} from '@angular/core';
import {
  addDoc,
  collection,
  collectionData,
  deleteDoc,
  doc,
  Firestore,
  query,
  updateDoc,
  where
} from "@angular/fire/firestore";
import {Friend, FriendRequest} from "../interfaces/friend";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FriendService {
  constructor(private firestore: Firestore) {
  }

  addFriend(friend: Friend) {
    const ref = collection(this.firestore, 'friends');
    return addDoc(ref, friend);
  }

  getFriendByUser(userId: string): Observable<Friend[]> {
    const ref = collection(this.firestore, 'friends');
    const q = query(ref, where("userId", "==", userId));
    return collectionData(q, {idField: 'id'}) as Observable<Friend[]>;
  }

  deleteFriend(friend: Friend) {
    const ref = doc(this.firestore, `friends/${friend.id}`);
    return deleteDoc(ref);
  }

  updateFriend(friend: Friend) {
    const ref = doc(this.firestore, `friends/${friend.id}`);
    return updateDoc(ref, {...friend});
  }

  // FRIEND REQUESTS
  addFriendRequest(friendRequest: FriendRequest) {
    const ref = collection(this.firestore, 'friendRequests');
    return addDoc(ref, friendRequest);
  }

  getActiveFriendRequestByGuest(guestId: string): Observable<FriendRequest[]> {
    const ref = collection(this.firestore, 'friendRequests');
    const q = query(ref,
      where("guestId", "==", guestId),
      where("active", "==", true),
      where("response", "==", false));
    return collectionData(q, {idField: 'id'}) as Observable<FriendRequest[]>;
  }

  updateFriendRequest(friendRequest: FriendRequest) {
    const ref = doc(this.firestore, `friendRequests/${friendRequest.id}`);
    return updateDoc(ref, {...friendRequest});
  }
}

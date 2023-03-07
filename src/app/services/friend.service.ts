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
import {User} from "@angular/fire/auth";

@Injectable({
  providedIn: 'root'
})
export class FriendService {
  constructor(private firestore: Firestore) {
  }

  /////////// CRUD - FRIENDS /////////////
  addFriend(friend: Friend) {
    const ref = collection(this.firestore, 'friends');
    return addDoc(ref, friend);
  }

  getFriends(user: User): Observable<Friend[]> {
    const ref = collection(this.firestore, 'friends');
    const q = query(ref, where("uid", "==", user.uid));
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

  /////////// CRUD - FRIENDS REQUEST /////////////
  addFriendRequest(friendRequest: FriendRequest) {
    const ref = collection(this.firestore, 'friendsRequest');
    return addDoc(ref, friendRequest);
  }

  getActiveFriendRequest(user: User): Observable<FriendRequest[]> {
    const ref = collection(this.firestore, 'friendsRequest');
    const q = query(ref,
      where("guid", "==", user.uid),
      where("active", "==", true),
      where("response", "==", false));
    return collectionData(q, {idField: 'id'}) as Observable<FriendRequest[]>;
  }

  updateFriendRequest(friendRequest: FriendRequest) {
    const ref = doc(this.firestore, `friendsRequest/${friendRequest.id}`);
    return updateDoc(ref, {...friendRequest});
  }
}

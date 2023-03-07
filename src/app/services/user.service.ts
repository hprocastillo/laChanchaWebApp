import {Injectable} from '@angular/core';
import {collection, collectionData, doc, docData, Firestore} from "@angular/fire/firestore";
import {Observable} from "rxjs";
import {Users} from "../interfaces/users";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private firestore: Firestore) {
  }

  getAllUsers(): Observable<Users[]> {
    const ref = collection(this.firestore, 'users');
    return collectionData(ref, {idField: 'id'}) as Observable<Users[]>;
  }

  getUserById(userId: string): Observable<Users> {
    const ref = doc(this.firestore, `users/${userId}`);
    return docData(ref, {idField: 'id'}) as Observable<Users>;
  }
}

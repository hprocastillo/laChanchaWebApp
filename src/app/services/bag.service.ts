import {Injectable} from '@angular/core';
import {
  addDoc,
  collection,
  collectionData,
  deleteDoc,
  doc,
  Firestore, orderBy,
  query,
  updateDoc,
  where
} from "@angular/fire/firestore";
import {Bag} from "../interfaces/bag";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BagService {

  constructor(private firestore: Firestore) {
  }

  addBag(bag: Bag) {
    const ref = collection(this.firestore, 'bags');
    return addDoc(ref, bag);
  }

  getAllBags(): Observable<Bag[]> {
    const ref = collection(this.firestore, 'bags');
    return collectionData(ref, {idField: 'id'}) as Observable<Bag[]>;
  }

  getBagsByUser(userId: string): Observable<Bag[]> {
    const ref = collection(this.firestore, 'bags');
    const q = query(ref, where("userId", "==", userId), orderBy("createdAt", "desc"));
    return collectionData(q, {idField: 'id'}) as Observable<Bag[]>;
  }


  deleteBag(bag: Bag) {
    const ref = doc(this.firestore, `bags/${bag.id}`);
    return deleteDoc(ref);
  }

  updateBag(bag: Bag) {
    const ref = doc(this.firestore, `bags/${bag.id}`);
    return updateDoc(ref, {...bag});
  }
}

import {Injectable} from '@angular/core';
import {addDoc, collection, collectionData, deleteDoc, doc, Firestore, updateDoc} from "@angular/fire/firestore";
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

  getBags(): Observable<Bag[]> {
    const ref = collection(this.firestore, 'bags');
    return collectionData(ref, {idField: 'id'}) as Observable<Bag[]>;
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

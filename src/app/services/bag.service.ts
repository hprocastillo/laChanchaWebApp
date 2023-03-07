import {Injectable} from '@angular/core';
import {
  addDoc,
  collection,
  collectionData,
  deleteDoc,
  doc,
  docData,
  Firestore,
  query,
  updateDoc,
  where
} from "@angular/fire/firestore";
import {Bag, BagDetail, BagRequest} from "../interfaces/bag";
import {Observable} from "rxjs";
import {User} from "@angular/fire/auth";

@Injectable({
  providedIn: 'root'
})
export class BagService {
  constructor(private firestore: Firestore) {
  }

  /////////////////// CRUD BAG /////////////////////
  addBag(bag: Bag) {
    const ref = collection(this.firestore, 'bags');
    return addDoc(ref, bag);
  }

  getBagsByUser(user: User): Observable<Bag[]> {
    const ref = collection(this.firestore, 'bags');
    const q = query(ref, where("uid", "==", user.uid));
    return collectionData(q, {idField: 'id'}) as Observable<Bag[]>;
  }

  getBagById(bag: Bag): Observable<Bag> {
    const ref = doc(this.firestore, `bags/${bag.id}`);
    return docData(ref, {idField: 'id'}) as Observable<Bag>;
  }

  deleteBag(bag: Bag) {
    const ref = doc(this.firestore, `bags/${bag.id}`);
    return deleteDoc(ref);
  }

  updateBag(bag: Bag) {
    const ref = doc(this.firestore, `bags/${bag.id}`);
    return updateDoc(ref, {...bag});
  }

  /////////// CRUD BAG REQUEST /////////////
  addBagRequest(bagRequest: BagRequest) {
    const ref = collection(this.firestore, 'bagsRequest');
    return addDoc(ref, bagRequest);
  }

  getActiveBagRequest(user: User): Observable<BagRequest[]> {
    const ref = collection(this.firestore, 'bagsRequest');
    const q = query(ref,
      where("guid", "==", user.uid),
      where("active", "==", true),
      where("response", "==", false));
    return collectionData(q, {idField: 'id'}) as Observable<BagRequest[]>;
  }

  updateBagRequest(bagRequest: BagRequest) {
    const ref = doc(this.firestore, `bagsRequest/${bagRequest.id}`);
    return updateDoc(ref, {...bagRequest});
  }

  /////////// CRUD BAG DETAIL ///////////////
  addBagDetail(bagDetail: BagDetail) {
    const ref = collection(this.firestore, 'bagsDetail');
    return addDoc(ref, bagDetail);
  }

  updateBagDetail(bagDetail: BagDetail) {
    const ref = doc(this.firestore, `bagsDetail/${bagDetail.id}`);
    return updateDoc(ref, {...bagDetail});
  }
}

import {Injectable} from '@angular/core';
import {
  addDoc,
  collection,
  collectionData,
  CollectionReference,
  Firestore,
  orderBy,
  DocumentData,
  query,
  where,
  doc,
  deleteDoc,
  updateDoc,
  docData,
} from "@angular/fire/firestore";
import {User} from "@angular/fire/auth";
import {Observable} from "rxjs";
import {Operation} from "../interfaces/operation";

@Injectable({
  providedIn: 'root'
})
export class OperationsService {
  operationsCollection: CollectionReference<DocumentData>;

  constructor(private firestore: Firestore) {
    this.operationsCollection = collection(this.firestore, 'operations');
  }

  getOperations(firebaseUser: User, type: string) {
    const q = query(this.operationsCollection,
      where('hostId', '==', firebaseUser.uid),
      where('type', '==', type),
      orderBy('createdAt', 'desc'));
    return collectionData(q, {idField: 'id'}) as Observable<Operation[]>;
  }

  getOperationById(operation: Operation) {
    const operationDocumentReference = doc(this.firestore, `operations/${operation.id}`);
    return docData(operationDocumentReference, {idField: 'id'});
  }

  addOperation(operation: Operation) {
    return addDoc(this.operationsCollection, operation);
  }

  updateOperation(operation: Operation) {
    const operationDocumentReference = doc(this.firestore, `operations/${operation.id}`);
    return updateDoc(operationDocumentReference, {...operation});
  }

  deleteOperation(operation: Operation) {
    const operationDocumentReference = doc(this.firestore, `operations/${operation.id}`);
    return deleteDoc(operationDocumentReference);
  }

}

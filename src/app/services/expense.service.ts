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
import {Expense} from "../interfaces/expense";
import {Observable} from "rxjs";
import {Bag} from "../interfaces/bag";

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  constructor(private firestore: Firestore) {
  }

  addExpense(expense: Expense) {
    const ref = collection(this.firestore, 'expenses');
    return addDoc(ref, expense);
  }

  getExpensesByBag(bag: Bag): Observable<Expense[]> {
    const ref = collection(this.firestore, 'expenses');
    const q = query(ref, where('bagId', "==", bag.id));
    return collectionData(q, {idField: 'id'}) as Observable<Expense[]>;
  }

  deleteExpense(expense: Expense) {
    const ref = doc(this.firestore, `expenses/${expense.id}`);
    return deleteDoc(ref);
  }

  updateExpense(expense: Expense) {
    const ref = doc(this.firestore, `expenses/${expense.id}`);
    return updateDoc(ref, {...expense});
  }
}

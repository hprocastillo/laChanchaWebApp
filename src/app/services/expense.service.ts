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
import {Expense} from "../interfaces/expense";
import {Observable} from "rxjs";
import {Bag} from "../interfaces/bag";
import {User} from "@angular/fire/auth";

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

  getAllExpenses(): Observable<Expense[]> {
    const ref = collection(this.firestore, 'expenses');
    return collectionData(ref, {idField: 'id'}) as Observable<Expense[]>;
  }

  getExpensesByBag(userId: string, bagId: string): Observable<Expense[]> {
    const ref = collection(this.firestore, 'expenses');
    const q = query(ref,
      where('userId', "==", userId),
      where('bagId', "==", bagId));
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

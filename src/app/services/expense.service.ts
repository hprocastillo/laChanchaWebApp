import {Injectable} from '@angular/core';
import {addDoc, collection, collectionData, deleteDoc, doc, Firestore, updateDoc} from "@angular/fire/firestore";
import {Expense} from "../interfaces/expense";
import {Observable} from "rxjs";

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

  getExpenses(): Observable<Expense[]> {
    const ref = collection(this.firestore, 'expenses');
    return collectionData(ref, {idField: 'id'}) as Observable<Expense[]>;
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

import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Bag} from "../../../interfaces/bag";
import {User} from "@angular/fire/auth";
import {Expense} from "../../../interfaces/expense";
import {ExpenseService} from "../../../services/expense.service";
import {Subject, takeUntil} from "rxjs";

@Component({
  selector: 'app-list-expenses',
  templateUrl: './list-expenses.component.html'
})
export class ListExpensesComponent implements OnInit, OnDestroy {
  @Input() bag = {} as Bag;
  @Input() user = {} as User;
  listExpenses: Expense[] = [];

  constructor(private expenseService: ExpenseService) {
  }

  private unsubscribe$ = new Subject<boolean>();

  ngOnInit() {
    if (this.user.uid && this.bag.id) {
      this.expenseService.getExpensesByBag(this.user.uid, this.bag.id)
        .pipe(takeUntil(this.unsubscribe$))
        .subscribe(res => {
          this.listExpenses = res;
        });
    }
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next(true);
    this.unsubscribe$.complete();
  }
}

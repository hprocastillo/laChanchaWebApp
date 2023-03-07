import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Bag} from "../../../interfaces/bag";
import {Expense} from "../../../interfaces/expense";
import {ExpenseService} from "../../../services/expense.service";
import {Subject, takeUntil} from "rxjs";

@Component({
  selector: 'app-list-expenses',
  templateUrl: './list-expenses.component.html'
})
export class ListExpensesComponent implements OnInit, OnDestroy {
  @Input() bag = {} as Bag;

  listExpenses: Expense[] = [];

  private unsubscribe$ = new Subject<boolean>();

  constructor(private expenseService: ExpenseService) {
  }

  ngOnInit() {
    if (this.bag) {
      this.expenseService.getExpensesByBag(this.bag)
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

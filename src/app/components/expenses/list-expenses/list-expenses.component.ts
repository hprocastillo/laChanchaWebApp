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
  //INPUTS AND OUTPUTS
  @Input() bag = {} as Bag;
  @Input() user = {} as User;

  //VARIABLES
  listExpenses: Expense[] = [];

  //UNSUBSCRIBE METHOD
  private unsubscribe$ = new Subject<boolean>();

  constructor(private expenseService: ExpenseService) {
  }

  ngOnInit() {
    this.expenseService.getExpenses()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(res => {
        this.listExpenses = res.filter(item => {
          return item.bagId === this.bag.id;
        });
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next(true);
    this.unsubscribe$.complete();
  }
}

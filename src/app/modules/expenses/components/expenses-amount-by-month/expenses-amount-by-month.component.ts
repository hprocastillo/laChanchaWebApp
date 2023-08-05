import {Component, Input, OnChanges, OnDestroy, SimpleChanges} from '@angular/core';
import {Subject, takeUntil} from "rxjs";
import {OperationsService} from "../../../../shared/services/operations.service";
import {User} from "@angular/fire/auth";

@Component({
  selector: 'app-expenses-amount-by-month',
  templateUrl: './expenses-amount-by-month.component.html',
  styleUrls: ['./expenses-amount-by-month.component.scss']
})
export class ExpensesAmountByMonthComponent implements OnChanges, OnDestroy {
  @Input() firebaseUser = {} as User;
  @Input() currentMonth: number = 0;
  totalAmount: number = 0;

  private unsubscribe$ = new Subject<boolean>();

  constructor(private operationService: OperationsService) {
  }

  ngOnChanges(changes: SimpleChanges) {
    this.operationService.getOperations(this.firebaseUser, 'EXPENSE')
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(res => {
        for (let i: number = 0; i < res.length; i++) {
          if (res[i].createdAt.toDate().getMonth() === this.currentMonth) {
            this.totalAmount = this.totalAmount + res[i].amount;
          }
        }
      });
    this.totalAmount = 0;
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next(true);
    this.unsubscribe$.complete();
  }
}

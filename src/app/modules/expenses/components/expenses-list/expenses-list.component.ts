import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output
} from '@angular/core';
import {User} from "@angular/fire/auth";
import {Subject, takeUntil} from "rxjs";
import {Operation} from "../../../../shared/interfaces/operation";
import {OperationsService} from "../../../../shared/services/operations.service";

@Component({
  selector: 'app-expenses-list',
  templateUrl: './expenses-list.component.html',
  styleUrls: ['./expenses-list.component.scss']
})
export class ExpensesListComponent implements OnInit, OnDestroy {
  @Input() firebaseUser = {} as User;
  @Output() outTemplate = new EventEmitter<string>();
  @Output() expenseToView = new EventEmitter<Operation>();

  currentMonth: number = new Date().getMonth();
  listExpenses: Operation[] = [];
  private unsubscribe$ = new Subject<boolean>();

  constructor(private operationService: OperationsService) {
  }

  ngOnInit(): void {
    this.operationService.getOperations(this.firebaseUser, 'EXPENSE')
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(res => {
        this.listExpenses = res;
      });
  }

  getViewExpense(expense: Operation) {
    this.expenseToView.emit(expense);
  }

  getTemplate(template: string) {
    this.outTemplate.emit(template);
  }

  getSelectedMonth($event: any) {
    this.currentMonth = parseInt($event.value);
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next(true);
    this.unsubscribe$.complete();
  }
}

import {Component} from '@angular/core';
import {AuthService} from "../../../../shared/services/auth.service";
import {Operation} from "../../../../shared/interfaces/operation";

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.scss']
})
export class ExpensesComponent {

  template: string = "EXPENSES-LIST";
  expenseToView = {} as Operation;

  constructor(public authService: AuthService) {
  }

  getTemplate(template: string) {
    this.template = template;
  }

  getViewExpense(expense: Operation) {
    this.expenseToView = expense;
    this.template = "EXPENSES-VIEW";
  }

}

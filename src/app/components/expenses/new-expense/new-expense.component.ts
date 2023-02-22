import {Component, EventEmitter, Input, Output} from '@angular/core';
import {User} from "@angular/fire/auth";
import {Bag} from "../../../interfaces/bag";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ExpenseService} from "../../../services/expense.service";
import {Expense} from "../../../interfaces/expense";

@Component({
  selector: 'app-new-expense',
  templateUrl: './new-expense.component.html'
})
export class NewExpenseComponent {
  //INPUTS AND OUTPUTS
  @Input() user = {} as User;
  @Input() bag = {} as Bag;
  @Output() btnBackToViewBag = new EventEmitter<boolean>();

  newExpenseForm: FormGroup;

  constructor(private fb: FormBuilder, private expenseService: ExpenseService) {
    this.newExpenseForm = this.fb.group({
      description: ['', [Validators.required]],
      amount: ['', [Validators.required]],
    });
  }

  goBack() {
    this.btnBackToViewBag.emit(true);
  }

  onSubmit() {
    let newExpense: Expense;
    if (this.newExpenseForm.valid) {
      newExpense = this.newExpenseForm.value;
      newExpense.bagId = this.bag.id;
      newExpense.userId = this.user.uid;
      newExpense.userDisplayName = this.user.displayName;
      newExpense.userEmail = this.user.email;
      newExpense.userPhotoUrl = this.user.photoURL;
      newExpense.createdAt = new Date();

      this.expenseService.addExpense(newExpense)
        .then(res => {
          console.log(res);
          this.newExpenseForm.reset();
          this.goBack();
        })
        .catch(error => console.log(error));
    }
  }

}

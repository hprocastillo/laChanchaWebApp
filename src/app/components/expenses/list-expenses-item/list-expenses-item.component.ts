import {Component, Input} from '@angular/core';
import {Expense} from "../../../interfaces/expense";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ExpenseService} from "../../../services/expense.service";
import {BagService} from "../../../services/bag.service";
import {Bag} from "../../../interfaces/bag";
import {User} from "@angular/fire/auth";

@Component({
  selector: 'app-list-expenses-item',
  templateUrl: './list-expenses-item.component.html'
})
export class ListExpensesItemComponent {
  //INPUTS AND OUTPUTS
  @Input() expense = {} as Expense;
  @Input() bag = {} as Bag;
  @Input() user = {} as User;
  //VARIABLES
  toolbar: boolean = false;

  constructor(
    private modalService: NgbModal,
    private expenseService: ExpenseService,
    private bagService: BagService) {
  }

  openToolbar(value: boolean) {
    this.toolbar = value;
  }

  openModalReceipt(modalReceipt: any) {
    this.modalService.open(modalReceipt, {backdrop: 'static', centered: true});
  }

  openModalDelete(modalDelete: any) {
    this.modalService.open(modalDelete, {backdrop: 'static', centered: true});
  }

  async deleteExpense(expense: Expense, bag: Bag) {
    bag.collectedAmount = bag.collectedAmount - expense.amount;
    try {
      await this.expenseService.deleteExpense(expense);
      await this.bagService.updateBag(bag);
      this.modalService.dismissAll();
    } catch (e) {
      console.log(e);
    }
  }

}

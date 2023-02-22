import {Component, Input} from '@angular/core';
import {Expense} from "../../../interfaces/expense";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-list-expenses-item',
  templateUrl: './list-expenses-item.component.html'
})
export class ListExpensesItemComponent {
  //INPUTS AND OUTPUTS
  @Input() expense = {} as Expense;
  //VARIABLES
  toolbar: boolean = false;

  constructor(private modalService: NgbModal) {
  }


  openToolbar(value: boolean) {
    this.toolbar = value;
  }

  openModalReceipt(modalReceipt: any) {
    this.modalService.open(modalReceipt);
  }
}

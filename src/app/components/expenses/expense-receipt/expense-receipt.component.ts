import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-expense-receipt',
  templateUrl: './expense-receipt.component.html'
})
export class ExpenseReceiptComponent {
  @Input() receiptUrl: string | undefined;
}

import {Component, Input} from '@angular/core';
import {Operation} from "../../../../shared/interfaces/operation";

@Component({
  selector: 'app-expenses-list-item',
  templateUrl: './expenses-list-item.component.html',
  styleUrls: ['./expenses-list-item.component.scss']
})
export class ExpensesListItemComponent {
  @Input() expense = {} as Operation;
}

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ExpensesRoutingModule} from './expenses-routing.module';
import {ExpensesListComponent} from './components/expenses-list/expenses-list.component';
import {ExpensesListItemComponent} from './components/expenses-list-item/expenses-list-item.component';
import {ExpensesNewComponent} from './components/expenses-new/expenses-new.component';
import {ExpensesEditComponent} from './components/expenses-edit/expenses-edit.component';
import {ExpensesViewComponent} from './components/expenses-view/expenses-view.component';
import {ExpensesComponent} from './components/expenses/expenses.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgxImageCompressService} from "ngx-image-compress";
import {FilterMonthPipe} from "../../shared/pipes/filter-month.pipe";
import { ExpensesAmountByMonthComponent } from './components/expenses-amount-by-month/expenses-amount-by-month.component';

@NgModule({
  declarations: [
    ExpensesListComponent,
    ExpensesListItemComponent,
    ExpensesNewComponent,
    ExpensesEditComponent,
    ExpensesViewComponent,
    ExpensesComponent,
    FilterMonthPipe,
    ExpensesAmountByMonthComponent
  ],
  imports: [
    CommonModule,
    ExpensesRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [NgxImageCompressService],
})
export class ExpensesModule {
}

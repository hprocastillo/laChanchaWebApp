import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IncomesRoutingModule } from './incomes-routing.module';
import { IncomesComponent } from './components/incomes/incomes.component';
import { IncomesListComponent } from './components/incomes-list/incomes-list.component';
import { IncomesListItemComponent } from './components/incomes-list-item/incomes-list-item.component';
import { IncomesNewComponent } from './components/incomes-new/incomes-new.component';
import { IncomesEditComponent } from './components/incomes-edit/incomes-edit.component';
import { IncomesViewComponent } from './components/incomes-view/incomes-view.component';


@NgModule({
  declarations: [
    IncomesComponent,
    IncomesListComponent,
    IncomesListItemComponent,
    IncomesNewComponent,
    IncomesEditComponent,
    IncomesViewComponent
  ],
  imports: [
    CommonModule,
    IncomesRoutingModule
  ]
})
export class IncomesModule { }

import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ExpensesComponent} from "./components/expenses/expenses.component";
import {Page404Component} from "../../shared/components/page404/page404.component";

const routes: Routes = [
  {
    path: '', component: ExpensesComponent
  },
  {
    path: '**', component: Page404Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExpensesRoutingModule {
}

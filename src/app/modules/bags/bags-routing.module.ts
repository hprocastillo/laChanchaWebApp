import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BagsComponent} from "./components/bags/bags.component";
import {Page404Component} from "../../shared/components/page404/page404.component";

const routes: Routes = [
  {
    path: '', component: BagsComponent
  },
  {
    path: '**', component: Page404Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BagsRoutingModule {
}

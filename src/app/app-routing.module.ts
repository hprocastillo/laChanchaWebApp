import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./shared/components/home/home.component";
import {canActivate, redirectLoggedInTo, redirectUnauthorizedTo} from "@angular/fire/auth-guard";
import {DashboardComponent} from "./shared/components/dashboard/dashboard.component";
import {Page404Component} from "./shared/components/page404/page404.component";

const routes: Routes = [
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'auth',
    ...canActivate(() => redirectLoggedInTo(['/dashboard'])),
    loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'dashboard',
    ...canActivate(() => redirectUnauthorizedTo(['/auth'])),
    component: DashboardComponent
  },
  {
    path: 'expenses',
    ...canActivate(() => redirectUnauthorizedTo(['/auth'])),
    loadChildren: () => import('./modules/expenses/expenses.module').then(m => m.ExpensesModule)
  },
  {
    path: 'bags',
    ...canActivate(() => redirectUnauthorizedTo(['/auth'])),
    loadChildren: () => import('./modules/bags/bags.module').then(m => m.BagsModule)
  },
  {
    path: 'incomes',
    ...canActivate(() => redirectUnauthorizedTo(['/auth'])),
    loadChildren: () => import('./modules/incomes/incomes.module').then(m => m.IncomesModule)
  },
  {
    path: 'friends',
    ...canActivate(() => redirectUnauthorizedTo(['/auth'])),
    loadChildren: () => import('./modules/friends/friends.module').then(m => m.FriendsModule)
  },
  {
    path: 'wallet',
    ...canActivate(() => redirectUnauthorizedTo(['/auth'])),
    loadChildren: () => import('./modules/wallet/wallet.module').then(m => m.WalletModule)
  },
  {
    path: '', redirectTo: '/dashboard', pathMatch: 'full'
  },
  {
    path: '**', component: Page404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

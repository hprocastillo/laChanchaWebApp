import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HomeComponent} from './components/home/home.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {LoginComponent} from './components/login/login.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {ListBagsComponent} from './components/bags/list-bags/list-bags.component';
import {NewBagComponent} from './components/bags/new-bag/new-bag.component';
import {ViewBagComponent} from './components/bags/view-bag/view-bag.component';
import {ListExpensesComponent} from './components/expenses/list-expenses/list-expenses.component';
import {NewExpenseComponent} from './components/expenses/new-expense/new-expense.component';
import {ListFriendsComponent} from './components/friends/list-friends/list-friends.component';
import {NewFriendComponent} from './components/friends/new-friend/new-friend.component';
import {EditFriendComponent} from './components/friends/edit-friend/edit-friend.component';
import {ViewFriendComponent} from './components/friends/view-friend/view-friend.component';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import {ButtonBarComponent} from './components/buttons/button-bar/button-bar.component';
import {ButtonComponent} from './components/buttons/button/button.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ListBagsItemComponent} from './components/bags/list-bags-item/list-bags-item.component';
import {initializeApp, provideFirebaseApp} from '@angular/fire/app';
import {environment} from '../environments/environment';
import {provideAuth, getAuth} from '@angular/fire/auth';
import {provideFirestore, getFirestore} from '@angular/fire/firestore';
import {provideStorage, getStorage} from '@angular/fire/storage';
import {ListExpensesItemComponent} from './components/expenses/list-expenses-item/list-expenses-item.component';
import {ExpenseReceiptComponent} from './components/expenses/expense-receipt/expense-receipt.component';
import {ButtonSaveLoadingComponent} from './components/buttons/button-save-loading/button-save-loading.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    LoginComponent,
    DashboardComponent,
    ListBagsComponent,
    NewBagComponent,
    ViewBagComponent,
    ListExpensesComponent,
    NewExpenseComponent,
    ListFriendsComponent,
    NewFriendComponent,
    EditFriendComponent,
    ViewFriendComponent,
    PageNotFoundComponent,
    ButtonBarComponent,
    ButtonComponent,
    ListBagsItemComponent,
    ListExpensesItemComponent,
    ExpenseReceiptComponent,
    ButtonSaveLoadingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {initializeApp, provideFirebaseApp} from '@angular/fire/app';
import {environment} from '../environments/environment';
import {getAuth, provideAuth} from '@angular/fire/auth';
import {getFirestore, provideFirestore} from '@angular/fire/firestore';
import {getStorage, provideStorage} from '@angular/fire/storage';
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
import {ViewFriendComponent} from './components/friends/view-friend/view-friend.component';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import {ButtonBarComponent} from './components/buttons/button-bar/button-bar.component';
import {ButtonComponent} from './components/buttons/button/button.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ListBagsItemComponent} from './components/bags/list-bags-item/list-bags-item.component';

import {ListExpensesItemComponent} from './components/expenses/list-expenses-item/list-expenses-item.component';
import {ExpenseReceiptComponent} from './components/expenses/expense-receipt/expense-receipt.component';
import {ButtonSaveLoadingComponent} from './components/buttons/button-save-loading/button-save-loading.component';
import {ListFriendsItemComponent} from './components/friends/list-friends-item/list-friends-item.component';
import {FilterUsersPipe} from './pipes/filter-users.pipe';
import {ButtonFriendsBadgeComponent} from './components/buttons/button-friends-badge/button-friends-badge.component';
import {ListFriendRequestComponent} from './components/friends/list-friend-request/list-friend-request.component';
import {
  ListFriendRequestItemComponent
} from './components/friends/list-friend-request-item/list-friend-request-item.component';
import {SearchFriendComponent} from './components/friends/search-friend/search-friend.component';
import {SearchFriendItemComponent} from './components/friends/search-friend-item/search-friend-item.component';
import {FilterFriendsPipe} from './pipes/filter-friends.pipe';
import {ShareBagComponent} from './components/bags/share-bag/share-bag.component';
import {
  NotificationsFriendsComponent
} from './components/notifications/notifications-friends/notifications-friends.component';
import {NotificationsBagsComponent} from './components/notifications/notifications-bags/notifications-bags.component';
import {TitleComponent} from './components/title/title.component';
import {ShareBagItemComponent} from './components/bags/share-bag-item/share-bag-item.component';
import {ListBagsRequestComponent} from './components/bags/list-bags-request/list-bags-request.component';
import {ListBagsRequestItemComponent} from './components/bags/list-bags-request-item/list-bags-request-item.component';

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
    ViewFriendComponent,
    PageNotFoundComponent,
    ButtonBarComponent,
    ButtonComponent,
    ListBagsItemComponent,
    ListExpensesItemComponent,
    ExpenseReceiptComponent,
    ButtonSaveLoadingComponent,
    ListFriendsItemComponent,
    FilterUsersPipe,
    ButtonFriendsBadgeComponent,
    ListFriendRequestComponent,
    ListFriendRequestItemComponent,
    SearchFriendComponent,
    SearchFriendItemComponent,
    FilterFriendsPipe,
    ShareBagComponent,
    NotificationsFriendsComponent,
    NotificationsBagsComponent,
    TitleComponent,
    ShareBagItemComponent,
    ListBagsRequestComponent,
    ListBagsRequestItemComponent,
    ListBagsRequestComponent,
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
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

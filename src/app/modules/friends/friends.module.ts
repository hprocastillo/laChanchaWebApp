import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FriendsRoutingModule } from './friends-routing.module';
import { FriendsComponent } from './components/friends/friends.component';
import { FriendsListComponent } from './components/friends-list/friends-list.component';
import { FriendsListItemComponent } from './components/friends-list-item/friends-list-item.component';
import { FriendsNewComponent } from './components/friends-new/friends-new.component';
import { FriendsEditComponent } from './components/friends-edit/friends-edit.component';
import { FriendsViewComponent } from './components/friends-view/friends-view.component';


@NgModule({
  declarations: [
    FriendsComponent,
    FriendsListComponent,
    FriendsListItemComponent,
    FriendsNewComponent,
    FriendsEditComponent,
    FriendsViewComponent
  ],
  imports: [
    CommonModule,
    FriendsRoutingModule
  ]
})
export class FriendsModule { }

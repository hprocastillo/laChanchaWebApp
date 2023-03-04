import {Component, EventEmitter, Input, Output} from '@angular/core';
import {User} from "@angular/fire/auth";
import {Friend} from "../../../interfaces/friend";

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html'
})
export class FriendsComponent {
  @Input() user = {} as User;
  @Output() selectedFriend = new EventEmitter<Friend>();
  @Output() btnFriendRequest = new EventEmitter<boolean>();

  goFriendRequest() {
    this.btnFriendRequest.emit(true);
  }

  getSelectedFriend(friend: Friend) {
    this.selectedFriend.emit(friend);
  }
}

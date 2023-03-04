import {Component, EventEmitter, Input, Output} from '@angular/core';
import {User} from "@angular/fire/auth";

@Component({
  selector: 'app-button-bar',
  templateUrl: './button-bar.component.html'
})
export class ButtonBarComponent {
  @Input() user = {} as User;
  @Input() bagsTemplate: boolean | undefined;
  @Input() shareBagTemplate: boolean | undefined;
  @Input() shareBagRequestTemplate: boolean | undefined;
  @Input() friendsTemplate: boolean | undefined;
  @Input() friendsRequestTemplate: boolean | undefined;
  @Input() viewBagTemplate: boolean | undefined;
  @Input() searchFriendTemplate: boolean | undefined;

  @Output() btnBags = new EventEmitter<boolean>();
  @Output() btnNewBag = new EventEmitter<boolean>();
  @Output() btnViewBag = new EventEmitter<boolean>();
  @Output() btnFriends = new EventEmitter<boolean>();
  @Output() btnNewExpense = new EventEmitter<boolean>()
  @Output() btnSearchFriend = new EventEmitter<boolean>();

  goBags() {
    this.btnBags.emit(true);
  }

  goNewBag() {
    this.btnNewBag.emit(true);
  }

  goViewBag() {
    this.btnViewBag.emit(true);
  }

  goNewExpense() {
    this.btnNewExpense.emit(true);
  }

  goFriends() {
    this.btnFriends.emit(true);
  }

  goSearchFriend() {
    this.btnSearchFriend.emit(true);
  }
}

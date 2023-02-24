import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-button-bar',
  templateUrl: './button-bar.component.html'
})
export class ButtonBarComponent {
  @Input() listBagsTemplate: boolean | undefined;
  @Input() listFriendsTemplate: boolean | undefined;
  @Input() viewBagTemplate: boolean | undefined;

  @Output() btnBackToListBags = new EventEmitter<boolean>();
  @Output() btnNewBag = new EventEmitter<boolean>();
  @Output() btnFriends = new EventEmitter<boolean>();
  @Output() btnNewFriend = new EventEmitter<boolean>();
  @Output() btnNewExpense = new EventEmitter<boolean>()

  goFriends() {
    this.btnFriends.emit(true);
  }

  goNewFriend() {
    this.btnNewFriend.emit(true);
  }

  goNewBag() {
    this.btnNewBag.emit(true);
  }

  goNewExpense() {
    this.btnNewExpense.emit(true);
  }

  goBackToListBagsTemplate() {
    this.btnBackToListBags.emit(true);
  }

}

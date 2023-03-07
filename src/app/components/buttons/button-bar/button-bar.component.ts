import {Component, EventEmitter, Input, Output} from '@angular/core';
import {User} from "@angular/fire/auth";

@Component({
  selector: 'app-button-bar',
  templateUrl: './button-bar.component.html'
})
export class ButtonBarComponent {
  @Input() user = {} as User;
  //BAGS TEMPLATES
  @Input() listBagsTemplate: boolean | undefined;
  @Input() viewBagTemplate: boolean | undefined;
  @Input() shareBagTemplate: boolean | undefined;
  @Input() listBagsRequestTemplate: boolean | undefined;

  //FRIENDS TEMPLATES
  @Input() listFriendsTemplate: boolean | undefined;
  @Input() listFriendsRequestTemplate: boolean | undefined;
  @Input() searchFriendTemplate: boolean | undefined;
  @Input() viewFriendsTemplate: boolean | undefined;

  //OUTPUTS
  @Output() btnListBags = new EventEmitter<boolean>();
  @Output() btnNewBag = new EventEmitter<boolean>();
  @Output() btnViewBag = new EventEmitter<boolean>();
  @Output() btnListFriends = new EventEmitter<boolean>();
  @Output() btnNewExpense = new EventEmitter<boolean>()
  @Output() btnSearchFriends = new EventEmitter<boolean>();

  goListBags() {
    this.btnListBags.emit(true);
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

  goListFriends() {
    this.btnListFriends.emit(true);
  }

  goSearchFriends() {
    this.btnSearchFriends.emit(true);
  }
}

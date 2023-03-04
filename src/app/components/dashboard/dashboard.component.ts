import {Component} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Bag} from "../../interfaces/bag";
import {Friend} from "../../interfaces/friend";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent {
  //VARIABLES
  selectedBag = {} as Bag;
  selectedFriend = {} as Friend;

  //BUTTON BAR TEMPLATE
  buttonBarTemplate: boolean = true;

  //BAGS TEMPLATES
  bagsTemplate: boolean = true;
  newBagTemplate: boolean = false;
  viewBagTemplate: boolean = false;
  shareBagTemplate: boolean = false;
  shareBagRequestTemplate: boolean = false;

  //EXPENSES TEMPLATES
  newExpenseTemplate: boolean = false;

  //FRIENDS TEMPLATES
  friendsTemplate: boolean = false;
  viewFriendTemplate: boolean = false;
  friendsRequestTemplate: boolean = false;
  searchFriendTemplate: boolean = false;

  constructor(public authService: AuthService) {
  }

  //BAGS FUNCTIONS
  getSelectedBag(bag: Bag) {
    this.selectedBag = bag;
    this.showViewBagTemplate();
  }

  showBagsTemplate() {
    this.friendsTemplate = false;
    this.newBagTemplate = false;
    this.viewBagTemplate = false;
    this.shareBagRequestTemplate = false;
    this.bagsTemplate = true;
  }

  showNewBagTemplate() {
    this.bagsTemplate = false;
    this.newBagTemplate = true;
  }

  showViewBagTemplate() {
    this.bagsTemplate = false;
    this.newExpenseTemplate = false;
    this.shareBagTemplate = false;
    this.viewBagTemplate = true;
  }

  showShareBag() {
    this.viewBagTemplate = false;
    this.shareBagTemplate = true;
  }

  showShareBagRequest() {
    this.bagsTemplate = false;
    this.shareBagRequestTemplate = true;
  }

  //FRIENDS FUNCTIONS
  showFriendsTemplate() {
    this.bagsTemplate = false;
    this.friendsRequestTemplate = false;
    this.searchFriendTemplate = false;
    this.friendsTemplate = true;
  }

  showViewFriendTemplate() {
    this.friendsTemplate = false;
    this.viewFriendTemplate = true;
  }

  showListFriendsRequest() {
    this.friendsTemplate = false;
    this.friendsRequestTemplate = true;
  }

  getSelectedFriend(friend: Friend) {
    this.selectedFriend = friend;
    this.showViewFriendTemplate();
  }

  showSearchFriend() {
    this.friendsTemplate = false;
    this.searchFriendTemplate = true;
  }

  //EXPENSES FUNCTIONS
  showNewExpenseTemplate() {
    this.viewBagTemplate = false;
    this.newExpenseTemplate = true;
  }
}

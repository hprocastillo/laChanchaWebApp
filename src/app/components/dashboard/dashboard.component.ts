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
  listBagsTemplate: boolean = true;
  newBagTemplate: boolean = false;
  viewBagTemplate: boolean = false;

  //EXPENSES TEMPLATES
  newExpenseTemplate: boolean = false;

  //FRIENDS TEMPLATES
  friendsTemplate: boolean = false;
  viewFriendTemplate: boolean = false;
  listFriendsRequestTemplate: boolean = false;

  constructor(public authService: AuthService) {
  }

  //BAGS FUNCTIONS
  getSelectedBag(bag: Bag) {
    this.selectedBag = bag;
    this.showViewBagTemplate();
  }

  showNewBagTemplate() {
    this.listBagsTemplate = false;
    this.newBagTemplate = true;
  }

  showViewBagTemplate() {
    this.listBagsTemplate = false;
    this.newExpenseTemplate = false;
    this.viewBagTemplate = true;
  }

  showListBagsTemplate() {
    this.friendsTemplate = false;
    this.newBagTemplate = false;
    this.viewBagTemplate = false;
    this.listBagsTemplate = true;
  }

  //FRIENDS FUNCTIONS
  showFriendsTemplate() {
    this.listBagsTemplate = false;
    this.listFriendsRequestTemplate = false;
    this.friendsTemplate = true;
  }

  showViewFriendTemplate() {
    this.viewFriendTemplate = true;
  }

  showListFriendsRequest() {
    this.friendsTemplate = false;
    this.listFriendsRequestTemplate = true;
  }

  //EXPENSES FUNCTIONS
  showNewExpenseTemplate() {
    this.viewBagTemplate = false;
    this.newExpenseTemplate = true;
  }

  getSelectedFriend(friend: Friend) {
    this.selectedFriend = friend;
    this.showViewFriendTemplate();
  }
}

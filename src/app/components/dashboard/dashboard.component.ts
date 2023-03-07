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
  shareBagTemplate: boolean = false;
  listBagsRequestTemplate: boolean = false;

  //FRIENDS TEMPLATES
  listFriendsTemplate: boolean = false;
  listFriendsRequestTemplate: boolean = false;
  searchFriendTemplate: boolean = false;
  viewFriendTemplate: boolean = false;

  //EXPENSES TEMPLATES
  newExpenseTemplate: boolean = false;

  constructor(public authService: AuthService) {
  }

  //BAGS FUNCTIONS
  getSelectedBag(bag: Bag) {
    this.selectedBag = bag;
    this.showViewBagTemplate();
  }

  showListBagsTemplate() {
    this.listFriendsTemplate = false;
    this.newBagTemplate = false;
    this.viewBagTemplate = false;
    this.listBagsTemplate = true;
  }

  showNewBagTemplate() {
    this.listBagsTemplate = false;
    this.newBagTemplate = true;
  }

  showViewBagTemplate() {
    this.listBagsTemplate = false;
    this.newExpenseTemplate = false;
    this.shareBagTemplate = false;
    this.viewBagTemplate = true;
  }

  showShareBagTemplate() {
    this.viewBagTemplate = false;
    this.shareBagTemplate = true;
  }

  //FRIENDS FUNCTIONS
  getSelectedFriend(friend: Friend) {
    this.selectedFriend = friend;
    this.showListFriendsTemplate();
  }

  showListFriendsTemplate() {
    this.listBagsTemplate = false;
    this.searchFriendTemplate = false;
    this.listFriendsTemplate = true;
  }

  showSearchFriendsTemplate() {
    this.listFriendsTemplate = false;
    this.searchFriendTemplate = true;
  }

  //EXPENSES FUNCTIONS
  showNewExpenseTemplate() {
    this.viewBagTemplate = false;
    this.newExpenseTemplate = true;
  }
}

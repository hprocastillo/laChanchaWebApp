import {Component} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Bag} from "../../interfaces/bag";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent {
  //VARIABLES
  selectedBag = {} as Bag;


  //TEMPLATES
  buttonBarTemplate: boolean = true;

  listBagsTemplate: boolean = true;
  newBagTemplate: boolean = false;
  viewBagTemplate: boolean = false;
  listExpensesTemplate: boolean = false;
  newExpenseTemplate: boolean = false;
  viewExpenseTemplate: boolean = false;
  listFriendsTemplate: boolean = false;
  newFriendTemplate: boolean = false;
  viewFriendTemplate: boolean = false;


  constructor(public authService: AuthService) {
  }

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

  showListFriendsTemplate() {
    this.listBagsTemplate = false;
    this.listFriendsTemplate = true;
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

  showNewExpenseTemplate() {
    this.viewBagTemplate = false;
    this.newExpenseTemplate = true;
  }

}

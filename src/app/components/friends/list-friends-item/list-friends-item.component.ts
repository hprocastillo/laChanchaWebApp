import {Component, Input} from '@angular/core';
import {Friend} from "../../../interfaces/friend";

@Component({
  selector: 'app-list-friends-item',
  templateUrl: './list-friends-item.component.html'
})
export class ListFriendsItemComponent {
  @Input() friend = {} as Friend;
}

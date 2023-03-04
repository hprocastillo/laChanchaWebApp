import {Component, Input} from '@angular/core';
import {User} from "@angular/fire/auth";
import {Friend} from "../../../interfaces/friend";

@Component({
  selector: 'app-view-friend',
  templateUrl: './view-friend.component.html'
})
export class ViewFriendComponent {
  @Input() user = {} as User;
  @Input() friend = {} as Friend;
}

import {Component, Input} from '@angular/core';
import {Friend, FriendRequest} from "../../../interfaces/friend";
import {FriendService} from "../../../services/friend.service";
import {Timestamp} from "firebase/firestore";

@Component({
  selector: 'app-list-friend-request-item',
  templateUrl: './list-friend-request-item.component.html'
})
export class ListFriendRequestItemComponent {
  //INPUTS AND OUTPUTS
  @Input() friendRequest = {} as FriendRequest;

  constructor(private friendService: FriendService) {
  }

  async agreeRequest(friendRequest: FriendRequest) {
    friendRequest.active = false;
    friendRequest.response = true;

    let newFriend1 = {} as Friend;
    newFriend1.userId = friendRequest.guestId;
    newFriend1.userDisplayName = friendRequest.guestDisplayName;
    newFriend1.userEmail = friendRequest.guestEmail;
    newFriend1.userPhotoUrl = friendRequest.guestPhotoUrl;

    newFriend1.guestId = friendRequest.userId;
    newFriend1.guestDisplayName = friendRequest.userDisplayName;
    newFriend1.guestEmail = friendRequest.userEmail;
    newFriend1.guestPhotoUrl = friendRequest.userPhotoUrl;
    newFriend1.createdAt = Timestamp.fromDate(new Date());

    let newFriend2 = {} as Friend;
    newFriend2.userId = friendRequest.userId;
    newFriend2.userDisplayName = friendRequest.userDisplayName;
    newFriend2.userEmail = friendRequest.userEmail;
    newFriend2.userPhotoUrl = friendRequest.userPhotoUrl;

    newFriend2.guestId = friendRequest.guestId;
    newFriend2.guestDisplayName = friendRequest.guestDisplayName;
    newFriend2.guestEmail = friendRequest.guestEmail;
    newFriend2.guestPhotoUrl = friendRequest.guestPhotoUrl;
    newFriend2.createdAt = Timestamp.fromDate(new Date());

    try {
      await this.friendService.addFriend(newFriend1);
      await this.friendService.addFriend(newFriend2);
      await this.friendService.updateFriendRequest(friendRequest);
    } catch (e) {
      console.log(e);
    }
  }

  async rejectRequest(friendRequest: FriendRequest) {
    friendRequest.active = false;
    friendRequest.response = false;
    try {
      await this.friendService.updateFriendRequest(friendRequest);
    } catch (e) {
      console.log(e);
    }
  }
}

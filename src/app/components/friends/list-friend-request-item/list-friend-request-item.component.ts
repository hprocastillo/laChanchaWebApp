import {Component, Input} from '@angular/core';
import {Friend, FriendRequest} from "../../../interfaces/friend";
import {FriendService} from "../../../services/friend.service";
import {Timestamp} from "firebase/firestore";

@Component({
  selector: 'app-list-friend-request-item',
  templateUrl: './list-friend-request-item.component.html'
})
export class ListFriendRequestItemComponent {
  @Input() friendRequest = {} as FriendRequest;

  constructor(private friendService: FriendService) {
  }

  async agreeRequest(friendRequest: FriendRequest) {
    friendRequest.active = false;
    friendRequest.response = true;

    let newFriend1 = {} as Friend;
    newFriend1.uid = friendRequest.guid;
    newFriend1.uDisplayName = friendRequest.gDisplayName;
    newFriend1.uEmail = friendRequest.gEmail;
    newFriend1.uPhotoURL = friendRequest.gPhotoURL;

    newFriend1.guid = friendRequest.uid;
    newFriend1.gDisplayName = friendRequest.uDisplayName;
    newFriend1.gEmail = friendRequest.uEmail;
    newFriend1.gPhotoURL = friendRequest.uPhotoURL;
    newFriend1.createdAt = Timestamp.fromDate(new Date());

    let newFriend2 = {} as Friend;
    newFriend2.uid = friendRequest.uid;
    newFriend2.uDisplayName = friendRequest.uDisplayName;
    newFriend2.uEmail = friendRequest.uEmail;
    newFriend2.uPhotoURL = friendRequest.uPhotoURL;

    newFriend2.guid = friendRequest.guid;
    newFriend2.gDisplayName = friendRequest.gDisplayName;
    newFriend2.gEmail = friendRequest.gEmail;
    newFriend2.gPhotoURL = friendRequest.gPhotoURL;
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

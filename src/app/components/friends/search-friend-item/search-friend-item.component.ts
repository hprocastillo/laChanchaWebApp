import {Component, Input} from '@angular/core';
import {Users} from "../../../interfaces/users";
import {User} from "@angular/fire/auth";
import {FriendService} from "../../../services/friend.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {FriendRequest} from "../../../interfaces/friend";
import {Timestamp} from "firebase/firestore";

@Component({
  selector: 'app-search-friend-item',
  templateUrl: './search-friend-item.component.html'
})
export class SearchFriendItemComponent {
  @Input() users = {} as Users;
  @Input() user = {} as User;

  constructor(
    private friendService: FriendService,
    private modalService: NgbModal) {
  }

  openModalRequest(modalRequest: any) {
    this.modalService.open(modalRequest, {backdrop: 'static', centered: true});
  }

  async sendingRequest(user: User, users: Users) {
    let friendRequest = {} as FriendRequest;

    friendRequest.active = true;
    friendRequest.response = false;
    friendRequest.userId = user.uid;
    if (typeof user.displayName === "string") {
      friendRequest.userDisplayName = user.displayName;
    }
    if (typeof user.email === "string") {
      friendRequest.userEmail = user.email;
    }
    if (typeof user.photoURL === "string") {
      friendRequest.userPhotoUrl = user.photoURL;
    }
    friendRequest.guestId = users.uid;
    friendRequest.guestDisplayName = users.displayName;
    friendRequest.guestEmail = users.email;
    friendRequest.guestPhotoUrl = users.photoURL;
    friendRequest.createdAt = Timestamp.fromDate(new Date());

    try {
      await this.friendService.addFriendRequest(friendRequest);
      this.modalService.dismissAll();
    } catch (e) {
      console.log(e);
    }
  }
}

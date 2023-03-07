import {Component, Input} from '@angular/core';
import {Users} from "../../../interfaces/users";
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

  constructor(private friendService: FriendService, private modalService: NgbModal) {
  }

  openModalRequest(modalRequest: any) {
    this.modalService.open(modalRequest, {backdrop: 'static', centered: true});
  }

  async sendingRequest(users: Users) {
    let friendRequest = {} as FriendRequest;

    friendRequest.active = true;
    friendRequest.response = false;

    friendRequest.uid = users.uid;
    friendRequest.uDisplayName = users.displayName;
    friendRequest.uEmail = users.email;
    friendRequest.uPhotoURL = users.photoURL;

    friendRequest.guid = users.uid;
    friendRequest.gDisplayName = users.displayName;
    friendRequest.gEmail = users.email;
    friendRequest.gPhotoURL = users.photoURL;

    friendRequest.createdAt = Timestamp.fromDate(new Date());

    try {
      await this.friendService.addFriendRequest(friendRequest);
      this.modalService.dismissAll();
    } catch (e) {
      console.log(e);
    }
  }
}

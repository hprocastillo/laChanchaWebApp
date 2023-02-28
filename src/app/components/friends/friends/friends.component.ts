import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {User} from "@angular/fire/auth";
import {Friend, FriendRequest} from "../../../interfaces/friend";
import {FriendService} from "../../../services/friend.service";
import {Subject, takeUntil} from "rxjs";

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html'
})
export class FriendsComponent implements OnInit, OnDestroy {
  @Input() user = {} as User;
  @Output() btnListFriendRequests = new EventEmitter<boolean>();
  @Output() selectedFriend = new EventEmitter<Friend>();

  listFriendsRequest: FriendRequest[] = [];

  constructor(private friendService: FriendService) {
  }

  private unsubscribe$ = new Subject<boolean>();

  ngOnInit(): void {
    this.friendService.getActiveFriendRequestByGuest(this.user.uid)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(res => {
        this.listFriendsRequest = res;
      });
  }

  getSelectedFriend(friend: Friend) {
    this.selectedFriend.emit(friend);
  }

  goListFriendRequests() {
    this.btnListFriendRequests.emit(true);
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next(true);
    this.unsubscribe$.complete();
  }
}

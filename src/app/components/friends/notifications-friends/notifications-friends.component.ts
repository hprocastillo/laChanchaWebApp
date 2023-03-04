import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {User} from "@angular/fire/auth";
import {FriendRequest} from "../../../interfaces/friend";
import {FriendService} from "../../../services/friend.service";
import {Subject, takeUntil} from "rxjs";

@Component({
  selector: 'app-notifications-friends',
  templateUrl: './notifications-friends.component.html'
})
export class NotificationsFriendsComponent implements OnInit, OnDestroy {
  @Input() user = {} as User;
  @Output() btnFriendRequest = new EventEmitter<boolean>();
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

  goFriendRequest() {
    this.btnFriendRequest.emit(true);
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next(true);
    this.unsubscribe$.complete();
  }
}

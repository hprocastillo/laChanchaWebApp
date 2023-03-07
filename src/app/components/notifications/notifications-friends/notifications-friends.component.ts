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
  @Output() btnListFriendsRequest = new EventEmitter<boolean>();

  listFriendsRequest: FriendRequest[] = [];

  private unsubscribe$ = new Subject<boolean>();

  constructor(private friendService: FriendService) {
  }

  ngOnInit(): void {
    if (this.user) {
      this.friendService.getActiveFriendRequest(this.user)
        .pipe(takeUntil(this.unsubscribe$))
        .subscribe(res => {
          this.listFriendsRequest = res;
        });
    }
  }

  goListFriendsRequest() {
    this.btnListFriendsRequest.emit(true);
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next(true);
    this.unsubscribe$.complete();
  }
}

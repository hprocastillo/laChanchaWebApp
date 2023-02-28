import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {User} from "@angular/fire/auth";
import {FriendRequest} from "../../../interfaces/friend";
import {Subject, takeUntil} from "rxjs";
import {FriendService} from "../../../services/friend.service";

@Component({
  selector: 'app-button-friends-badge',
  templateUrl: './button-friends-badge.component.html'
})
export class ButtonFriendsBadgeComponent implements OnInit, OnDestroy {
  @Input() user = {} as User;
  listRequests: FriendRequest[] = [];

  constructor(private friendService: FriendService) {
  }

  private unsubscribe$ = new Subject<boolean>();

  ngOnInit(): void {
    this.friendService.getActiveFriendRequestByGuest(this.user.uid)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(res => {
        this.listRequests = res;
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next(true);
    this.unsubscribe$.complete();
  }
}

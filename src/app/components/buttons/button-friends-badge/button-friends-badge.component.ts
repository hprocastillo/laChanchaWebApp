import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {FriendRequest} from "../../../interfaces/friend";
import {Subject, takeUntil} from "rxjs";
import {FriendService} from "../../../services/friend.service";
import {User} from "@angular/fire/auth";

@Component({
  selector: 'app-button-friends-badge',
  templateUrl: './button-friends-badge.component.html'
})

export class ButtonFriendsBadgeComponent implements OnInit, OnDestroy {
  @Input() user = {} as User;
  listRequests: FriendRequest[] = [];
  private unsubscribe$ = new Subject<boolean>();

  constructor(private friendService: FriendService) {
  }

  ngOnInit(): void {
    if (this.user) {
      this.friendService.getActiveFriendRequest(this.user)
        .pipe(takeUntil(this.unsubscribe$))
        .subscribe(res => {
          this.listRequests = res;
        });
    }
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next(true);
    this.unsubscribe$.complete();
  }
}

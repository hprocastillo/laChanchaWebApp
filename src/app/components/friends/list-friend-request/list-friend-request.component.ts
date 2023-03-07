import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {User} from "@angular/fire/auth";
import {Subject, takeUntil} from "rxjs";
import {FriendService} from "../../../services/friend.service";
import {FriendRequest} from "../../../interfaces/friend";

@Component({
  selector: 'app-list-friend-request',
  templateUrl: './list-friend-request.component.html'
})
export class ListFriendRequestComponent implements OnInit, OnDestroy {
  @Input() user = {} as User;
  listFriendsRequests: FriendRequest[] = [];
  private unsubscribe$ = new Subject<boolean>();

  constructor(private friendService: FriendService) {
  }

  ngOnInit() {
    if (this.user) {
      this.friendService.getActiveFriendRequest(this.user)
        .pipe(takeUntil(this.unsubscribe$))
        .subscribe(res => {
          this.listFriendsRequests = res;
        });
    }
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next(true);
    this.unsubscribe$.complete();
  }
}

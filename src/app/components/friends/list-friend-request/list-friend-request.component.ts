import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {User} from "@angular/fire/auth";
import {Subject, takeUntil} from "rxjs";
import {FriendService} from "../../../services/friend.service";
import {FriendRequest} from "../../../interfaces/friend";

@Component({
  selector: 'app-list-friend-request',
  templateUrl: './list-friend-request.component.html'
})
export class ListFriendRequestComponent implements OnInit, OnDestroy {
  //INPUTS AND OUTPUTS
  @Input() user = {} as User;
  @Output() btnBack = new EventEmitter<boolean>();

  //VARIABLES
  listFriendsRequests: FriendRequest[] = [];

  //UNSUBSCRIBE METHOD
  private unsubscribe$ = new Subject<boolean>();

  constructor(private friendService: FriendService) {
  }

  ngOnInit() {
    this.friendService.getActiveFriendRequestByGuest(this.user.uid)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(res => {
        this.listFriendsRequests = res;
      });
  }

  goBack() {
    this.btnBack.emit(true);
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next(true);
    this.unsubscribe$.complete();
  }
}

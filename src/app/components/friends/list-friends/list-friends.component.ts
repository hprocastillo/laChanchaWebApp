import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {User} from "@angular/fire/auth";
import {FriendService} from "../../../services/friend.service";
import {Friend} from "../../../interfaces/friend";
import {Subject, takeUntil} from "rxjs";

@Component({
  selector: 'app-list-friends',
  templateUrl: './list-friends.component.html'
})
export class ListFriendsComponent implements OnInit, OnDestroy {
  @Input() user = {} as User;

  @Output() selectedFriend = new EventEmitter<Friend>();

  listFriends: Friend[] = [];

  private unsubscribe$ = new Subject<boolean>();

  constructor(private friendService: FriendService) {
  }

  ngOnInit(): void {
    if (this.user) {
      this.friendService.getFriends(this.user)
        .pipe(takeUntil(this.unsubscribe$))
        .subscribe(res => {
          this.listFriends = res;
        });
    }
  }

  getSelectedFriend(friend: Friend) {
    this.selectedFriend.emit(friend);
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next(true);
    this.unsubscribe$.complete();
  }
}

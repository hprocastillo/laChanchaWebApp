import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {User} from "@angular/fire/auth";
import {Users} from "../../../interfaces/users";
import {UserService} from "../../../services/user.service";
import {Subject, takeUntil} from "rxjs";
import {Friend} from "../../../interfaces/friend";
import {FriendService} from "../../../services/friend.service";

@Component({
  selector: 'app-search-friend',
  templateUrl: './search-friend.component.html'
})
export class SearchFriendComponent implements OnInit, OnDestroy {
  @Input() user = {} as User;

  listUsers: Users[] = [];
  listFriends: Friend[] = [];

  searchText: string;

  constructor(private userService: UserService, private friendService: FriendService) {
    this.searchText = '';
  }

  private unsubscribe$ = new Subject<boolean>();

  ngOnInit(): void {
    //get list friends
    this.friendService.getFriendByUser(this.user.uid)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(res => {
        this.listFriends = res;
      });

    //get list users
    this.userService.getAllUsers()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(res => {
        this.listUsers = res.filter(item => {
          return item.uid !== this.user.uid;
        });
        for (let i: number = 0; i < this.listFriends.length; i++) {
          this.listUsers = this.listUsers.filter(item => {
            return item.uid !== this.listFriends[i].guestId;
          });
        }
      });
  }


  ngOnDestroy(): void {
    this.unsubscribe$.next(true);
    this.unsubscribe$.complete();
  }
}

import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {User} from "@angular/fire/auth";
import {Users} from "../../../interfaces/users";
import {UserService} from "../../../services/user.service";
import {Subject, takeUntil} from "rxjs";

@Component({
  selector: 'app-search-friend',
  templateUrl: './search-friend.component.html'
})
export class SearchFriendComponent implements OnInit, OnDestroy {
  @Input() user = {} as User;

  listUsers: Users[] = [];
  searchText: string;

  constructor(private userService: UserService) {
    this.searchText = '';
  }

  private unsubscribe$ = new Subject<boolean>();

  ngOnInit(): void {
    this.userService.getAllUsers()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(res => {
        this.listUsers = res.filter(item => {
          return item.uid !== this.user.uid;
        });
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next(true);
    this.unsubscribe$.complete();
  }
}

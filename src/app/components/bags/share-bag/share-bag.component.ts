import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Friend} from "../../../interfaces/friend";
import {FriendService} from "../../../services/friend.service";
import {Subject, takeUntil} from "rxjs";
import {User} from "@angular/fire/auth";
import {Bag} from "../../../interfaces/bag";

@Component({
  selector: 'app-share-bag',
  templateUrl: './share-bag.component.html'
})
export class ShareBagComponent implements OnInit, OnDestroy {
  @Input() user = {} as User;
  @Input() bag = {} as Bag;

  listFriends: Friend[] = [];
  searchText: string;

  private unsubscribe$ = new Subject<boolean>();

  constructor(private friendService: FriendService) {
    this.searchText = '';
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

  ngOnDestroy(): void {
    this.unsubscribe$.next(true);
    this.unsubscribe$.complete();
  }
}

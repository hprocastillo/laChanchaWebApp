import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {User} from "@angular/fire/auth";
import {Bag, ShareBagRequest} from "../../../interfaces/bag";
import {FriendRequest} from "../../../interfaces/friend";
import {FriendService} from "../../../services/friend.service";
import {Subject, takeUntil} from "rxjs";
import {BagService} from "../../../services/bag.service";

@Component({
  selector: 'app-share-bag-request',
  templateUrl: './share-bag-request.component.html'
})
export class ShareBagRequestComponent implements OnInit, OnDestroy {
  @Input() user = {} as User;
  listShareBagRequest: ShareBagRequest[] = [];

  constructor(private bagService: BagService) {
  }

  private unsubscribe$ = new Subject<boolean>();

  ngOnInit() {
    this.bagService.getActiveShareBagRequestByGuest(this.user.uid)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(res => {
        this.listShareBagRequest = res;
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next(true);
    this.unsubscribe$.complete();
  }
}

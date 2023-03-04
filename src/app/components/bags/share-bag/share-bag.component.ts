import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Friend} from "../../../interfaces/friend";
import {FriendService} from "../../../services/friend.service";
import {Subject, takeUntil} from "rxjs";
import {User} from "@angular/fire/auth";
import {Bag, ShareBagRequest} from "../../../interfaces/bag";
import {Timestamp} from "firebase/firestore";
import {BagService} from "../../../services/bag.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-share-bag',
  templateUrl: './share-bag.component.html'
})
export class ShareBagComponent implements OnInit, OnDestroy {
  @Input() user = {} as User;
  @Input() bag = {} as Bag;

  listFriends: Friend[] = [];
  searchText: string;

  constructor(
    private friendService: FriendService,
    private bagService: BagService,
    private modalService: NgbModal) {
    this.searchText = '';
  }

  private unsubscribe$ = new Subject<boolean>();

  ngOnInit(): void {
    this.friendService.getFriendByUser(this.user.uid)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(res => {
        this.listFriends = res;
      });
  }
  openModalRequest(modalRequest: any) {
    this.modalService.open(modalRequest, {backdrop: 'static', centered: true});
  }

  async shareBag(bag: Bag, friend: Friend, user: User) {
    let shareBagRequest = {} as ShareBagRequest;
    shareBagRequest.active = true;
    shareBagRequest.response = false;
    shareBagRequest.userId = user.uid;
    if (typeof user.displayName === "string") {
      shareBagRequest.userDisplayName = user.displayName;
    }
    if (typeof user.email === "string") {
      shareBagRequest.userEmail = user.email;
    }
    if (typeof user.photoURL === "string") {
      shareBagRequest.userPhotoUrl = user.photoURL;
    }
    shareBagRequest.guestId = friend.guestId;
    shareBagRequest.guestDisplayName = friend.guestDisplayName;
    shareBagRequest.guestEmail = friend.guestEmail;
    shareBagRequest.guestPhotoUrl = friend.guestPhotoUrl;
    shareBagRequest.createdAt = Timestamp.fromDate(new Date());

    try {
      await this.bagService.addShareBagRequest(shareBagRequest);
      this.modalService.dismissAll();
    } catch (e) {
      console.log(e);
    }
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next(true);
    this.unsubscribe$.complete();
  }
}

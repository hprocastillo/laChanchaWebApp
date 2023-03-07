import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Friend} from "../../../interfaces/friend";
import {Subject, takeUntil} from "rxjs";
import {Bag, BagRequest} from "../../../interfaces/bag";
import {BagService} from "../../../services/bag.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {Timestamp} from "firebase/firestore";
import {User} from "@angular/fire/auth";

@Component({
  selector: 'app-share-bag-item',
  templateUrl: './share-bag-item.component.html'
})

export class ShareBagItemComponent implements OnInit, OnDestroy {
  @Input() user = {} as User;
  @Input() friend = {} as Friend;
  @Input() bag = {} as Bag;

  shareRequest: number = 0;
  msgError: string = "";
  private unsubscribe$ = new Subject<boolean>();

  constructor(private bagService: BagService, private modalService: NgbModal) {
  }

  ngOnInit(): void {
    if (this.user) {
      this.bagService.getActiveBagRequest(this.user)
        .pipe(takeUntil(this.unsubscribe$))
        .subscribe(res => {
          this.shareRequest = res.length;
        });
    }
  }

  openModalRequest(modalRequest: any) {
    this.msgError = "";
    this.modalService.open(modalRequest, {backdrop: 'static', centered: true});
  }

  async shareBag(bag: Bag, friend: Friend) {
    let bagRequest = {} as BagRequest;

    bagRequest.active = true;
    bagRequest.response = false;

    bagRequest.bagId = bag.id;
    bagRequest.bagDescription = bag.description;

    bagRequest.uid = friend.uid;
    bagRequest.uDisplayName = friend.uDisplayName;
    bagRequest.uEmail = friend.uEmail;
    bagRequest.uPhotoURL = friend.uPhotoURL;

    bagRequest.guid = friend.guid;
    bagRequest.gDisplayName = friend.gDisplayName;
    bagRequest.gEmail = friend.gEmail;
    bagRequest.gPhotoURL = friend.gPhotoURL;

    bagRequest.createdAt = Timestamp.fromDate(new Date());

    if (this.shareRequest === 0) {
      try {
        await this.bagService.addBagRequest(bagRequest);
        this.modalService.dismissAll();
      } catch (e) {
        console.log(e);
      }
    } else {
      this.msgError = "Ya existe una solicitud pendiente de aprobación";
    }
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next(true);
    this.unsubscribe$.complete();
  }
}

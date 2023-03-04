import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {User} from "@angular/fire/auth";
import {Subject, takeUntil} from "rxjs";
import {ShareBagRequest} from "../../../interfaces/bag";
import {BagService} from "../../../services/bag.service";

@Component({
  selector: 'app-notifications-bags',
  templateUrl: './notifications-bags.component.html'
})
export class NotificationsBagsComponent implements OnInit, OnDestroy {
  @Input() user = {} as User;
  @Output() btnShareBagRequest = new EventEmitter<boolean>();
  listShareBagsRequest: ShareBagRequest[] = [];

  constructor(private BagsService: BagService) {
  }

  private unsubscribe$ = new Subject<boolean>();

  ngOnInit(): void {
    this.BagsService.getActiveShareBagRequestByGuest(this.user.uid)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(res => {
        this.listShareBagsRequest = res;
      });
  }

  goShareBagRequest() {
    this.btnShareBagRequest.emit(true);
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next(true);
    this.unsubscribe$.complete();
  }
}

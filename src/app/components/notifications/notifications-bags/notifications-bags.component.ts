import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {Subject, takeUntil} from "rxjs";
import {BagService} from "../../../services/bag.service";
import {BagRequest} from "../../../interfaces/bag";
import {User} from "@angular/fire/auth";

@Component({
  selector: 'app-notifications-bags',
  templateUrl: './notifications-bags.component.html'
})
export class NotificationsBagsComponent implements OnInit, OnDestroy {
  @Input() user = {} as User;
  @Output() btnListBagsRequest = new EventEmitter<boolean>();

  listBagsRequest: BagRequest[] = [];
  private unsubscribe$ = new Subject<boolean>();

  constructor(private BagsService: BagService) {
  }

  ngOnInit(): void {
    if (this.user) {
      this.BagsService.getActiveBagRequest(this.user)
        .pipe(takeUntil(this.unsubscribe$))
        .subscribe(res => {
          this.listBagsRequest = res;
        });
    }
  }

  goListBagsRequest() {
    this.btnListBagsRequest.emit(true);
  }
  ngOnDestroy(): void {
    this.unsubscribe$.next(true);
    this.unsubscribe$.complete();
  }
}

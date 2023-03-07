import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {BagRequest} from "../../../interfaces/bag";
import {Subject, takeUntil} from "rxjs";
import {BagService} from "../../../services/bag.service";
import {User} from "@angular/fire/auth";

@Component({
  selector: 'app-list-bags-request',
  templateUrl: './list-bags-request.component.html'
})

export class ListBagsRequestComponent implements OnInit, OnDestroy {
  @Input() user = {} as User;
  listBagsRequest: BagRequest[] = [];
  private unsubscribe$ = new Subject<boolean>();

  constructor(private bagService: BagService) {
  }

  ngOnInit() {
    if (this.user) {
      this.bagService.getActiveBagRequest(this.user)
        .pipe(takeUntil(this.unsubscribe$))
        .subscribe(res => {
          this.listBagsRequest = res;
        });
    }
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next(true);
    this.unsubscribe$.complete();
  }
}

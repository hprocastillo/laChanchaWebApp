import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {BagService} from "../../../services/bag.service";
import {Bag} from "../../../interfaces/bag";
import {Subject, takeUntil} from "rxjs";
import {User} from "@angular/fire/auth";

@Component({
  selector: 'app-list-bags',
  templateUrl: './list-bags.component.html'
})
export class ListBagsComponent implements OnInit, OnDestroy {
  @Input() user = {} as User;
  @Output() selectedBag = new EventEmitter<Bag>();
  listBags: Bag[] = [];
  private unsubscribe$ = new Subject<boolean>();

  constructor(private bagService: BagService) {
  }

  ngOnInit(): void {
    if (this.user) {
      this.bagService.getBagsByUser(this.user)
        .pipe(takeUntil(this.unsubscribe$))
        .subscribe(res => {
          this.listBags = res;
        });
    }
  }

  getSelectedBag(bag: Bag) {
    this.selectedBag.emit(bag);
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next(true);
    this.unsubscribe$.complete();
  }
}

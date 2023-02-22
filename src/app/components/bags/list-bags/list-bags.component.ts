import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {BagService} from "../../../services/bag.service";
import {Bag} from "../../../interfaces/bag";
import {Subject, takeUntil} from "rxjs";

@Component({
  selector: 'app-list-bags',
  templateUrl: './list-bags.component.html'
})
export class ListBagsComponent implements OnInit, OnDestroy {
  //INPUTS AND OUTPUTS
  @Output() selectedBag = new EventEmitter<Bag>();

  //VARIABLES
  listBags: Bag[] = [];

  //UNSUBSCRIBE METHOD
  private unsubscribe$ = new Subject<boolean>();

  constructor(private bagService: BagService) {
  }

  ngOnInit() {
    this.bagService.getBags()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(res => {
        this.listBags = res;
      });
  }

  getSelectedBag(bag: Bag) {
    this.selectedBag.emit(bag);
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next(true);
    this.unsubscribe$.complete();
  }
}

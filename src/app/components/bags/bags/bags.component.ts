import {Component, EventEmitter, Input, Output} from '@angular/core';
import {User} from "@angular/fire/auth";
import {Bag} from "../../../interfaces/bag";

@Component({
  selector: 'app-bags',
  templateUrl: './bags.component.html'
})
export class BagsComponent {
  @Input() user = {} as User;
  @Output() selectedBag = new EventEmitter<Bag>();
  @Output() btnShareBagRequest = new EventEmitter<boolean>();

  goShareBagRequest() {
    this.btnShareBagRequest.emit(true);
  }

  getSelectedBag(bag: Bag) {
    this.selectedBag.emit(bag);
  }
}

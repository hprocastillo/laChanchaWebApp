import {Component, Input} from '@angular/core';
import {Bag} from "../../../interfaces/bag";


@Component({
  selector: 'app-list-bags-item',
  templateUrl: './list-bags-item.component.html'
})
export class ListBagsItemComponent {
  @Input() bag = {} as Bag;
}

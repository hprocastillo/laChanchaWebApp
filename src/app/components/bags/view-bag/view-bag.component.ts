import {Component, Input} from '@angular/core';
import {User} from "@angular/fire/auth";
import {Bag} from "../../../interfaces/bag";
import {BagService} from "../../../services/bag.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {Timestamp} from "firebase/firestore";

@Component({
  selector: 'app-view-bag',
  templateUrl: './view-bag.component.html'
})
export class ViewBagComponent {
  //INPUTS AND OUTPUTS
  @Input() user = {} as User;
  @Input() bag = {} as Bag;
  //VARIABLES
  editMode: boolean = false;

  constructor(private modalService: NgbModal, private bagService: BagService) {
  }

  getEdit(value: boolean) {
    this.editMode = value;
  }

  openModalEdit(modalEdit: any) {
    this.modalService.open(modalEdit, {centered: true, backdrop: "static"});
  }

  async onSave(bag: Bag) {
    try {
      bag.updatedAt = Timestamp.fromDate(new Date());
      await this.bagService.updateBag(bag);
      this.getEdit(false);
      this.modalService.dismissAll();
    } catch (e) {
      console.log(e);
    }
  }
}

import {Component, Input} from '@angular/core';
import {User} from "@angular/fire/auth";
import {Bag} from "../../../interfaces/bag";
import {BagService} from "../../../services/bag.service";
import {NgbModal, NgbModalConfig} from "@ng-bootstrap/ng-bootstrap";

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

  onSave(bag: Bag) {
    if (this.editMode) {
      bag.updatedAt = new Date();
      this.bagService.updateBag(bag)
        .then(res => {
          console.log(res);
          this.getEdit(false);
          this.modalService.dismissAll();
        })
        .catch(error => console.log(error));
    }
  }

}

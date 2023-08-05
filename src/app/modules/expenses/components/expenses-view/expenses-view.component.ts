import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Operation} from "../../../../shared/interfaces/operation";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {OperationsService} from "../../../../shared/services/operations.service";

@Component({
  selector: 'app-expenses-view',
  templateUrl: './expenses-view.component.html',
  styleUrls: ['./expenses-view.component.scss']
})
export class ExpensesViewComponent {
  @Input() expense = {} as Operation;
  @Output() outTemplate = new EventEmitter<string>();
  imageToZoom: string = '';
  constructor(
    private modalService: NgbModal,
    private operationService: OperationsService) {
  }

  openModalDelete(modalDelete: any) {
    this.modalService.open(modalDelete, {centered: true, backdrop: "static"});
  }
  openModalPhoto(modalPhoto: any, photo: string) {
    this.modalService.open(modalPhoto, {centered: true, backdrop: "static"});
    this.imageToZoom = photo;
  }

  async deleteExpense(expense: Operation) {
    try {
      await this.operationService.deleteOperation(expense);
      this.outTemplate.emit('EXPENSES-LIST');
      this.modalService.dismissAll();

    } catch (e) {
      console.log(e);
    }
  }

  getTemplate(template: string) {
    this.outTemplate.emit(template);
  }

}

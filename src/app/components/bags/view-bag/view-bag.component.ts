import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {User} from "@angular/fire/auth";
import {Bag} from "../../../interfaces/bag";
import {BagService} from "../../../services/bag.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {Timestamp} from "firebase/firestore";
import {ExpenseService} from "../../../services/expense.service";
import {Subject, takeUntil} from "rxjs";
import {Expense} from "../../../interfaces/expense";

@Component({
  selector: 'app-view-bag',
  templateUrl: './view-bag.component.html'
})
export class ViewBagComponent implements OnInit, OnDestroy {
  @Input() user = {} as User;
  @Input() bag = {} as Bag;
  @Output() btnBack = new EventEmitter<boolean>();
  @Output() btnShareBag = new EventEmitter<boolean>();

  editMode: boolean = false;
  msgError: string | undefined;
  listExpenseByBag: Expense[] = [];

  constructor(
    private modalService: NgbModal,
    private bagService: BagService,
    private expenseService: ExpenseService) {
  }

  private unsubscribe$ = new Subject<boolean>();

  ngOnInit(): void {
    if (this.user.uid && this.bag.id) {
      this.expenseService.getExpensesByBag(this.user.uid, this.bag.id)
        .pipe(takeUntil(this.unsubscribe$))
        .subscribe(res => {
          this.listExpenseByBag = res;
        });
    }
  }

  getEdit(value: boolean) {
    this.editMode = value;
  }

  openModalEdit(modalEdit: any) {
    this.modalService.open(modalEdit, {centered: true, backdrop: "static"});
  }

  goShareBag() {
    this.btnShareBag.emit(true);
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

  openModalDelete(modalDelete: any) {
    this.msgError = "";
    this.modalService.open(modalDelete, {centered: true, backdrop: "static"});
  }

  async onDelete(bag: Bag) {
    if (this.listExpenseByBag.length > 0) {
      this.msgError = "No se puede borrar la chancha porque contiene gastos.";
    } else {
      try {
        await this.bagService.deleteBag(bag);
        this.modalService.dismissAll();
        this.btnBack.emit(true);
      } catch (e) {
        console.log(e);
      }
    }
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next(true);
    this.unsubscribe$.complete();
  }
}

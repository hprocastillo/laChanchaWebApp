import {Component, EventEmitter, Input, Output} from '@angular/core';
import {User} from "@angular/fire/auth";
import {Bag} from "../../../interfaces/bag";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ExpenseService} from "../../../services/expense.service";
import {Expense} from "../../../interfaces/expense";
import {getDownloadURL, ref, Storage, uploadBytes} from "@angular/fire/storage";
import {BagService} from "../../../services/bag.service";
import {Timestamp} from "firebase/firestore";

@Component({
  selector: 'app-new-expense',
  templateUrl: './new-expense.component.html',
  styleUrls: ['./new-expense.component..scss']
})
export class NewExpenseComponent {
  @Input() user = {} as User;
  @Input() bag = {} as Bag;
  @Output() btnCancel = new EventEmitter<boolean>();

  loadingEffect: boolean = false;
  newExpenseForm: FormGroup;
  imagePreview: string = "";
  file: string | any;

  constructor(
    private storage: Storage,
    private fb: FormBuilder,
    private expenseService: ExpenseService,
    private bagService: BagService) {
    this.newExpenseForm = this.fb.group({
      description: ['', [Validators.required]],
      amount: ['', [Validators.required]],
    });
  }

  goCancel() {
    this.btnCancel.emit(true);
  }

  showPreview(event: any) {
    this.file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string;
    }
    reader.readAsDataURL(this.file);
  }

  deletePreview() {
    this.imagePreview = '';
  }

  async onSubmit(bag: Bag, user: User) {
    this.loadingEffect = true;

    let newExpense: Expense;
    let newBag: Bag = bag;

    if (this.newExpenseForm.valid) {
      newExpense = this.newExpenseForm.value;

      newExpense.bagId = bag.id;
      newExpense.bagDescription = bag.description;

      newExpense.uid = user.uid;
      newExpense.uDisplayName = user.displayName;
      newExpense.uEmail = user.email;
      newExpense.uPhotoURL = user.photoURL;

      newExpense.createdAt = Timestamp.fromDate(new Date());

      if (this.file) {
        const storageRef = ref(this.storage, `receipts/${this.file.name}`);
        uploadBytes(storageRef, this.file)
          .then(async res => {
            console.log(res);
            newExpense.receiptURL = await getDownloadURL(storageRef);
            await this.expenseService.addExpense(newExpense);
          })
          .catch(error => console.log(error));

      } else {
        await this.expenseService.addExpense(newExpense);
      }

      newBag.collectedAmount = newBag.collectedAmount + newExpense.amount;
      await this.bagService.updateBag(newBag);
      this.newExpenseForm.reset();
      this.goCancel();
    }
  }
}

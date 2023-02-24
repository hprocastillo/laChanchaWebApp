import {Component, EventEmitter, Input, Output} from '@angular/core';
import {User} from "@angular/fire/auth";
import {Bag} from "../../../interfaces/bag";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ExpenseService} from "../../../services/expense.service";
import {Expense} from "../../../interfaces/expense";
import {getDownloadURL, ref, Storage, uploadBytes} from "@angular/fire/storage";
import {BagService} from "../../../services/bag.service";

@Component({
  selector: 'app-new-expense',
  templateUrl: './new-expense.component.html',
  styleUrls: ['./new-expense.component..scss']
})
export class NewExpenseComponent {
  //INPUTS AND OUTPUTS
  @Input() user = {} as User;
  @Input() bag = {} as Bag;
  @Output() btnBackToViewBag = new EventEmitter<boolean>();

  //VARIABLES
  loadingEffect: boolean = false;
  newExpenseForm: FormGroup;
  imagePreview: string | undefined;
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

  goBack() {
    this.btnBackToViewBag.emit(true);
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

  onSubmit() {
    if (this.newExpenseForm.valid) {
      this.loadingEffect = true;
      let newExpense: Expense;
      let newBag: Bag = this.bag;
      const storageRef = ref(this.storage, `receipts/${this.file.name}`);
      newExpense = this.newExpenseForm.value;

      uploadBytes(storageRef, this.file)
        .then(async res => {
          console.log(res);
          newExpense.receiptUrl = await getDownloadURL(storageRef);
          newExpense.bagId = this.bag.id;
          newExpense.userId = this.user.uid;
          newExpense.userDisplayName = this.user.displayName;
          newExpense.userEmail = this.user.email;
          newExpense.userPhotoUrl = this.user.photoURL;
          newExpense.createdAt = new Date();
          await this.expenseService.addExpense(newExpense);
          // update collected amount at bag
          newBag.collectedAmount = newBag.collectedAmount + newExpense.amount;
          await this.bagService.updateBag(newBag);
          // reset form and go out
          this.newExpenseForm.reset();
          this.goBack();
        })
        .catch(error => console.log(error));
    }
  }
}

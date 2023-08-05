import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {User} from "@angular/fire/auth";
import {Operation} from "../../../../shared/interfaces/operation";
import {Timestamp} from "firebase/firestore";
import {OperationsService} from "../../../../shared/services/operations.service";
import {NgxImageCompressService} from "ngx-image-compress";
import {getDownloadURL, ref, Storage, uploadBytes} from "@angular/fire/storage";

@Component({
  selector: 'app-expenses-new',
  templateUrl: './expenses-new.component.html',
  styleUrls: ['./expenses-new.component.scss']
})
export class ExpensesNewComponent {
  @Input() firebaseUser = {} as User;
  @Output() outTemplate = new EventEmitter<string>();
  loadingEffect: boolean = false;
  fixedMonthly: boolean = false;

  newExpenseForm: FormGroup;
  receipt_file: string | any;
  receipt_file_compressed: string | any;
  receipt_preview: string = '';

  constructor(
    private imageCompress: NgxImageCompressService,
    private storage: Storage,
    private fb: FormBuilder,
    private operationService: OperationsService) {
    this.newExpenseForm = this.fb.group({
      description: ['', [Validators.required]],
      amount: ['', [Validators.required]],
    });
  }

  getTemplate(template: string) {
    this.outTemplate.emit(template);
  }

  getFixedMonthly($event: any) {
    this.fixedMonthly = $event.checked;
  }

  take_photo($event: any) {
    this.receipt_file = $event.target.files[0];
    const reader: FileReader = new FileReader();
    reader.onload = () => {
      this.receipt_preview = reader.result as string;
      this.compressFile(this.receipt_preview);
    }
    reader.readAsDataURL(this.receipt_file);
  }

  compressFile(imagePreview: any) {
    let imageResultAfterCompress: string = '';
    let orientation: number = -1;
    if (this.receipt_file['size'] > 51200) {
      this.imageCompress.compressFile(imagePreview, orientation, 50, 50).then(
        result => {
          imageResultAfterCompress = result;
          this.receipt_file_compressed = this.dataURItoBlob(imageResultAfterCompress.split(',')[1]);
        }
      );
    } else {
      this.receipt_file_compressed = this.receipt_file;
    }
  }

  dataURItoBlob(dataURI: any) {
    const byteString: string = window.atob(dataURI);
    const arrayBuffer: ArrayBuffer = new ArrayBuffer(byteString.length);
    const int8Array: Uint8Array = new Uint8Array(arrayBuffer);
    for (let i: number = 0; i < byteString.length; i++) {
      int8Array[i] = byteString.charCodeAt(i);
    }
    return new Blob([int8Array], {type: 'image/jpeg'});
  }

  deletePreview() {
    this.receipt_preview = '';
  }

  async onSubmit(firebaseUser: User) {
    this.loadingEffect = true;
    let newOperation: Operation

    if (this.newExpenseForm.valid) {
      newOperation = this.newExpenseForm.value;

      newOperation.fixed = this.fixedMonthly;

      newOperation.type = "EXPENSE";
      newOperation.receiptURL = "";
      newOperation.standalone = true;
      newOperation.bagId = "";
      newOperation.shared = false;
      newOperation.hostId = firebaseUser.uid;
      newOperation.guestId = "";

      newOperation.createdAt = Timestamp.fromDate(new Date());
      newOperation.createdBy = firebaseUser.uid;
      newOperation.updatedAt = Timestamp.fromDate(new Date());
      newOperation.updatedBy = firebaseUser.uid;

      /** UPLOAD PHOTO **/
      if (this.receipt_file) {
        const storageRef = ref(this.storage, `receipts/${this.receipt_file.name}`);
        uploadBytes(storageRef, this.receipt_file_compressed)
          .then(async () => {
            newOperation.receiptURL = await getDownloadURL(storageRef);
            await this.operationService.addOperation(newOperation);
            this.newExpenseForm.reset();
            this.loadingEffect = false;
            this.outTemplate.emit('EXPENSES-LIST');
          })
          .catch((e) => console.log(e));

      } else {
        newOperation.receiptURL = './assets/images/receipt.png';
        await this.operationService.addOperation(newOperation);
        this.newExpenseForm.reset();
        this.loadingEffect = false;
        this.outTemplate.emit('EXPENSES-LIST');
      }
    }
  }

}

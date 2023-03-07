import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {BagService} from "../../../services/bag.service";
import {Bag} from "../../../interfaces/bag";
import {Timestamp} from "firebase/firestore";
import {User} from "@angular/fire/auth";

@Component({
  selector: 'app-new-bag',
  templateUrl: './new-bag.component.html'
})
export class NewBagComponent {
  @Input() user = {} as User;
  @Output() btnCancel = new EventEmitter<boolean>();

  newBagForm: FormGroup;
  loadingEffect: boolean = false;
  shareCode: string = "";

  constructor(private fb: FormBuilder, private bagService: BagService) {
    this.newBagForm = this.fb.group({
      description: ['', [Validators.required]],
      targetAmount: ['', [Validators.required]],
    });
    const characters = "AbCdEfGhIjKmNlOpQrStUvWxYz0123456789";
    const charactersLength = characters.length;
    for (let i = 0; i < charactersLength; i++) {
      this.shareCode += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
  }

  goCancel() {
    this.btnCancel.emit(true);
  }

  async onSubmit(user: User) {
    this.loadingEffect = true;
    let newBag = {} as Bag;

    if (this.newBagForm.valid) {
      newBag = this.newBagForm.value;
      newBag.collectedAmount = 0;
      newBag.shared = false;
      newBag.shareCode = this.shareCode;

      newBag.uid = user.uid;
      newBag.uDisplayName = user.displayName;
      newBag.uEmail = user.email;
      newBag.uPhotoURL = user.photoURL;

      newBag.createdAt = Timestamp.fromDate(new Date());

      try {
        await this.bagService.addBag(newBag);
        this.newBagForm.reset();
        this.goCancel();

      } catch (e) {
        console.log(e);
      }
    }
  }
}

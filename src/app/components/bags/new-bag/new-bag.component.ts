import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {BagService} from "../../../services/bag.service";
import {Bag} from "../../../interfaces/bag";
import {User} from "@angular/fire/auth";
import {Timestamp} from "firebase/firestore";

@Component({
  selector: 'app-new-bag',
  templateUrl: './new-bag.component.html'
})
export class NewBagComponent {
  @Input() user = {} as User;
  @Output() btnBack = new EventEmitter<boolean>();
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

  goBack() {
    this.btnBack.emit(true);
  }

  async onSubmit() {
    this.loadingEffect = true;
    let newBag: Bag;

    if (this.newBagForm.valid) {
      newBag = this.newBagForm.value;
      newBag.collectedAmount = 0;
      newBag.share = false;
      newBag.shareCode = this.shareCode;
      newBag.userId = this.user.uid;
      if (this.user.displayName != null) {
        newBag.userDisplayName = this.user.displayName;
      }
      if (this.user.email != null) {
        newBag.userEmail = this.user.email;
      }
      if (this.user.photoURL != null) {
        newBag.userPhotoUrl = this.user.photoURL;
      }
      newBag.createdAt = Timestamp.fromDate(new Date());

      try {
        await this.bagService.addBag(newBag);
        this.newBagForm.reset();
        this.goBack();

      } catch (e) {
        console.log(e);
      }
    }
  }
}

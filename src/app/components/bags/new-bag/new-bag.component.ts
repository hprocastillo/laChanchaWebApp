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
//INPUTS AND OUTPUTS
  @Input() user = {} as User;
  @Output() btnBack = new EventEmitter<boolean>();

  //VARIABLES
  newBagForm: FormGroup;
  loadingEffect: boolean = false;

  constructor(private fb: FormBuilder, private bagService: BagService) {
    this.newBagForm = this.fb.group({
      description: ['', [Validators.required]],
      targetAmount: ['', [Validators.required]],
    });
  }

  goBack() {
    this.btnBack.emit(true);
  }

  onSubmit() {
    this.loadingEffect = true;
    let newBag: Bag;
    if (this.newBagForm.valid) {

      newBag = this.newBagForm.value;
      newBag.collectedAmount = 0;
      newBag.userId = this.user.uid;
      newBag.userDisplayName = this.user.displayName;
      newBag.userEmail = this.user.email;
      newBag.userPhotoUrl = this.user.photoURL;
      newBag.createdAt = Timestamp.fromDate(new Date());

      this.bagService.addBag(newBag)
        .then(res => {
          console.log(res);
          this.newBagForm.reset();
          this.goBack();
        })
        .catch(error => console.log(error));
    }
  }


}

import {Component, Input} from '@angular/core';
import {BagDetail, BagRequest} from "../../../interfaces/bag";
import {BagService} from "../../../services/bag.service";
import {Timestamp} from "firebase/firestore";

@Component({
  selector: 'app-list-bags-request-item',
  templateUrl: './list-bags-request-item.component.html'
})
export class ListBagsRequestItemComponent {
  @Input() bagRequest = {} as BagRequest;

  constructor(private bagService: BagService) {
  }

  async agreeRequest(bagRequest: BagRequest) {

    let bagDetail = {} as BagDetail;

    bagDetail.bagId = bagRequest.bagId;
    bagDetail.bagDescription = bagRequest.bagDescription;

    bagDetail.guid = bagRequest.guid;
    bagDetail.gDisplayName = bagRequest.gDisplayName;
    bagDetail.gEmail = bagRequest.gEmail;
    bagDetail.gPhotoURL = bagRequest.gPhotoURL;

    bagDetail.uid = bagRequest.uid;
    bagDetail.uDisplayName = bagRequest.uDisplayName;
    bagDetail.uEmail = bagRequest.uEmail;
    bagDetail.uPhotoURL = bagRequest.uPhotoURL;

    bagDetail.createdAt = Timestamp.fromDate(new Date());

    try {
      await this.bagService.addBagDetail(bagDetail);
    } catch (e) {
      console.log(e);
    }
  }

  async rejectRequest(bagRequest: BagRequest) {
    bagRequest.active = false;
    bagRequest.response = false;
    bagRequest.updatedAt = Timestamp.fromDate(new Date());
    try {
      await this.bagService.updateBagRequest(bagRequest);
    } catch (e) {
      console.log(e);
    }
  }
}

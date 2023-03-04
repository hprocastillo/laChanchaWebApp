import {Component, Input} from '@angular/core';
import {ShareBagRequest} from "../../../interfaces/bag";
import {BagService} from "../../../services/bag.service";

@Component({
  selector: 'app-share-bag-request-item',
  templateUrl: './share-bag-request-item.component.html'
})
export class ShareBagRequestItemComponent {
  @Input() shareBagRequest = {} as ShareBagRequest;

  constructor(private bagService: BagService) {
  }

  async agreeRequest(shareBagRequest: ShareBagRequest) {

    try {

    } catch (e) {
      console.log(e);
    }
  }

  async rejectRequest(shareBagRequest: ShareBagRequest) {
    shareBagRequest.active = false;
    shareBagRequest.response = false;
    try {
      await this.bagService.updateShareBagRequest(shareBagRequest);
    } catch (e) {
      console.log(e);
    }
  }
}

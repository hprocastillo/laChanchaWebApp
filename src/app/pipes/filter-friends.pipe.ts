import {Pipe, PipeTransform} from '@angular/core';
import {Friend} from "../interfaces/friend";

@Pipe({
  name: 'filterFriends'
})
export class FilterFriendsPipe implements PipeTransform {

  transform(items: Array<Friend>, searchText: string) {
    const data = searchText.toLowerCase();
    return items.filter(item =>
      item.guestDisplayName?.toLowerCase() === data ||
      item.guestEmail?.toLowerCase() === data ||
      item.guestDisplayName?.toLowerCase().includes(data) ||
      item.guestEmail?.toLowerCase().includes(data)
    );
  }
}

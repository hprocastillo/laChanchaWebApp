import {Pipe, PipeTransform} from '@angular/core';
import {Friend} from "../interfaces/friend";

@Pipe({
  name: 'filterFriends'
})
export class FilterFriendsPipe implements PipeTransform {

  transform(items: Array<Friend>, searchText: string) {
    const data = searchText.toLowerCase();
    return items.filter(item =>
      item.gDisplayName?.toLowerCase() === data ||
      item.gEmail?.toLowerCase() === data ||
      item.gDisplayName?.toLowerCase().includes(data) ||
      item.gEmail?.toLowerCase().includes(data)
    );
  }
}

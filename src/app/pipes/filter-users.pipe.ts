import {Pipe, PipeTransform} from '@angular/core';
import {Users} from "../interfaces/users";

@Pipe({
  name: 'filterUsers'
})
export class FilterUsersPipe implements PipeTransform {

  transform(items: Array<Users>, searchText: string) {
    const data = searchText.toLowerCase();
    return items.filter(item =>
      item.displayName?.toLowerCase() === data ||
      item.email?.toLowerCase() === data ||
      item.displayName?.toLowerCase().includes(data) ||
      item.email?.toLowerCase().includes(data)
    );
  }
}

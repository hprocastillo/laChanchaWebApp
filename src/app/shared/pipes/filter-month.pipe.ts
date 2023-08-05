import {Pipe, PipeTransform} from '@angular/core';
import {Operation} from "../interfaces/operation";

@Pipe({
  name: 'filterMonth'
})
export class FilterMonthPipe implements PipeTransform {


  transform(items: Array<Operation>, currentMonth: number) {
    const month: number = currentMonth;

    return items.filter(item =>
      item.createdAt.toDate().getMonth() === month
    );
  }

}

import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'localDateTime'
})
export class LocalDateTimePipe implements PipeTransform {

  transform(date: string): unknown {
    let dateOut:moment.Moment = moment(date,"YYYY-MM-DDTHH:mm:ss")
    return dateOut.format("YYYY-MM-DDTHH:mm:ss");
  }

}

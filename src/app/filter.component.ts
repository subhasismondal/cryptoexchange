import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  public transform(value, keys: string, term: string) {

    if (!term) return value;
    return (value || []).filter((bittrexdata) => keys.split(',').some(key => bittrexdata.hasOwnProperty(key) && new RegExp(term, 'gi').test(bittrexdata[key])));

  }
}
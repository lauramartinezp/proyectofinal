
import { Pipe, PipeTransform } from '@angular/core';
import { Person } from './models/person.model';

@Pipe({
    name: 'search'
})
export class SearchPipe implements PipeTransform {

    transform(items: Person[], attribute: string, search: any): Person[] {
        if (search && search.trim().length > 0) {
            return items.filter(
                item => {
                    if (item[attribute].toUpperCase().indexOf(search.toUpperCase()) !== -1) {
                        return item[attribute];
                    }
                }
            );
        } else {
            return items;
        }
    }
}
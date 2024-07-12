import { Pipe, PipeTransform } from '@angular/core';
import { Book } from '../interfaces/book';

@Pipe({
  name: 'pagination',
  standalone: true
})
export class PaginationPipe implements PipeTransform {

  transform(books: Book[],pageSize:number,pageNumber:number): Book[] {
    const startIndex = pageSize*(pageNumber-1);  //4
    const endIndex = startIndex+pageSize-1; //5
    return books.slice(startIndex,endIndex+1);
  }

}

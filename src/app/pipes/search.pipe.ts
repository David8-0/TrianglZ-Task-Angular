import { Pipe, PipeTransform } from '@angular/core';
import { Book } from '../interfaces/book';

@Pipe({
  name: 'search',
  standalone: true
})
export class SearchPipe implements PipeTransform {

  transform(books: Book[], str: string): Book[] {
    return books.filter(
      book =>book.title?.toLocaleLowerCase().includes(str.toLowerCase()) || book.author?.toLocaleLowerCase().includes(str.toLowerCase())
    );
  }

}

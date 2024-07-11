import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../interfaces/book';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  baseURL:string = `http://localhost:3000/books/`;
  constructor(private _http: HttpClient) { }

  getAll():Observable<Book[]>{
    return this._http.get<Book[]>(this.baseURL);
  }

  delete(bookID:number):Observable<Book>{
    return this._http.delete<Book>(this.baseURL+bookID);
  }

  getByID(bookID:number):Observable<Book>{
    return this._http.get<Book>(this.baseURL+bookID);
  }

  add(book:Book):Observable<Book>{
    return this._http.post<Book>(this.baseURL,book);
  }

  update(book:Book,bookID:number):Observable<Book>{
    return this._http.patch<Book>(this.baseURL+bookID,book);
  }
  
}

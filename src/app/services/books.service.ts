import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../interfaces/book';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  baseURL:string = `http://localhost:3000/`;
  constructor(private _http: HttpClient) { }

  getAll():Observable<Book[]>{
    return this._http.get<Book[]>(this.baseURL+"books");
  }

  getAllCategories():Observable<{data:string[]}>{
    return this._http.get<{data:string[]}>(this.baseURL+"categories");
  }
  getAllVersions():Observable<{data:number[]}>{
    return this._http.get<{data:number[]}>(this.baseURL+"versions");
  }

  delete(bookID:string):Observable<Book>{
    return this._http.delete<Book>(this.baseURL+"books/"+bookID);
  }

  getByID(bookID:string):Observable<Book>{
    return this._http.get<Book>(this.baseURL+"books/"+bookID);
  }

  add(book:Book):Observable<Book>{
    return this._http.post<Book>(this.baseURL+"books",book);
  }

  update(book:Book,bookID:string):Observable<Book>{
    return this._http.patch<Book>(this.baseURL+"books/"+bookID,book);
  }
  
}

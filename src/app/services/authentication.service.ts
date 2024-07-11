import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../interfaces/user';
import { BooksService } from './books.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  baseURL:string = `http://localhost:3000/auth`;
  user:BehaviorSubject<User> = new BehaviorSubject<User>({} as User);

  constructor(private _http: HttpClient,private _booksService:BooksService) {
    if(localStorage.getItem('token') && localStorage.getItem('email')){
      const userEmail = `${localStorage.getItem('email')}`;
      this.login(userEmail).subscribe({
        next:(response)=>{
          this.user.next(response[0]);
        },
        error:(err)=>{
          this.logOut();
        }
      })
    }
   }


  login(email:string):Observable<User[]>{
    const params = `?email=${email}`;
    return this._http.get<User[]>(this.baseURL+params);
  }

  setUser(user:User,token?:string){
    this.user.next(user);
    localStorage.setItem("email", `${user.email}`);
    if(token){
      localStorage.setItem("token", `${token}`);
    }
  }

  logOut(){
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    this.user.next({} as User);
  }
}

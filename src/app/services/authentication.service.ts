import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../interfaces/user';
import { BooksService } from './books.service';
import { Login } from '../interfaces/login';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  baseURL:string = `http://localhost:3000/auth`;
  user:BehaviorSubject<User> = new BehaviorSubject<User>({} as User);

  constructor(private _http: HttpClient,private _booksService:BooksService) {
    if(localStorage.getItem('token') && localStorage.getItem('email')){
      const userEmail = `${localStorage.getItem('email')}`;
      this.getUserByEmail(userEmail).subscribe({
        next:(response)=>{
          if(response.length > 0)
            this.user.next(response[0]);
          else
            this.logOut();
        },
        error:(err)=>{
          this.logOut();
        }
      })
    }
   }

   getUserByEmail(email:string):Observable<User[]>{
    const params = `?email=${email}`;
    return this._http.get<User[]>(this.baseURL+params);
  }

   
  login(login:Login):Observable<User[]>{
    const params = `?email=${login.email}`;
    return this._http.get<User[]>(this.baseURL+params);
  }

  setUser(user:User){
    this.user.next(user);
    localStorage.setItem("email", `${user.email}`);
    localStorage.setItem("token", `${user.token}`);
  }

  logOut(){
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    this.user.next({} as User);
  }
}

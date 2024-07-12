import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { User } from 'src/app/interfaces/user';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit,OnDestroy{
  user:User= {} as User;
  subscriptions: Subscription[] = [];

  constructor(private _authService:AuthenticationService,private _router: Router){}

  ngOnInit(): void {
    const sub =this._authService.user.subscribe(newUser => {
      this.user = newUser;
    })
    this.subscriptions.push(sub);
  }

  ngOnDestroy(): void {
      this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  logout(){
    this._authService.logOut();
    this._router.navigateByUrl('/login');
  }
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private _authService:AuthenticationService){}

  loginForm:FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });
  login(form:FormGroup){
    if(form.valid){
      this._authService.login(form.value).subscribe({
        next:(res)=>{
          console.log(res);
          if(res.length>0){
            this._authService.setUser(res[0]);
          }
        },error:(err)=>{
          console.log(err);
          
        }
      });
    }
  }
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  isShowPassword:boolean = false;
  showErrors:boolean = false;
  isInvalidCredentials:boolean = false;
  constructor(private _authService:AuthenticationService,private _router: Router){}

  loginForm:FormGroup = new FormGroup({
    email: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',[Validators.required])
  });

  login(form:FormGroup){
    if(form.valid){
      this._authService.login(form.value).subscribe({
        next:(res)=>{
          if(res.length>0){
            this._authService.setUser(res[0]);
            this._router.navigateByUrl('/books/list');
          }else{
            this.isInvalidCredentials=true;
          }
        },error:(err)=>{
        }
      });
    }else{
      this.showErrors=true;
    }
  }

  toggleShowPassword(){
    this.isShowPassword=!this.isShowPassword;
  }

}

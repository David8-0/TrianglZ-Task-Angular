import { Component } from '@angular/core';
import { BooksContainerComponent } from './components/Books/books-container/books-container.component';
import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { BooksListComponent } from './components/Books/books-list/books-list.component';
import { BookAddComponent } from './components/Books/book-add/book-add.component';
import { BookDetailsComponent } from './components/Books/book-details/book-details.component';
import { BookEditComponent } from './components/Books/book-edit/book-edit.component';
import { authenticationGuard } from './guards/authentication.guard';
import { isLoggedInGuard } from './guards/is-logged-in.guard';

export const routes: Routes = [
    {path:'',redirectTo:'login',pathMatch:'full'},
    {path:'login',component:LoginComponent,canActivate:[isLoggedInGuard]},
    {path:'books',component:BooksContainerComponent,canActivate:[authenticationGuard],children:[
        {path:'list',component:BooksListComponent},
        {path:'add',component:BookAddComponent},
        {path:'details/:id',component:BookDetailsComponent},
        {path:'edit/:id',component:BookEditComponent}
    ]}

];

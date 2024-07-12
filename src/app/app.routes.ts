import { Component } from '@angular/core';
import { BooksContainerComponent } from './components/Books/books-container/books-container.component';
import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { BooksListComponent } from './components/Books/books-list/books-list.component';
import { BookAddComponent } from './components/Books/book-add/book-add.component';
import { BookDetailsComponent } from './components/Books/book-details/book-details.component';

export const routes: Routes = [
    {path:'login',component:LoginComponent},
    {path:'books',component:BooksContainerComponent,children:[
        {path:'list',component:BooksListComponent},
        {path:'add',component:BookAddComponent},
        {path:'details',component:BookDetailsComponent}
    ]}
];

import { Subscription } from 'rxjs';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AddEditComponent } from '../../shared/add-edit/add-edit.component';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/interfaces/book';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-book-edit',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,AddEditComponent],
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.scss']
})
export class BookEditComponent implements OnInit,OnDestroy{
    bookID:string|null = null
    editBook:Book = {} as Book;
    subscription:Subscription = new Subscription();
    
    constructor(
      private _activateRoute: ActivatedRoute,
      private _bookService: BooksService
    ){}

    ngOnInit(): void {
      this.subscription = this._activateRoute.paramMap.subscribe(params => {
        this.bookID = params.get('id');
        if(this.bookID){
          this._bookService.getByID(this.bookID).subscribe({
            next:(response)=>{
              this.editBook = response;
              console.log(this.editBook);
            },
            error:(error)=>{
              console.log(error);
            }
          });

        }
       })
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { BooksService } from 'src/app/services/books.service';
import { Subscription } from 'rxjs';
import { Book } from 'src/app/interfaces/book';

@Component({
  selector: 'app-book-details',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit,OnDestroy{
    bookID:string|null = null
    book:Book = {} as Book;
    subscription:Subscription = new Subscription();

    showDeleteWarnings:boolean=false;
    selectedBookID:string="";

  constructor(
    private _activateRoute: ActivatedRoute,
    private _bookService: BooksService,
    private _router:Router
  ){}

  ngOnInit(): void {
    this.subscription = this._activateRoute.paramMap.subscribe(params => {
      this.bookID = params.get('id');
      if(this.bookID){
        this._bookService.getByID(this.bookID).subscribe({
          next:(response)=>{
            this.book = response;
          },
          error:(error)=>{
          }
        });

      }
     })
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  showDeleteMessage(bookID:string){
    this.showDeleteWarnings=true;
    this.selectedBookID=bookID;
  }

  hideDeleteMessage(){
    this.showDeleteWarnings=false;
    this.selectedBookID="";
  }

  deleteBook(){
    this._bookService.delete(this.selectedBookID).subscribe({
      next:(response)=>{
        this._router.navigateByUrl('/books/list');
      },
      error:(error)=>{
      },
      complete:()=>{this.hideDeleteMessage()}
    });
  }
}

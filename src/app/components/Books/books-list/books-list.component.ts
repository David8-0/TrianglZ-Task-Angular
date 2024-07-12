import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { BooksService } from 'src/app/services/books.service';
import { Book } from 'src/app/interfaces/book';
import { PaginationPipe } from 'src/app/pipes/pagination.pipe';
import { TimesPipe } from 'src/app/pipes/times.pipe';
import { SearchPipe } from 'src/app/pipes/search.pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-books-list',
  standalone: true,
  imports: [CommonModule,RouterLink,PaginationPipe,TimesPipe,SearchPipe,FormsModule],
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent implements OnInit{
  books:Book[] = [];
  numberOfPages:number=0;
  pageSize:number=5;
  cureentPage:number=1;
  searchKey:string="";
  showDeleteWarnings:boolean=false;
  selectedBookID:string="";

  constructor(private _bookService:BooksService){}

  ngOnInit(): void {
    this._bookService.getAll().subscribe({
      next:(response)=>{
        this.books = response;
        this.numberOfPages = Math.ceil(this.books.length / this.pageSize);
      }
    });
  }

  jumpToPage(page: number) {
    this.cureentPage = page; 
  }

  nextPage(){
    if(this.cureentPage < this.numberOfPages)
      this.cureentPage++;
  }
  previousPage(){
    if(this.cureentPage > 1)
      this.cureentPage--;
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
        console.log(response);
      },
      error:(error)=>{console.log(error);
      },
      complete:()=>{this.hideDeleteMessage()}
    });
  }

  
}

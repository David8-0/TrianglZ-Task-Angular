import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BooksService } from 'src/app/services/books.service';
import { CustomValidationService } from 'src/app/services/custom-validation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-add',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.scss']
})
export class BookAddComponent implements OnInit{
  showErrors:boolean = false;
  booksCategoreis:string[] = [];
  booksVersions:number[] = [];
  constructor(
    private _booksService:BooksService,
    private _customValidation:CustomValidationService,
    private _router:Router
  ){}

  ngOnInit(): void {
      this._booksService.getAllCategories().subscribe({
        next:(response)=>{
          this.booksCategoreis = response.data;
        }
      });
      this._booksService.getAllVersions().subscribe({
        next:(response)=>{
          this.booksVersions = response.data;
        }
      });
  }
  addBookForm:FormGroup = new FormGroup({
    
    title: new FormControl('',[Validators.required, Validators.pattern('^[a-zA-Z]+$')]),
    category: new FormControl('',[Validators.required]),
    author: new FormControl('',[Validators.required, Validators.pattern('^[a-zA-Z]+$')]),
    ISBN: new FormControl('',[Validators.required, Validators.pattern('^[0-9-]+$'),Validators.minLength(10),Validators.maxLength(13)]),
    price: new FormControl('',[Validators.required,this._customValidation.twoDecimalPlacesValidator()]),
    version: new FormControl('',[Validators.required, ]), //Validators.pattern('^[a-zA-Z]+$')
    edition: new FormControl('',[Validators.required, Validators.pattern('^[a-zA-Z]+$')]),
    //image: new FormControl('',[Validators.required]),
    releaseDate: new FormControl(''),
    brief: new FormControl('',[Validators.required, Validators.pattern('^[a-zA-Z]+$'),Validators.maxLength(800)]),
  });


  addBook(bookForm:FormGroup){
    if(bookForm.valid){
      this._booksService.add(bookForm.value).subscribe({
        next:(response)=>{
          this._router.navigateByUrl('/books/list');
        },
        error:(error)=>{
        }
      })
    }else{
      this.showErrors=true;
    }
  }

  cancel(){
    this._router.navigateByUrl('/books/list');
  }
}

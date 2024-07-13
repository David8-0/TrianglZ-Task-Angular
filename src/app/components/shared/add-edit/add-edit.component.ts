import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksService } from 'src/app/services/books.service';
import { CustomValidationService } from 'src/app/services/custom-validation.service';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Book } from 'src/app/interfaces/book';

@Component({
  selector: 'app-add-edit',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.scss']
})
export class AddEditComponent implements OnChanges{
  @Input() editBook:Book|null = null;
  showErrors:boolean = false;
  booksCategoreis:string[] = [];
  booksVersions:number[] = [];
  constructor(
    private _booksService:BooksService,
    private _customValidation:CustomValidationService,
    private _router:Router
  ){}

  ngOnChanges(changes: SimpleChanges): void {
      if(this.editBook){
        this.addEditBookForm.get('title')?.setValue(this.editBook.title);
        this.addEditBookForm.get('category')?.setValue(this.editBook.category);
        this.addEditBookForm.get('author')?.setValue(this.editBook.author);
        this.addEditBookForm.get('ISBN')?.setValue(this.editBook.ISBN);
        this.addEditBookForm.get('price')?.setValue(this.editBook.price);
        this.addEditBookForm.get('version')?.setValue(this.editBook.version);
        this.addEditBookForm.get('edition')?.setValue(this.editBook.edition);
        this.addEditBookForm.get('releaseDate')?.setValue(this.editBook.releaseDate);
        this.addEditBookForm.get('brief')?.setValue(this.editBook.brief);
        this.addEditBookForm.get('pages')?.setValue(this.editBook.pages);
        this.addEditBookForm.get('toRead')?.setValue(this.editBook.toRead);
      }
  }

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
  addEditBookForm:FormGroup = new FormGroup({
    
    title: new FormControl('',[Validators.required, Validators.pattern(/^[a-zA-Z\s.']*$/)]),
    category: new FormControl('',[Validators.required]),
    olderVersion: new FormControl(''),
    pages: new FormControl('',[Validators.required]),
    toRead: new FormControl('',[Validators.required]),
    author: new FormControl('',[Validators.required, Validators.pattern(/^[a-zA-Z\s.']*$/)]),
    ISBN: new FormControl('',[Validators.required, Validators.pattern('^[0-9-]+$'),Validators.minLength(10),Validators.maxLength(13)]),
    price: new FormControl('',[Validators.required,this._customValidation.twoDecimalPlacesValidator()]),
    version: new FormControl('',[Validators.required, Validators.pattern(/^[a-zA-Z\s.']*$/)]), //
    edition: new FormControl('',[Validators.required, Validators.pattern(/^[a-zA-Z\s.']*$/)]),
    //image: new FormControl('',[Validators.required]),
    releaseDate: new FormControl(''),
    brief: new FormControl('',[Validators.required, Validators.pattern(/^[a-zA-Z\s.']*$/),Validators.maxLength(800)]),
  });


  submitBook(bookForm:FormGroup){
    if(bookForm.valid && !this.editBook){
      this._booksService.add(bookForm.value).subscribe({
        next:(response)=>{
          this._router.navigateByUrl('/books/list');
        },
        error:(error)=>{
        }
      })
    }else if(bookForm.valid && this.editBook){
      this._booksService.update(bookForm.value,this.editBook.id).subscribe({
        next:(response)=>{
          this._router.navigateByUrl('/books/list');
        },
        error:(error)=>{
        }
      })
    }
    else{
      this.showErrors=true;
    }
  }

  cancel(){
    this._router.navigateByUrl('/books/list');
  }

  onImageUpload(event:any){
    const file = event.target.files[0];
    if(file){
      console.log(file);
      
    }
  }


}

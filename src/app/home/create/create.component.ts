import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { BookService } from 'src/app/shared/service/book.service';
import { AlertService } from 'src/app/shared/service/alert.service';
import { Categories } from 'src/app/models/categories';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  bookForm: FormGroup;
  submitted = false;
  items: any;
  catList: Categories[];
  id: any;

  constructor(private bookSV: BookService,
    private alert: AlertService,
    private router: Router,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.initialCreateFormData();
    this.initialLoadBook();
    this.activatedRoute.params.forEach(
      params => {
        if (params.id !== undefined) {
          this.bookForm.get('bookId').disable();
          this.id = params.id;
          this.initialLoadOneBook(this.id);
        }
      });
  }
  get validate() { return this.bookForm.controls; }

  private initialCreateFormData() {
    this.bookForm = this.formBuilder.group({
      bookId: ['', [Validators.required]],
      bookName: ['', [Validators.required, Validators.maxLength(50), Validators.pattern('^((?!_)[A-Za-z0-9ก-๙])+$')]],
      bookAmount: ['', [Validators.required]],
      bookdate: ['', [Validators.required]],
      bookcatId: [, [Validators.required]],
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.bookForm.invalid) {
      return;
    }
    if (this.bookForm.get('bookId').value !== this.id) {
      this.
        bookSV.onAddBook(this.bookForm.value)
        .then(res => {
          this.alert.notify(res.message, 'success');
          this.router.navigateByUrl('/home');
        });
      return;
    } else {
      this.bookForm.get('bookId').enable();
    console.log(this.bookForm.value);
    this.
      bookSV.onUpdateBook(this.id, this.bookForm.value)
      .then(res => {
        this.alert.notify(res.message, 'success');
        console.log(this.bookForm.value);
        this.bookForm.get('bookId').disable();
        this.router.navigateByUrl('/home');
      });
    }
  }

  private initialLoadBook() {
    this.
    bookSV.getCategory()
      .then(res => {
        this.catList = res;
        this.bookForm.get('bookcatId').setValue(res[0].catId);
      });
  }

  private initialLoadOneBook(id: any) {
    this.
    bookSV.getOneBook(id)
      .then(res => {
        this.bookForm.get('bookId').setValue(res.bookId);
        this.bookForm.get('bookName').setValue(res.bookName);
        this.bookForm.get('bookAmount').setValue(res.bookAmount);
        this.bookForm.get('bookdate').setValue(res.bookdate.toString().split('T')[0]);
        this.bookForm.get('bookcatId').setValue(res.bookcatId);
      })
      .catch(err => this.alert.notify(err.message, 'error'));
  }

}

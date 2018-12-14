import { Component, OnInit } from '@angular/core';
import { BookService } from '../shared/service/book.service';
import { Router } from '@angular/router';
import { AlertService } from '../shared/service/alert.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  Book = [];

  constructor(private bookSV: BookService,
              private router: Router,
              private alert: AlertService) { }

  ngOnInit() {
    this.fetchBook();
  }

  private fetchBook() {
    this.bookSV.getBook()
    .then(item => {
      this.Book = item;
      console.log(item);
    });
  }

  onDelete(id) {
    if (confirm('ต้องการลบใช่หรือไม่')) {
      this.bookSV.onDeleteBook(id)
      .then(item => {
        this.fetchBook();
      });
    }
  }
}

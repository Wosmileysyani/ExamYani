import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { Book } from 'src/app/models/book';
import { Categories } from 'src/app/models/categories';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpService) {
  }

  onAddBook(model: Book) {
    return this.http
      .requestPost('Books/AddBook', model)
      .toPromise() as Promise<{ success, message }>;
  }

  onDeleteBook(id: any) {
    return this.http
      .requestDelete('Books/' + id)
      .toPromise() as Promise<{ message }>;
  }

  onUpdateBook(id: any, model: Book) {
    return this.http
        .requestPut('Books/' + id, model)
        .toPromise() as Promise<{ message }>;
}

  getBook() {
    return this.http
    .requestGet('Books')
    .toPromise() as Promise<[]>;
  }

  getOneBook(id: any) {
    return this.http
    .requestGet('Books/' + id)
    .toPromise() as Promise<Book>;
  }

  getCategory() {
    return this.http
    .requestGet('Books/Categories')
    .toPromise() as Promise<Categories[]>;
  }
}

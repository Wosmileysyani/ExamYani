import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) {
  }

  private address = 'https://localhost:44350/api/';

  requestGet(url: string) {
    return this.http.get(this.address + url);
  }

  requestPost(url: string, body: any) {
    return this.http.post(this.address + url, body);
  }

  requestDelete(url: string) {
    return this.http.delete(this.address + url);
  }

  requestPut(url: string, body: any) {
    console.log(url + body);
    return this.http.put(this.address + url, body);
  }
}

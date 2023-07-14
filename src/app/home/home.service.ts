import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders(
    {
      'Content-Type': 'application/json',
    }
  )
};
@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

  getItems(url: string): Observable<object> {
    return this.http.get(url, httpOptions);
  }
  getItemsByCategory(uri : string):Observable<Object>{
    return this.http.get(uri, httpOptions)
  }
}

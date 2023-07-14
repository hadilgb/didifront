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
export class authService {
    
  constructor(private http: HttpClient) { }

  login(body :any): Observable<string> {
  
    return this.http.post("http://localhost:8094/api/v1/auth/authenticate",body, {responseType:'text'});
}
}

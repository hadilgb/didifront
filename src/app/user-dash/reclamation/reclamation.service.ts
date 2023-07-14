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
export class ReclamationService {

  constructor(private http: HttpClient) { }

  getRec(): Observable<object> {
    const url = "http://localhost:8094/reclamation/get"; 
    return this.http.get(url, httpOptions);
  }
  
  addRecs(item: any): Observable<any> {
    const url = "http://localhost:8094/reclamation/Createprod"; // Remplacez l'URL par votre endpoint d'ajout de produit
    return this.http.post(url, item);
  }

}

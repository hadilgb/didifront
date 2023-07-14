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
export class CategorieService {

  constructor(private http: HttpClient) { }
  deleteItem(id: string): Observable<any> {
    const deleteUrl = `http://localhost:8094/Category/deletecat/${id}`;
    return this.http.delete(deleteUrl, httpOptions);
  }
  addCategorie(categorie: any): Observable<any> {
    const url = "http://localhost:8094/Category/Createcat"; 
    return this.http.post(url, categorie);
  }
  addSubCategorie(categorie: any): Observable<any> {
    const url = "http://localhost:8094/Subcategory/Createcat"; 
    return this.http.post(url, categorie);
  }
  updateCategorie(id: string,categorie: any): Observable<any> {
    const url = `http://localhost:8094/Category/Updatecat/${id}`;
    return this.http.put(url, categorie);
  }
}

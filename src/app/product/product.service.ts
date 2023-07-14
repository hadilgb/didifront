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
export class ProductService {

  constructor(private http: HttpClient) { }

  getItems(url: string): Observable<object> {
    return this.http.get(url, httpOptions);
  }
  getItemsByCategory(uri : string):Observable<Object>{
    return this.http.get(uri, httpOptions)
  }
  deleteItem(id: string): Observable<any> {
    const deleteUrl = `http://localhost:8094/Product/deleteprod/${id}`;
    return this.http.delete(deleteUrl, httpOptions);
  }

  addProduct(product: any): Observable<any> {
    const categorieid= this.http.get("")
    const url = "http://localhost:8094/Product/Createprod"; // Remplacez l'URL par votre endpoint d'ajout de produit
    return this.http.post(url, product);
  }
  addItem(item: any): Observable<any> {
    const url = "http://localhost:8094/Lignecommande/Create"; // Remplacez l'URL par votre endpoint d'ajout de produit
    return this.http.post(url, item);
  }
  updateProduct(id: string,product: any): Observable<any> {
    const url = `http://localhost:8094/Product/Updateprod/${id}`; // Remplacez l'URL par votre endpoint d'ajout de produit
    return this.http.put(url, product);
  }
}

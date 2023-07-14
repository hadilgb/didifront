import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartserviceService {
constructor(private http: HttpClient){}
name:any;
  cartItems: any[] = [];
  commandItems: any[] = [];
  getCommandItems(): Observable<any> {
    
    const url = "http://localhost:8094/Commande/get"; // Remplacez l'URL par votre endpoint d'ajout de produit
    return this.http.get(url);
  }
  getNameProduit(id:any): Observable<any> {
    const url = "http://localhost:8094/Product/productbyId/"+id;
     this.http.get(url).subscribe(
      (data) => {
        this.name =data

      },(error) => {

      });
      return this.name
  }
  addToCart(productId: string, quantity: number, prixunite: number): void {
    const item = {
      prodid: productId,
      quantite:
       quantity,
      prixtotale: prixunite * quantity
    };
    this.cartItems.push(item);
  }
  createCommande(item: any): Observable<any> {
    const url = "http://localhost:8094/Commande/Createprod"; // Remplacez l'URL par votre endpoint d'ajout de produit
    return this.http.post(url, item);
  }
  confirmCommande(id:any,item: any): Observable<any> {
    const url = "http://localhost:8094/Commande/Update/"+id; // Remplacez l'URL par votre endpoint d'ajout de produit
    return this.http.put(url, {"etat":item});
  }
  removeCommand(item: any): Observable<any> {
    const url = "http://localhost:8094/Commande/delete/"+item; // Remplacez l'URL par votre endpoint d'ajout de produit
    return this.http.delete(url, item);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {
constructor(private http: HttpClient){}
getuser(): Observable<any> {
  
  const url = "http://localhost:8094/user/getuser"; // Remplacez l'URL par votre endpoint d'ajout de produit
  return this.http.get(url);
}
updateuser(id: string,stat: any): Observable<any> {
    const url = `http://localhost:8094/user/Updateuser/${id}`; // Remplacez l'URL par votre endpoint d'ajout de produit
    return this.http.put(url, stat);
  }
}
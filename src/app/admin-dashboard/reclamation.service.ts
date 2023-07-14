import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReclamationService {
constructor(private http: HttpClient){}
getreclamation(): Observable<any> {
  
  const url = "http://localhost:8094/reclamation/get"; // Remplacez l'URL par votre endpoint d'ajout de produit
  return this.http.get(url);
}
remove(id : any):Observable<any>{
    return this.http.delete("http://localhost:8094/reclamation/delete/"+id);
}
}
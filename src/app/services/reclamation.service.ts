import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReclamationService {
  reclamationURL:string="http://localhost:3000/reclamation";
  constructor(private httpClient: HttpClient) { }
  addReclamation(reclamation:any){
    return this.httpClient.post<{ message: string }>(this.reclamationURL, reclamation);
  }
  getAllUserReclamations(id:any){
    return this.httpClient.get<{ reclamationsArray:any}>(`${this.reclamationURL}/${id}`);
  }
  deleteReclamation(id:any){
    return this.httpClient.delete<({isDeleted:boolean})>(`${this.reclamationURL}/${id}`);
  }
}

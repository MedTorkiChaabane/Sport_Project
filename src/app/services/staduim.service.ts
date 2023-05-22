import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StaduimService {
staduimUrl:string="http://localhost:3000/staduims";
  constructor(private httpClient: HttpClient) { }
   //Response: message
 addStaduim(staduimObj:any){
  return this.httpClient.post<{message:string}>(this.staduimUrl,staduimObj);
}
  //Response array of objects
  getAllStaduims(){
    return this.httpClient.get<{staduimsArray:any, message:string}>(this.staduimUrl);
  }
  deleteStaduim(id:any){
    return this.httpClient.delete<{isDeleted:boolean}>(`${this.staduimUrl}/${id}`);
  }
  getStaduimById(id:any){
    return this.httpClient.get<{staduim:any}>(`${this.staduimUrl}/${id}`);
  }
  editStaduim(newStaduim:any){
    return this.httpClient.put<({isUpdated:boolean})>(this.staduimUrl, newStaduim);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  //Backend server Address
  commentURL:string="http://localhost:3000/addComment";
  // httpClient: un livreur
  constructor(private httpClient:HttpClient) { }
  addComment(comment:any){
    return this.httpClient.post<{message: string}>(this.commentURL, comment);
  }
}

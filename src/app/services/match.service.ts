import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatchService {
  //Backend server Address
  matchURL:string="http://localhost:3000/matches";
  // httpClient: un livreur
  constructor(private httpClient:HttpClient) { }

  //Response: array of objects
  getAllMatches(){
    return this.httpClient.get<{matchesArray:any, message:string}>(this.matchURL);
  }

  // Response one object
  getMatchById(id:any){
    return this.httpClient.get<{match:any}>(`${this.matchURL}/${id}`);
  }

  //Response: message/Boolean
  deleteMatch(id:any){
    return this.httpClient.delete<{isDeleted:boolean}>(`${this.matchURL}/${id}`)
  }

  //Response: message
  addMatch(matchObj:any){
    return this.httpClient.post<{message:string}>(this.matchURL,matchObj);
  }
  //Response: tableau d'objets
  searchMatch(searchObj:any){
    return this.httpClient.post<{searchMatches:any}>(`${this.matchURL}/search`,searchObj);
  }
  //Response: boolean
  editMatch(newMatch:any){
    return this.httpClient.put<{isUpdated:string}>(this.matchURL, newMatch);
  }
  //Response matchesArray with an attribut comments
  getAllMatchesWithComments(){
    return this.httpClient.get<{matches:any}>(`${this.matchURL}/comments/matchwithcomment`);
  }
}

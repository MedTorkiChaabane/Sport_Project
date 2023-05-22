import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  //Backend server address
  playerURL:string="http://localhost:3000/players";
  //httpClient: un livreur
  constructor(private httpClient:HttpClient) { }

  //Response array of objects
  getAllPlayers(){
    return this.httpClient.get<{playersArray:any, message:string}>(this.playerURL);
  }

  //Response one object
  getPlayerById(id:any){
    return this.httpClient.get<{player:any}>(`${this.playerURL}/${id}`);
  }

  //Response Message/boolean
  deletePlayer(id:any){
    return this.httpClient.delete<{isDeleted:boolean}>(`${this.playerURL}/${id}`);
  }

  //Response Message/boolean
  addPlayer(playerObj:any){
    return this.httpClient.post(this.playerURL,playerObj);
  }

  //Response Message/boolean
  editPlayer(newPlayer:any){
    return this.httpClient.put(this.playerURL,newPlayer);
  }
}

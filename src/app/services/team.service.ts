import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  //Backend server Address
  teamURL: string = "http://localhost:3000/teams";
  // httpClient: un livreur
  constructor(private httpClient: HttpClient) { }

  //Response: array of objects
  getAllTeams() {
    return this.httpClient.get<{ teamsArray: any, message: string }>(this.teamURL);
  }

  // Response one object
  getTeamById(id: any) {
    return this.httpClient.get<{ team: any }>(`${this.teamURL}/${id}`);
  }

  //Response: message/Boolean
  deleteTeam(id: any) {
    return this.httpClient.delete<{ isDeleted: boolean }>(`${this.teamURL}/${id}`)
  }

  //Response: message/Boolean
  addTeam(teamObj: any) {
    return this.httpClient.post<{message:string}>(this.teamURL, teamObj);
  }

  //Response: Message/boolean
  editTeam(newTeam: any) {
    return this.httpClient.put<{isUpdated:boolean}>(this.teamURL, newTeam);
  }
}

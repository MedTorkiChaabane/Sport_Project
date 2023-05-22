import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search-team',
  templateUrl: './search-team.component.html',
  styleUrls: ['./search-team.component.css']
})
export class SearchTeamComponent implements OnInit {
  player: any;
  findedTeam: any = {};
  team: any = {};
  searchTeamForm: FormGroup;
  teamsTab: any = [];
  staduimsTab: any = [];
  playersTab: any = [];
  findedPlayers:any=[];
  constructor() { }

  ngOnInit() {
    this.teamsTab = JSON.parse(localStorage.getItem("teams") || "[]");
    this.staduimsTab = JSON.parse(localStorage.getItem("staduims") || "[]");
    this.playersTab = JSON.parse(localStorage.getItem("players") || "[]");
  }
  searchTeam() {
    this.findedTeam = {};
    for (let i = 0; i < this.teamsTab.length; i++) {
      if ((this.teamsTab[i].name).toLowerCase() == (this.team.name).toLowerCase()) {
        this.findedTeam = this.teamsTab[i];
        break;
      }
    }

  }
  searchStaduim(sid: any) {
    // for(let i=0; i<this.staduims.length;i++){
    //   if(this.staduims[i].id == id){
    //   this.findedStaduim=this.staduims[i];
    //   break;
    //   }
    // }
    // return this.findedStaduim;
    return this.staduimsTab.find((elt) => { return elt.id == sid });
  }
  searchTeamPlayers(teamId){
    this.findedPlayers=[];
    // for(let i = 0; i<this.playersTab.length; i++){
    //   if(this.playersTab[i].teamId == teamId){
    //     this.findedPlayers.push(this.playersTab[i]);
    //   }
    // }
    //filter : parcourir le tableau sans break ; finf : parcourir le tableau avec break;
    this.findedPlayers=this.playersTab.filter((obj) =>{return obj.teamId==teamId});// 
    return this.findedPlayers;
  }
}



import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-players-table',
  templateUrl: './players-table.component.html',
  styleUrls: ['./players-table.component.css']
})
export class PlayersTableComponent implements OnInit {
  players: any;
  teams: any = [];
  constructor(private router:Router, private playerService: PlayerService, private teamService: TeamService) { }

  ngOnInit() {
    this.playerService.getAllPlayers().subscribe(
      (data) => {
        this.players = data.playersArray
      }
    );
    this.teamService.getAllTeams().subscribe(
      (data) => {
        this.teams = data.teamsArray;
      }
    );
  }
  deletePlayer(id: any) {
    this.playerService.deletePlayer(id).subscribe(
      (data) => {
        this.playerService.getAllPlayers().subscribe(
          (data) => {
            this.players = data.playersArray;
          }
        );
      }
    );
  }
  goToDisplay(id:any){
    this.router.navigate([`playerInfo/${id}`]);
  }
  goToEdit(id:any){
    this.router.navigate([`editPlayer/${id}`]);
  }
  searchTeam(id: any) {
    return this.teams.find((elt: any) => { return elt._id == id });
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StaduimService } from 'src/app/services/staduim.service';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-teams-table',
  templateUrl: './teams-table.component.html',
  styleUrls: ['./teams-table.component.css']
})
export class TeamsTableComponent implements OnInit {
  teams: any=[];
  staduims: any=[];
  findedStaduim: any = {};
  constructor(private router: Router, private teamService:TeamService, private staduimService:StaduimService) { }

  ngOnInit() {
    this.teamService.getAllTeams().subscribe(
      (data)=>{
        this.teams=data.teamsArray;
      }
    );
   this.staduimService.getAllStaduims().subscribe(
    (data) => {
      this.staduims = data.staduimsArray;
    }
   );


  }
  displayTeam(id: any) {
    this.router.navigate([`teamInfo/${id}`]);
  }
  editTeam(id: any) {
    this.router.navigate([`editTeam/${id}`]);
  }

  deleteTeam(id: any) {
    this.teamService.deleteTeam(id).subscribe(
      (data)=>{
        this.teamService.getAllTeams().subscribe(
          (data)=>{
            this.teams=data.teamsArray;
          }
        );
      }
    );
  }
  searchStaduim(id: any) {
    return this.staduims.find((elt:any) => { return elt._id == id });
  }

}

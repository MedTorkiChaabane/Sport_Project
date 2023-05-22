import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { StaduimService } from 'src/app/services/staduim.service';
import { TeamService } from 'src/app/services/team.service';
import { generateId } from 'src/app/shared/generatedId';
@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css']
})
export class AddTeamComponent implements OnInit {
  team: any = {};
  staduims: any = [];
  teamForm: FormGroup;
  constructor(private router: Router, private teamService: TeamService, private staduimService:StaduimService) { }


  ngOnInit() {
  this.staduimService.getAllStaduims().subscribe(
    (data) => {
      this.staduims=data.staduimsArray;
    }
  );
  }

  addTeam() {
    //   let teamsTab:any=JSON.parse(localStorage.getItem("teams") || "[]");//declaration avant la creation de l'iobjet parce que l'id demande matchesTab
    //   this.team.id=generateId(teamsTab);
    //   teamsTab.push(this.team);
    //   localStorage.setItem('teams',JSON.stringify(teamsTab)); 
    //   this.router.navigate(["admin"]);
    this.teamService.addTeam(this.team).subscribe();
    this.router.navigate(["admin"]);
  }



}

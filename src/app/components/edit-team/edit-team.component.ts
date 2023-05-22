import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StaduimService } from 'src/app/services/staduim.service';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-edit-team',
  templateUrl: './edit-team.component.html',
  styleUrls: ['./edit-team.component.css']
})
export class EditTeamComponent implements OnInit {
  teamsTab: any;
  staduims:any=[];
  id: any;
  team: any={};
  teamForm: FormGroup;
  constructor(private activatedRoute: ActivatedRoute, private router: Router, private teamService:TeamService, private staduimService:StaduimService) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get("x");
    this.teamService.getTeamById(this.id).subscribe(
      (data)=>{
        this.team=data.team;
      }
    );
    this.staduimService.getAllStaduims().subscribe(
      (data) => {
        this.staduims = data.staduimsArray;
      }
    );
  }
  editTeam() {
    this.teamService.editTeam(this.team).subscribe();
    this.router.navigate(["admin"]);
  }

}

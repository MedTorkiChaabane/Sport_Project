import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';
import { TeamService } from 'src/app/services/team.service';
import { generateId } from 'src/app/shared/generatedId';
@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {
  player: any = {};
  teams: any = [];
  playerForm: FormGroup;
  id: any;
  title: string = "ADD PLAYER";
  constructor(private activatedRoute: ActivatedRoute, private router: Router, private playerService: PlayerService, private teamService: TeamService) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    if (this.id) {
      this.title = "EDIT PLAYER";
      this.playerService.getPlayerById(this.id).subscribe(
        (data) => {
          this.player = data.player;
        }
      );
    }
    this.teamService.getAllTeams().subscribe(
      (data) => {
        this.teams = data.teamsArray;
      }
    );
  }

  addPlayer() {
    if (this.id) {
      this.playerService.editPlayer(this.player).subscribe();
    } else {
      this.playerService.addPlayer(this.player).subscribe();
    }
    this.router.navigate(["admin"]);
  }



}



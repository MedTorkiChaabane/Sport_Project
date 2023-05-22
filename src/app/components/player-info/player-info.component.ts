import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-player-info',
  templateUrl: './player-info.component.html',
  styleUrls: ['./player-info.component.css']
})
export class PlayerInfoComponent implements OnInit {
  user:any={};
  player:any={};
  id:any;
  constructor(private playerService:PlayerService, 
    private activatedRoute:ActivatedRoute,
    private userService: UserService) { }

  ngOnInit() {
    //"id" paramètre récuperer du path dans app-routing.module.ts
    this.id=this.activatedRoute.snapshot.paramMap.get("id"); 
    this.playerService.getPlayerById(this.id).subscribe(
      (data) => {
        this.player=data.player;
      }
    );
   
  }

}

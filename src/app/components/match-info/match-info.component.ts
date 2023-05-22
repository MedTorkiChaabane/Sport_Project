import { Component, OnInit } from '@angular/core';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-match-info',
  templateUrl: './match-info.component.html',
  styleUrls: ['./match-info.component.css']
})
export class MatchInfoComponent implements OnInit {
  matchInfo:any={};
  matchId:any;
  constructor(private matchService:MatchService) { }

  ngOnInit() {

    this.matchId=localStorage.getItem("matchId");
    this.matchService.getMatchById(this.matchId).subscribe(
      (data) => {
        this.matchInfo=data.match;
      }
    );
    
  }
 

}

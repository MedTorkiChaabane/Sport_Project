import { Component, OnInit } from '@angular/core';
import { MatchService } from 'src/app/services/match.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {
  matchesTab:any=[];
  constructor(private matchService: MatchService) { }

  ngOnInit() {
    // this.matchService.getAllMatches().subscribe( 
    //   (data) => {
    //     console.log("Here response",data.matchesArray);
    //     this.matchesTab=data.matchesArray;
    //   }
    // );
    this.matchService.getAllMatchesWithComments().subscribe(
      (data)=>{
        console.log("here response with comment", data.matches);
        this.matchesTab= data.matches;
        
      }
    );
 
    
  
  }
  updateMatches(tab:any){
    this.matchesTab= tab;
  }

}

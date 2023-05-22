import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';


@Component({
  selector: 'app-add-match',
  templateUrl: './add-match.component.html',
  styleUrls: ['./add-match.component.css']
})
export class AddMatchComponent implements OnInit {
  //match : Object
  match:any={};
  // matchForm:Form id
  matchForm:FormGroup;
  constructor(private router:Router, private matchService:MatchService) { }

  ngOnInit() {
  }
 
  addMatch(){
      this.matchService.addMatch(this.match).subscribe(
        (data) => {
          console.log("Here data from BE", data.message);
          this.router.navigate(["admin"]);

        }
      );
  }


}
